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

const LoginPage = props => {
  // initialize dispatch
  const dispatch = useDispatch();
  // set up local state using useState hook
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userActions.loginUserToDB(loginForm));
    props.history.push("/dashboard");
  };

  const handleChange = e => {
    console.log(e.target.value);
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  // Destructuring keys from our local state to use in the form
  const { email, password } = loginForm;

  const LoginForm = () => (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/logo.png" /> Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
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
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
  // Component code
  return <>{LoginForm()}</>;
  //   <form onSubmit={handleSubmit}>
  //     <h1>Login Page</h1>
  //     <input
  //       type="text"
  //       name="email"
  //       value={email}
  //       onChange={handleChange}
  //       placeholder="Email"
  //     />
  //     <input
  //       type="password"
  //       name="password"
  //       value={password}
  //       onChange={handleChange}
  //       placeholder="Password"
  //     />
  //     <input type="submit" />
  //   </form>
  // );
};

export default LoginPage;
