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

  const groups = useSelector(state => state.groups);
  const state = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(groupActions.getGroupsFromAPI(1));
  }, []);

  const show = () => {
    setModalState({
      modalState: true
    });
  };

  const close = () => {
    setModalState({ modalState: false });
  };

  const handleGroupClick = () => {
    console.log("hi");
  };
  // const groupList = () => {
  //   return groups.map(group => <li>{group.name}</li>);
  // };
  console.log(groups);

  const renderGroups = () =>
    groups.map(group => {
      return (
        <Grid.Column key={group.id} onClick={handleGroupClick}>
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
    close();
  };

  const newGroupForm = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Group Name</label>
          <input
            placeholder="Group Name"
            name="group_name"
            value={this.state.group_name}
            onChange={this.handleForm}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  };

  console.log(groups);

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
        onClose={() => setModalState(false)}
        size="mini"
        closeIcon
        // trigger={<Button icon="plus" size="mini" positive></Button>}
      >
        <Modal.Header>Add New Group</Modal.Header>
        <Modal.Content>
          <Modal.Description>{newGroupForm}</Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default Dashboard;
