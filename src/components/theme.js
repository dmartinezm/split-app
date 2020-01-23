import React, { useState } from "react";
import { Container, Menu, Dropdown, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../redux/actions/userActions";

const FixedMenuLayout = props => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };
  const fixed = true;
  const isLoggedIn = useSelector(state => state.currentUser.isLoggedIn);
  console.log(isLoggedIn);
  const [state, setactiveItem] = useState({
    activeItem: ""
  });

  // state = { activeItem: 'home' }
  const handleItemClick = (e, { name }) => setactiveItem({ activeItem: name });
  const { activeItem } = state;
  const renderOptions = () => {
    if (isLoggedIn) {
      return (
        <Container>
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
            secondary
          >
            <Menu.Item
              as={Link}
              to="/"
              name="home"
              className="ui blue header"
              active={activeItem.toLowerCase() === "home"}
              onClick={handleItemClick}
            >
              Split App
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/dashboard"
              name="Dashboard"
              active={activeItem.toLowerCase() === "dashboard"}
              onClick={handleItemClick}
            ></Menu.Item>
            <Menu.Item
              as={Link}
              to="/groups"
              name="Groups"
              active={activeItem.toLowerCase() === "groups"}
              onClick={handleItemClick}
            ></Menu.Item>
            <Menu.Item
              as={Link}
              to="/friends"
              name="Friends"
              active={activeItem.toLowerCase() === "friends"}
              onClick={handleItemClick}
            ></Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item
                name="logout"
                as={Link}
                to="/"
                onClick={handleLogout}
              />
              {/* <Dropdown item icon="bars" simple>
                <Dropdown.Menu>
                  <Dropdown.Item>Profile</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleItemClick}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </Menu.Menu>
          </Menu>
        </Container>
      );
    }
  };

  return (
    <div>
      {renderOptions()}

      <Container style={{ marginTop: "4em" }}>{props.children}</Container>
    </div>
  );
};

export default FixedMenuLayout;
