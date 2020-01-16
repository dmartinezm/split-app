import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Icon,
  Container,
  Grid,
  Header,
  Segment,
  Modal,
  Form
} from "semantic-ui-react";

class Groups extends Component {
  state = { open: false, group_name: "" };

  show = () => {
    this.setState({ open: true });
  };
  close = () => this.setState({ open: false, group_name: "" });

  handleGroupClick = () => {
    // this.props.history.push("/group-details");
    console.log("hi");
    // return <NavLink to="/group-details"></NavLink>;
  };
  renderGroups = () => {
    console.log(this.props);
    return this.props.groups.map(group => (
      <Grid.Column key={group.id} onClick={this.handleGroupClick}>
        <Link to={`/group-details/${group.id}`}>
          <Segment>{group.name}</Segment>
        </Link>
      </Grid.Column>
    ));
  };

  handleForm = event => {
    console.log(event.target.value);
    this.setState({
      group_name: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleAddGroup(this.state.group_name);

    this.close();
  };

  newGroupForm = () => {
    return (
      <Form onSubmit={this.handleSubmit}>
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

  render() {
    const { open } = this.state;
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
            onClick={this.show}
          ></Button>
        </Container>

        <Grid columns={3} container>
          {this.renderGroups()}
        </Grid>

        <Modal
          open={open}
          onClose={this.close}
          size="mini"
          closeIcon
          // trigger={<Button icon="plus" size="mini" positive></Button>}
        >
          <Modal.Header>Add New Group</Modal.Header>
          <Modal.Content>
            <Modal.Description>{this.newGroupForm()}</Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default Groups;
