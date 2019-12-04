import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import axios from 'axios';



export default  class LoanType1 extends React.Component {

    state = {
      terms: '',
      amount: '',
      maxQuantity: '', 
      rate: ''      
     
    }

    handleSubmit = (event) => {
      event.preventDefault();
      let { terms, amount, maxQuantity, rate } =
      this.state
      let data = {
        terms,
        amount,
        maxQuantity,
        rate
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
    };
   
    
     render(){
        return(

            <div >

            <Form onSubmit={this.handleSubmit}>
                  <Form.Row>
                    

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label className="loantype2">Terms(years)</Form.Label>
                        <Form.Control  
                          placeholder=""
                          onChange={this.handleInputChange}
                          name='terms'
                          value={this.state.terms}
                           />
                      </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label className="loantype2">Amount</Form.Label>
                    <Form.Control 
                        placeholder="" 
                        onChange={this.handleInputChange}
                        name='amount'
                        value={this.state.amount} 
                        />
                  </Form.Group>
                

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label className="loantype2">Max Quantity</Form.Label>
                    <Form.Control 
                        placeholder=""  
                        onChange={this.handleInputChange}
                        name='maxQuantity'
                        value={this.state.maxQuantity}
                         />
                  </Form.Group> 

                  
                  <Form.Group controlId="formGridAddress2">
                    <Form.Label className="loantype2"> Rate </Form.Label>
                    <Form.Control 
                        placeholder=""  
                        onChange={this.handleInputChange}
                        name='rate'
                        value={this.state.rate}
                         />
                  </Form.Group> 

                    {/* <Link to=''> */}
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    {/* </Link> */}
                    
                </Form>


            </div>
            
          
        );
    }
}

