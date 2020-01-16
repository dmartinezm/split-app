import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const FixedMenuLayout = props => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={Link} to="/">
          {/* <Image
              size="mini"
              src={require("../Styles/money-bag.jpg")}
              style={{ marginRight: "1.0em" }}
            /> */}
          Split App
        </Menu.Item>

        <Menu.Item as={Link} to="/dashboard">
          Dashboard
        </Menu.Item>

        <Menu.Item as={Link} to="/login" postion="right">
          Login
        </Menu.Item>

        <Menu.Item as={Link} to="/logout" postion="right">
          Logout
        </Menu.Item>

        <Menu.Item as={Link} to="/signup" postion="right">
          Signup
        </Menu.Item>

        <Menu.Item as={Link} to="/friends" postion="right">
          Friends
        </Menu.Item>
      </Container>
    </Menu>

    <Container text style={{ marginTop: "4em" }}>
      {props.children}
    </Container>
  </div>
);

export default FixedMenuLayout;
