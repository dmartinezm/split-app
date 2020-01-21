import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import groupDetailActions from "../redux/actions/groupDetailActions";

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
  const [groupEdit, setGroupEdit] = useState(false);

  const groupId = props.group;

  const userGroups = useSelector(state => state.currentUser.user.groups);
  const selectedGroup = useSelector(state => state.groupDetails.details);

  const [newGroupName, setNewGroupName] = useState("");

  useEffect(() => {
    dispatch(groupDetailActions.getGroupDetailsFromAPI(groupId));
  }, [dispatch, groupId]);

  const renderGroupDetails = () => {
    if (userGroups) {
      return (
        <>
          {handleGroupEditRender(groupEdit)}
          {selectedGroup.expenses.map(expense => (
            <Segment key={expense.id}>
              <li key={expense.id}>
                {expense.name} {expense.description} ${expense.amount}
                <Icon
                  style={{ marginLeft: "1em" }}
                  color="red"
                  name="minus circle"
                  onClick={() => {
                    handleDeleteExpense(expense.id);
                  }}
                ></Icon>
                <Icon
                  style={{ marginLeft: "1em" }}
                  size="small"
                  name="pencil"
                  color="blue"
                  onClick={() => {
                    handleExpenseEdit(expense.id);
                  }}
                ></Icon>
              </li>
            </Segment>
          ))}
        </>
      );
    }
  };

  const handleExpenseEdit = event => {
    console.log(event);
  };

  const handleGroupNameSave = event => {
    const target = event.target;
    const value = target.value;

    dispatch(groupDetailActions.editGroupName(groupId, value));
    setGroupEdit(false);
  };

  const handleGroupEditRender = groupEdit => {
    return groupEdit ? (
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
        name="newGroupName"
        value={newGroupName}
        onChange={handleInputChange}
      />
    ) : (
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
  };

  const handleGroupEdit = () => {
    setGroupEdit(prevState => {
      return { groupEdit: !prevState };
    });
  };

  const handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(value);
    setNewGroupName({
      [name]: value
    });
  };

  const handleDeleteExpense = event => {
    console.log(event);
    dispatch(groupDetailActions.deleteExpenseFromAPI(event));
  };

  const addExpense = () => {
    const group = {
      group_id: groupId,
      user_id: localStorage.userId,
      name: "Hello",
      description: "Description",
      amount: 100.0
    };
    dispatch(groupDetailActions.addExpenseToAPI(group));
  };

  return (
    <div>
      <h1>Group Details</h1>
      {renderGroupDetails()}
    </div>
  );
};

export default GroupDetails;
