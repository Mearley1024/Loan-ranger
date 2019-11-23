import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'




export default class Qualifications extends React.Component {
     render(){
        return(
            <div >

              <div className="container">
                <dic className="row">
                  <div className="col-lg-12">
                  <Form className="qualifications">

  <Form.Group  controlId="formGridAddress1">
    <Form.Label>City</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>State</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Zip Code</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group> 

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Employment Status</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group> 

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Anual Income</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group> 

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<br/>
                  </div>
                </div>
              </div>
              
          </div>

        );
    }
}
