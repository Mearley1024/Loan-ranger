import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default class Home extends React.Component {
    state = {

    };

    
     render(){
        return(
          <Form className="login">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Keep me signed in" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        );
    }
}

