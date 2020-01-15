import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import groupActions from "../redux/actions/groupActions";
// import AccountsAdapter from "../Adapters/AccountsAdapter";
import { Icon, Segment } from "semantic-ui-react";

const GroupDetails = () => {
  // const [group, setGroup] = useState({});
  // const [expenses, setExpenses] = useState([]);
  // const [groupEdit, setGroupEdit] = useState(false);

  const dispatch = useDispatch();
  const groups = useSelector(state => state.groups);

  // useEffect(() => {
  //   dispatch(groupActions.getGroupDetails(2));
  // }, []);

  console.log(groups);

  // console.log(group[0].expenses);
  const check = () => {
    // console.log(group.expenses);
    if (groups) {
      console.log(groups[0].expenses);
    }
  };

  return (
    <div>
      <h1>Group Details</h1>

      {check()}
      {/* 
      {group.expenses.map(expense => (
        <Segment id={expense.id}>{expense.name}</Segment>
      ))} */}
      {/* <h2>{group.name}</h2> */}
      {/* {renderExpenses().map(expense => (
        <li>{expense.name}</li>
      ))} */}
      {/* <h3>{group.expenses["name"]}</h3> */}
    </div>
  );
};

// class GroupDetails extends Component {
//   // state = {
//   //   group: {},
//   //   expenses: [],
//   //   groupEdit: false
//   // };
//   componentDidMount() {
//     AccountsAdapter.getGroupDetails(this.props.group).then(data =>
//       this.setState({
//         group: data,
//         expenses: data.expenses
//       })
//     );
//   }
//   handleDelete = () => {
//     console.log("Delete");
//     this.setState({
//       delete: true
//     });
//   };

//   handleDelete2 = () => {
//     console.log("Delete2");
//   };
//   handleGroupEdit = () => {
//     this.setState({ groupEdit: !this.state.groupEdit });
//   };
//   handleGroupNameChange = event => {
//     const nooName = event.target.value;
//     console.log(nooName);
//     // this.setState({ groupName: event.target.value });
//     this.setState(prevState => {
//       return {
//         group: { ...prevState.group, name: nooName }
//       };
//     });
//   };
//   handleGroupNameSave = event => {
//     console.log(event.target.name);
//     AccountsAdapter.updateGroup(this.state.group).then(data =>
//       this.setState({
//         group: data,
//         groupEdit: false
//       })
//     );
//   };
//   addExpense = () => {
//     console.log("hello expense");
//     const group_id = 1;
//     const name = "Test";
//     const description = "This is a test";
//     const amount = "100.99";
//     this.setState(prevState => {
//       return {
//         expenses: [
//           ...prevState.expenses,
//           { group_id, name: name, description: description, amount: amount }
//         ]
//       };
//     });
//   };
//   deleteExpense = expense => {
//     const expenseToRemove = this.state.expenses.filter(e => e !== expense);
//     // this.setState({
//     //   expenses: expenseToRemove
//     // });
//     // console.log(this.state.expenses, expenseToRemove);
//   };

//   handleGroupEditRender = groupEdit => {
//     let groupName;
//     if (groupEdit) {
//       groupName = (
//         <Input
//           icon={
//             <Icon
//               name="check"
//               color="green"
//               circular
//               link
//               onClick={this.handleGroupNameSave}
//             />
//           }
//           value={this.state.group.name}
//           onChange={this.handleGroupNameChange}
//         />
//       );
//     } else {
//       groupName = (
//         <Container>
//           <Header as="h2" style={{ display: "inline-block" }}>
//             {this.state.group.name}
//           </Header>
//           <Icon
//             style={{ marginLeft: "1em" }}
//             size="small"
//             name="pencil"
//             color="blue"
//             onClick={this.handleGroupEdit}
//           ></Icon>
//           <Button size="small" positive onClick={this.addExpense}>
//             New Expense
//           </Button>
//         </Container>
//       );
//     }

//     return groupName;
//   };

//   renderGroupDetails = () => {
//     const { group, expenses, groupEdit } = this.state;
//     return (
//       <div>
//         {this.handleGroupEditRender(this.state.groupEdit)}
//         {this.state.expenses.map(expense => {
//           return (
//             <Segment id={expense.id}>
//               <li key={expense.id}>
//                 {expense.name} {expense.description} ${expense.amount}
//                 <Icon
//                   style={{ marginLeft: "1em" }}
//                   color="red"
//                   name="minus circle"
//                   onClick={this.deleteExpense(expense)}
//                 ></Icon>
//               </li>
//             </Segment>
//           );
//         })}
//       </div>
//     );
//   };

//   render() {
//     return this.renderGroupDetails();
//   }
// }

export default GroupDetails;
