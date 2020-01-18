import React, { useState, useEffect } from "react";
import { Header, Image, Table } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import friendActions from "../redux/actions/friendActions";

const Friends = () => {
  const [myFriends, setFriends] = useState();

  const dispatch = useDispatch();
  const friends = useSelector(state => state.myFriends);
  const sharedGroups = useSelector(state => state.friendGroups);

  console.log(sharedGroups);
  useEffect(() => {
    dispatch(friendActions.getFriendsFromAPI());
  }, []);

  const friendGroupTable = userId =>
    sharedGroups.map(group =>
      group.user_id === userId ? <li>{group.name}</li> : ""
    );

  const friendTable = () => {
    return (
      <Table basic="very" collapsing>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>Friend</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Shares Groups</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {friends.map(friend => (
            <Table.Row key={friend.id}>
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
              <Table.Cell>{friendGroupTable(friend.id)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  };

  return <div>{friendTable()}</div>;
};

export default Friends;
