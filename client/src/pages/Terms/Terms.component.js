import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'



export default class Terms extends React.Component {

    state = {
      loanAmount: '',
      loanPurpose: '',
      creditScore: '',      
    }

    handleSubmit = (event) => {
      event.preventDefault();
      let { loanAmount, loanPurpose, creditScore } =
      this.state
      let data = {
        loanAmount,
        loanPurpose,
        creditScore
      }
      console.log('data', data)
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
                      <Form.Label>Loan Amount</Form.Label>
                        <Form.Control  
                          placeholder=""
                          onChange={this.handleInputChange}
                          name='loanAmount'
                          value={this.state.loanAmount} />
                      </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Loan Purpose</Form.Label>
                    <Form.Control 
                        placeholder="" 
                        onChange={this.handleInputChange}
                        name='loanPurpose'
                        value={this.state.loanPurpose} />
                  </Form.Group>
                

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>Credit Score</Form.Label>
                    <Form.Control 
                        placeholder=""  
                        onChange={this.handleInputChange}
                        name='creditScore'
                        value={this.state.creditScore} />
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