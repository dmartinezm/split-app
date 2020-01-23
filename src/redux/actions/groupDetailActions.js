const API = "http://localhost:3000/";

const setGroupDetailAction = gDetails => ({
  type: "SET_GROUP_DETAILS",
  payload: gDetails
});

const getGroupDetailsFromAPI = groupId => dispatch => {
  fetch(API + `groups/${groupId}`)
    .then(r => r.json())
    .then(data => {
      // debugger;
      dispatch(setGroupDetailAction(data));
    });
};

const changeGroupName = name => ({
  type: "CHANGE_GROUP_NAME",
  payload: name
});

const editGroupName = (groupId, group_name) => dispatch => {
  fetch(API + `groups/${groupId}`, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ group_id: groupId, name: group_name })
  })
    .then(r => r.json())
    .then(data => {
      // debugger;
      // console.log(data) ||
      // dispatch(addGroup(data.groups[data.groups.length - 1]));
      dispatch(changeGroupName(data.name));
    })
    .catch(console.error);
};

const addExpense = expense => ({
  type: "ADD_EXPENSE",
  payload: expense
});

const addExpenseToAPI = expenseObj => dispatch => {
  fetch(API + `expenses/`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(expenseObj)
  })
    .then(r => r.json())
    .then(data => {
      dispatch(addExpense(data));
    })
    .catch(console.error);
};

const deleteExpense = expense => ({
  type: "DELETE_EXPENSE",
  payload: expense
});

const deleteExpenseFromAPI = (expenseArray, expenseId) => dispatch => {
  const config = {
    method: "DELETE"
  };
  fetch(API + `expenses/${expenseId}`, config).then(r => {
    // debugger;
    const newExpenseArray = expenseArray.filter(e => e.id !== expenseId);
    dispatch(deleteExpense(newExpenseArray));
  });
};

const setInitialNoPayload = () => ({
  type: "SET_INIT_GROUP_DETAILS"
});

const setIntialGroupDetails = () => dispatch => {
  dispatch(setInitialNoPayload());
};

export default {
  getGroupDetailsFromAPI,
  editGroupName,
  addExpenseToAPI,
  deleteExpenseFromAPI,
  setIntialGroupDetails
};
