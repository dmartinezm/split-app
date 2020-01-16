import React, { useState, useEffect } from "react";
import { Header, Image, Table } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import friendActions from "../redux/actions/friendActions";

const Friends = () => {
  const [myFriends, setFriends] = useState();

  const dispatch = useDispatch();
  const friends = useSelector(state => state.myFriends);

  console.log(friends);
  useEffect(() => {
    dispatch(friendActions.getFriendsFromAPI());
  }, []);

  // const renderFriendRow = () => {
  //   return friends.map(friend => (
  //     <Table.Row>
  //       <Table.Cell>
  //         <Header as="h2">
  //           <Image
  //             circular
  //             src="https:react.semantic-ui.com/images/avatar/large/laura.jpg"
  //           />
  //           {friend.first_name}
  //         </Header>
  //       </Table.Cell>
  //       <Table.Cell>22</Table.Cell>
  //     </Table.Row>
  //   ));
  // };

  const friendTable = () => {
    return (
      <Table basic="very" collapsing>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>Friend</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {friends.map(friend => (
            <Table.Row>
              <Table.Cell>
                <Header as="h2">
                  <Image
                    circular
                    src="https:react.semantic-ui.com/images/avatar/large/laura.jpg"
                  />
                  {friend.first_name} {friend.last_name}
                </Header>
              </Table.Cell>
              <Table.Cell>{friend.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  };

  return <div>{friendTable()}</div>;
};

// friends.map(friend => {
//   <Table.Row>
//           <Table.Cell>
//             <Header as="h2">
//               <Image
//                 circular
//                 src="https:react.semantic-ui.com/images/avatar/large/laura.jpg"
//               />
//               {friend.first_name}
//             </Header>
//           </Table.Cell>
//           <Table.Cell>22</Table.Cell>
//         </Table.Row>

export default Friends;

// const table = () => (
//   <Table basic="very" celled collapsing>
//     <Table.Header>
//       <Table.Row>
//         <Table.HeaderCell>Employee</Table.HeaderCell>
//         <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
//       </Table.Row>
//     </Table.Header>
//     d
//     <Table.Body>
//       <Table.Row>
//         <Table.Cell>
//           <Header as="h4" image>
//             <Image
//               src="https://react.semantic-ui.com/images/avatar/small/lena.png"
//               rounded
//               size="mini"
//             />
//             <Header.Content>
//               Lena
//               <Header.Subheader>Human Resources</Header.Subheader>
//             </Header.Content>
//           </Header>
//         </Table.Cell>
//         <Table.Cell>22</Table.Cell>
//       </Table.Row>
//       <Table.Row>
//         <Table.Cell>
//           <Header as="h4" image>
//             <Image
//               src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
//               rounded
//               size="mini"
//             />
//             <Header.Content>
//               Matthew
//               <Header.Subheader>Fabric Design</Header.Subheader>
//             </Header.Content>
//           </Header>
//         </Table.Cell>
//         <Table.Cell>15</Table.Cell>
//       </Table.Row>
//       <Table.Row>
//         <Table.Cell>
//           <Header as="h4" image>
//             <Image
//               src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
//               rounded
//               size="mini"
//             />
//             <Header.Content>
//               Lindsay
//               <Header.Subheader>Entertainment</Header.Subheader>
//             </Header.Content>
//           </Header>
//         </Table.Cell>
//         <Table.Cell>12</Table.Cell>
//       </Table.Row>
//       <Table.Row>
//         <Table.Cell>
//           <Header as="h4" image>
//             <Image
//               src="https://react.semantic-ui.com/images/avatar/small/mark.png"
//               rounded
//               size="mini"
//             />
//             <Header.Content>
//               Mark
//               <Header.Subheader>Executive</Header.Subheader>
//             </Header.Content>
//           </Header>
//         </Table.Cell>
//         <Table.Cell>11</Table.Cell>
//       </Table.Row>
//     </Table.Body>
//   </Table>
// );

// const generateTable = () => {
//   friends.map(friend => (
//     <li>{friend.first_name}</li>)}
//     // return (
//
//   // });
