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
  Modal,
  Form
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
    setModalState(false);
    setGroupName({ groupName: "" });
  };

  const handleGroupClick = () => {
    console.log("hi");
  };

  const handleForm = event => {
    // console.log(event.target.value);
    setGroupName({ ...newGroup, [event.target.name]: event.target.value });
  };

  const renderGroups = () => {
    if (userGroups) {
      return userGroups.map(group => (
        <Grid.Column key={group.id} onClick={handleGroupClick}>
          <Link
            to={{
              pathname: `/group-details/${group.id}`,
              group: { name: "soemthing" }
            }}
          >
            <Segment>{group.name}</Segment>
          </Link>
        </Grid.Column>
      ));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(groupActions.addGroupToAPI(localStorage.userId, groupName));
    dispatch(userActions.addGroupToAPI(localStorage.userId, groupName));
    setGroupName({ groupName: "" });
    close();
  };

  const newGroupForm = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Group Name</label>
          <input
            placeholder="Group Name"
            name="groupName"
            value={groupName}
            onChange={handleForm}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
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
        ></Button>
      </Container>

      <Grid columns={3} container>
        {renderGroups()}
      </Grid>

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
