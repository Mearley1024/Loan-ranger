import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import './Terms.css';
import Col from 'react-bootstrap/Col'



export class Terms extends React.Component {
     render(){
        return(
            
            <div>

              <div className="container">
                <dic className="row">
                  <div className="col-lg-12">
                  <Form>
  <Form.Row>
    

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Loan Amount</Form.Label>
      <Form.Control type="text" placeholder="" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Loan Purpose</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Employment Status</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Credit Score</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group> 

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                  </div>
                </dic>
              </div>
              
          </div>
        );
    }
}