import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";
import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Grid,
  Header,
  Segment,
  Menu,
  Icon,
  Modal,
  Form,
  Table
} from "semantic-ui-react";

const Groups = () => {
  const dispatch = useDispatch();

  // const currentUser = useSelector(state => state.currentUser.user);
  const userGroups = useSelector(state => state.currentUser.user.groups);

  const [modalState, setModalState] = useState(false);
  const [newGroup, setGroupName] = useState({
    groupName: ""
  });
  const { groupName } = newGroup;

  const show = () => {
    setModalState(true);
  };

  const close = () => {
    setGroupName({ groupName: "" });
    setModalState(false);
  };

  const handleForm = event => {
    setGroupName({ ...newGroup, [event.target.name]: event.target.value });
  };

  const renderGroups = () => {
    if (userGroups) {
      return (
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Group</Table.HeaderCell>
              <Table.HeaderCell>Total Amount</Table.HeaderCell>
              <Table.HeaderCell>Notes</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {userGroups.map(group => (
              <Table.Row key={group.id}>
                <Table.Cell>{group.name}</Table.Cell>
                <Table.Cell>{group.total}</Table.Cell>
                <Table.Cell>{group.name}</Table.Cell>
                <Table.Cell>
                  <Link to={{ pathname: `/group-details/${group.id}` }}>
                    <Button basic color="blue">
                      Details
                    </Button>
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      );
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userActions.addGroupToAPI(localStorage.userId, groupName));
    close();
  };

  const newGroupForm = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <input
            placeholder="Group Name"
            name="groupName"
            value={groupName}
            onChange={handleForm}
          />
        </Form.Field>
        <Button.Group>
          <Button onClick={close}>Cancel</Button>
          <Button.Or />
          <Button positive type="Submit">
            Save
          </Button>
        </Button.Group>
      </Form>
    );
  };

  return (
    <div>
      <Container>
        <Header as="h1" style={{ display: "inline-block" }}>
          My Expense Groups
        </Header>
        <Button
          style={{ marginLeft: "1em" }}
          icon="plus"
          size="mini"
          circular
          positive
          onClick={show}
        >
          New Group
        </Button>
      </Container>

      {renderGroups()}

      <Modal open={modalState} onClose={close} size="mini" closeIcon>
        <Modal.Header>Add New Group</Modal.Header>
        <Modal.Content>
          <Modal.Description>{newGroupForm()}</Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default Groups;
