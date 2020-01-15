import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Button,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const FixedMenuLayout = props => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Link to="/">
          <Menu.Item as="a">
            {/* <Image
              size="mini"
              src={require("../Styles/money-bag.jpg")}
              style={{ marginRight: "1.0em" }}
            /> */}
            Split App
          </Menu.Item>
        </Link>
        <Link to="/dashboard">
          <Menu.Item as="a">Dashboard</Menu.Item>
        </Link>
        <Link to="/login">
          <Menu.Item as="a" postion="right">
            Login
          </Menu.Item>
        </Link>
        <Link to="/logout">
          <Menu.Item as="a" postion="right">
            Logout
          </Menu.Item>
        </Link>
        <Link to="/signup">
          <Menu.Item as="a" postion="right">
            Signup
          </Menu.Item>
        </Link>
      </Container>
    </Menu>

    <Container text style={{ marginTop: "4em" }}>
      {props.children}
    </Container>
  </div>
);

export default FixedMenuLayout;
