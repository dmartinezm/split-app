import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const FixedMenuLayout = props => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Link to="/">
          <Menu.Item>
            {/* <Image
              size="mini"
              src={require("../Styles/money-bag.jpg")}
              style={{ marginRight: "1.0em" }}
            /> */}
            Split App
          </Menu.Item>
        </Link>
        <Link to="/dashboard">
          <Menu.Item>Dashboard</Menu.Item>
        </Link>
        <Link to="/login">
          <Menu.Item postion="right">Login</Menu.Item>
        </Link>
        <Link to="/logout">
          <Menu.Item postion="right">Logout</Menu.Item>
        </Link>
        <Link to="/signup">
          <Menu.Item postion="right">Signup</Menu.Item>
        </Link>
      </Container>
    </Menu>

    <Container text style={{ marginTop: "4em" }}>
      {props.children}
    </Container>
  </div>
);

export default FixedMenuLayout;
