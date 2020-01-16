import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import groupActions from "../redux/actions/groupActions";
// import AccountsAdapter from "../Adapters/AccountsAdapter";
import {
  Icon,
  Segment,
  Input,
  Container,
  Header,
  Button
} from "semantic-ui-react";

const GroupDetails = props => {
  const dispatch = useDispatch();
  const groups = useSelector(state => state.groups);

  const [groupId, setGroupId] = useState(parseInt(props.group));
  const [groupEdit, setGroupEdit] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const selectedGroup = groups.find(g => g.id === groupId);

  const renderGroupDetails = () => {
    // const { group, expenses, groupEdit } = this.state;
    return (
      <div>
        {handleGroupEditRender(groupEdit)}
        {selectedGroup.expenses.map(expense => {
          return (
            <Segment id={expense.id}>
              <li key={expense.id}>
                {expense.name} {expense.description} ${expense.amount}
                <Icon
                  style={{ marginLeft: "1em" }}
                  color="red"
                  name="minus circle"
                  // onClick={this.deleteExpense(expense)}
                ></Icon>
              </li>
            </Segment>
          );
        })}
      </div>
    );
  };

  const handleGroupEditRender = arg => {
    let groupName;
    if (arg) {
      groupName = (
        <Input
          icon={
            <Icon
              name="check"
              color="green"
              circular
              link
              onClick={handleGroupNameSave}
            />
          }
          // value={this.state.group.name}
          // onChange={this.handleGroupNameChange}
        />
      );
    } else {
      groupName = (
        <Container>
          <Header as="h2" style={{ display: "inline-block" }}>
            {selectedGroup.name}
          </Header>
          <Icon
            style={{ marginLeft: "1em" }}
            size="small"
            name="pencil"
            color="blue"
            onClick={handleGroupEdit}
          ></Icon>
          <Button size="small" positive onClick={addExpense}>
            New Expense
          </Button>
        </Container>
      );
    }

    return groupName;
  };

  const handleGroupNameSave = event => {
    console.log(event.target.name);
    setGroupEdit(false);
    // AccountsAdapter.updateGroup(this.state.group).then(data =>
    //   this.setState({
    //     group: data,
    //     groupEdit: false
    //   })
    // );
  };

  const handleGroupEdit = () => {
    setGroupEdit(prevState => {
      return { groupEdit: !prevState };
    });
  };

  const addExpense = () => {
    console.log("hello expense");
    const group_id = groupId;
    const name = "Test";
    const description = "This is a test";
    const amount = "100.99";
    setExpenses(prevState => [
      ...prevState,
      { group_id, name: name, description: description, amount: amount }
    ]);

    // this.setState(prevState => {
    //   return {
    //     expenses: [
    //       ...prevState.expenses,
    //       { group_id, name: name, description: description, amount: amount }
    //     ]
    //   };
    // });
  };

  return (
    <div>
      <h1>Group Details</h1>
      {renderGroupDetails()}
    </div>
  );
};

export default GroupDetails;
