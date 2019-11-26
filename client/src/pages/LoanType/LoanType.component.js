import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom'
// import Col from 'react-bootstrap/Col'




export default class LoanType extends React.Component {
     render(){
        return(
            <div className="loantype">

              <div className="container">
                <dic className="row">
                  <div className="col-lg-12">
    <Form>

        <Form.Label>Select Loan Type</Form.Label>
        <Form.Control  as="select" multiple>
        <option id="options">Home</option>
        <option id="options" >Car</option>
        <option id="options">Health</option>
        <option id="options">Boat</option>
        <option id="options">Business</option>
        </Form.Control>
    

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