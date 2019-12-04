import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import axios from 'axios';




export default class Terms extends React.Component {

    state = {
      institution: '',
      loanType: '',
      contactInfo: '',
      phoneNumber: '',      
    }

    handleSubmit = (event) => {
      event.preventDefault();
      let { institution, loanType, contactInfo, phoneNumber } =
      this.state
      let data = {
        institution,
        loanType,
        contactInfo,
        phoneNumber
      }
      console.log('data', data)
      axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then(response => {console.log(response)
          })
          .catch(error => {console.log(error)
          })

    }

    handleInputChange = (event) => {
      let {name, value} = event.target
      this.setState ({
        [name]: value
      })
    }
   


     render(){
        return(
            
            <div className="terms">

              <div className="container">
                <dic className="row">
                  <div className="col-lg-12">

                  <Form onSubmit={this.handleSubmit}>
                  <Form.Row>
                    

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label> Institution </Form.Label>
                        <Form.Control  
                          placeholder=""
                          onChange={this.handleInputChange}
                          name='institution'
                          value={this.state.institution} />
                      </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Loan Type</Form.Label>
                    <Form.Control 
                        placeholder="" 
                        onChange={this.handleInputChange}
                        name='loanType'
                        value={this.state.loanType} />
                  </Form.Group>
                

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>Contact Information</Form.Label>
                    <Form.Control 
                        placeholder="email"  
                        onChange={this.handleInputChange}
                        name='contactInfo'
                        value={this.state.contactInfo} />
                  </Form.Group> 

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control 
                        placeholder="#"  
                        onChange={this.handleInputChange}
                        name='phoneNumber'
                        value={this.state.phoneNumber} />
                  </Form.Group> 


  {/* <Link to=''> */}
  <Button variant="primary" type="submit">
    Submit
  </Button>
  {/* </Link> */}
  
</Form>
                  </div>
                </dic>
              </div>
              
          </div>
        );
    }
}