import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Login extends Component {
  render() {
    return (      
      <Container>
        <Form className="form">
          <h1>Login</h1>
          <p className="text-muted">Sign In to your account</p>
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
              <i class="cil-user"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="text" placeholder="Username" autoComplete="username" />
          </InputGroup>
          <InputGroup className="mb-4">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
              <i class="cil-lock-locked"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="password" placeholder="Password" autoComplete="current-password" />
          </InputGroup>
          <Row>           
              <Button color="primary" className="px-4">Login</Button>
              <Button color="link" className="px-0">Forgot password?</Button>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Login;
