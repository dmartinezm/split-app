import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import groupDetailActions from "../redux/actions/groupDetailActions";
import "../Styles/App.css";

import {
  Icon,
  Segment,
  Label,
  Input,
  Container,
  Header,
  Button,
  Table
} from "semantic-ui-react";

const GroupDetails = props => {
  const dispatch = useDispatch();
  const [groupEdit, setGroupEdit] = useState(false);

  const groupId = props.group;

  const userGroups = useSelector(state => state.currentUser.user.groups);
  const selectedGroup = useSelector(state => state.groupDetails.details);

  const groupName = selectedGroup.name;

  const [newGroupName, setNewGroupName] = useState("");

  useEffect(() => {
    dispatch(groupDetailActions.getGroupDetailsFromAPI(groupId));
  }, [userGroups, groupId, newGroupName]);

  const renderGroupDetails = () => {
    return (
      <>
        {handleGroupEditRender(groupEdit)}
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Expense</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {selectedGroup.expenses
              ? selectedGroup.expenses.map(expense => (
                  <Table.Row key={expense.id}>
                    <Table.Cell>
                      <Input name="name" type="text" value={expense.name} />
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        name="description"
                        type="text"
                        value={expense.description}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        name="amount"
                        type="number"
                        labelPosition="right"
                        placeholder="Amount"
                      >
                        <Label basic>$</Label>
                        <Input value={expense.amount} />
                      </Input>
                    </Table.Cell>
                    <Table.Cell
                      textAlign="right"
                      className="four-hundred-width"
                    >
                      <Icon
                        style={{ marginLeft: "1em" }}
                        color="red"
                        name="trash alternate"
                        size="large"
                        onClick={() =>
                          handleDeleteExpense(
                            selectedGroup.expenses,
                            expense.id
                          )
                        }
                      ></Icon>
                      <Icon
                        style={{ marginLeft: "1em" }}
                        size="large"
                        name="check"
                        color="green"
                        onClick={() => {
                          handleExpenseEdit(expense.id);
                        }}
                      ></Icon>
                    </Table.Cell>
                  </Table.Row>
                ))
              : ""}
          </Table.Body>
        </Table>
      </>
    );
  };

  const handleExpenseEdit = event => {
    console.log(event);
  };

  const handleGroupNameSave = e => {
    console.log(newGroupName);
    if (newGroupName !== "" && newGroupName !== " ") {
      dispatch(groupDetailActions.editGroupName(groupId, newGroupName));
      setNewGroupName("");
      setGroupEdit(false);
    }
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
        placeholder={groupName}
        onChange={e => setNewGroupName(e.target.value)}
      />
    ) : (
      <Container>
        <Header as="h2" style={{ display: "inline-block" }}>
          {selectedGroup.name}
        </Header>
        <Icon
          style={{ marginLeft: "1em" }}
          size="large"
          name="edit outline"
          color="blue"
          onClick={() => setGroupEdit(true)}
        ></Icon>
        <Button
          style={{ marginLeft: "1em" }}
          icon="plus"
          size="mini"
          circular
          positive
          onClick={addExpense}
        >
          New Expense
        </Button>
      </Container>
    );
  };

  const handleDeleteExpense = (array, id) => {
    console.log(id);

    dispatch(groupDetailActions.deleteExpenseFromAPI(array, id));
  };

  const addExpense = () => {
    const group = {
      group_id: groupId,
      user_id: localStorage.userId,
      name: "Hello",
      description: "Description",
      amount: 100.99
    };
    dispatch(groupDetailActions.addExpenseToAPI(group));
  };

  return (
    <>
      <h1>Group Details</h1>
      <hr></hr>
      {renderGroupDetails()}
    </>
  );
};

export default GroupDetails;
