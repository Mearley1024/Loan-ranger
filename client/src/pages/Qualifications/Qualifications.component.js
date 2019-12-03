import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom'
// import Col from 'react-bootstrap/Col'




export default class Qualifications extends React.Component {
    state = {
        city: '',
        state: '',
        zipCode: '',
        employmentStatus: '',
        annualIncome: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { city, state, zipCode, employmentStatus, annualIncome } = this.state
        let data = {
            city,
            state,
            zipCode,
            employmentStatus,
            annualIncome
        }
        console.log('data', data)

        // fetch ('/api', {
        //     method: 'POST',
        //     body: data,
        // });
    }

    handleInputChange = (event) => {
        let { name, value } = event.target
        this.setState({
            [name]: value
        })
    }



     render(){
        return(
            <div >

              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                  <Form onSubmit={this.handleSubmit} className="qualifications">

                        <Form.Group  controlId="formGridAddress1">
                            <Form.Label>City</Form.Label>
                            <Form.Control 
                                placeholder="" 
                                onChange={this.handleInputChange}
                                name='city'
                                value={this.state.city}
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>State</Form.Label>
                            <Form.Control 
                                placeholder="" 
                                onChange={this.handleInputChange}
                                name='state'
                                value={this.state.state}
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control 
                                placeholder="" 
                                onChange={this.handleInputChange}
                                name='zipCode'
                                value={this.state.zipCode}
                            />
                        </Form.Group> 

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Employment Status</Form.Label>
                            <Form.Control 
                                placeholder="" 
                                onChange={this.handleInputChange}
                                name='employmentStatus'
                                value={this.state.employmentStatus}
                            />
                        </Form.Group> 

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Anual Income</Form.Label>
                            <Form.Control 
                                placeholder="" 
                                onChange={this.handleInputChange}
                                name='annualIncome'
                                value={this.state.annualIncome}
                            />
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
