import React, { useState } from "react";
import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

const Signup = props => {
  // initializing dispatch
  const dispatch = useDispatch();

  // Setting up local state using the useState hook
  const [signupForm, setSignupForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  });

  // Controlled form functions

  const handleSubmit = e => {
    e.preventDefault();
    const { history } = props;
    dispatch(userActions.newUserToDB(signupForm));
    history.push("/dashboard");
  };

  const handleChange = e => {
    // console.log(e.target.value);
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };
  // Destructuring keys from our local state to use in the form
  const { first_name, last_name, email, password } = signupForm;

  // Component code
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Create your account
        </Header>
        <Form size="large" onSubmit={handleSubmit} type="">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="First Name"
              type="text"
              name="first_name"
              value={first_name}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Last Name"
              type="text"
              name="last_name"
              value={last_name}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="envelope"
              iconPosition="left"
              placeholder="E-mail address"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <Button color="teal" fluid size="large">
              Sign Up
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Signup;
