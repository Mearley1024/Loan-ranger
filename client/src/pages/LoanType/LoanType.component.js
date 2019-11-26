import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import { isBoolean } from 'util';




export default class LoanType extends React.Component {
    state = {
       loanType: ''
    }

    hanldeSubmit = (event) => {
        event.preventDefault();
        let { loanType} = this.state
        let data = {
            loanType
        }
        console.log('data', data)

    }

    handleInputChange = (event) => {
        console.log('WORKING')
        let {value} = event.target
        this.setState({
            loanType: value
        })
    }

     render(){
        return(
            <div className="loantype">

              <div className="container">
                <dic className="row">
                  <div className="col-lg-12">

    <Form onSubmit={this.hanldeSubmit}>

        <Form.Label>Select Loan Type</Form.Label>
        <Form.Control                                                    onChange={this.handleInputChange}
                as="select" multiple>
        <option placeholder="" 
                name='home'
                value='home' id="options">Home
        </option>
        <br/>
        <option  placeholder="" 
                name='car'
                value='car' id="options" id="options" >Car</option>
        <br/>
        <option  placeholder="" 
                name='health'
                value={this.state.city} id="options" id="options">Health</option>
        <br/>
        <option  placeholder="" 
                name='boat'
                value={this.state.city} id="options" id="options">Boat</option>
        <br/>
        <option  placeholder="" 
                name='business'
                value={this.state.city} id="options" id="options">Business</option>
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