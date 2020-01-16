import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import groupActions from "../redux/actions/groupActions";
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

const Dashboard = () => {
  const [modalState, setModalState] = useState(false);
  const [newGroup, setGroupName] = useState({
    groupName: ""
  });
  const { groupName } = newGroup;
  const groups = useSelector(state => state.groups);
  const state = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(groupActions.getGroupsFromAPI(1));
  }, []);

  const show = () => {
    setModalState(true);
  };

  const close = () => {
    setModalState(false);
  };

  const handleGroupClick = () => {
    console.log("hi");
  };

  const handleForm = event => {
    console.log(event.target.value);
    setGroupName({ ...newGroup, [event.target.name]: event.target.value });
  };

  // const groupList = () => {
  //   return groups.map(group => <li>{group.name}</li>);
  // };

  const renderGroups = () =>
    groups.map(group => {
      return (
        <Grid.Column key={group.id} onClick={handleGroupClick}>
          <div className="0000">.</div>
          <Link to={`/group-details/${group.id}`}>
            <Segment>{group.name}</Segment>
          </Link>
        </Grid.Column>
      );
    });

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   // this.props.handleAddGroup(this.state.group_name);

  //   this.close();
  // };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(groupActions.addGroupToAPI(groupName));
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
        {/* <Icon
            style={{ marginLeft: "1em" }}
            size="mini"
            name="plus"
            positive
            onClick={this.show}
          /> */}
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

      <Modal
        open={modalState}
        onClose={close}
        size="mini"
        closeIcon
        // trigger={<Button icon="plus" size="mini" positive></Button>}
      >
        <Modal.Header>Add New Group</Modal.Header>
        <Modal.Content>
          <Modal.Description>{newGroupForm()}</Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default Dashboard;
