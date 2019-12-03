import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

export default class LoanType2 extends React.Component {
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

        <Form className="loantype" onSubmit={this.hanldeSubmit}>

<Form.Label>Select Loan Type</Form.Label>
<Form.Control onChange={this.handleInputChange}
        as="select" multiple>
<option placeholder="" 
        name='single family home'
        value='singleFamilyHome' id="options">Single Family Home
</option>
<br/>
<option  placeholder="" 
        name='condo'
        value='condo' id="options" id="options" >Condo</option>
<br/>
<option  placeholder="" 
        name='townhomw'
        value='townhome' id="options" id="options">Townhome</option>
<br/>
<option  placeholder="" 
        name='multiFamily'
        value='multiFamily' id="options" id="options">Multi Family</option>
<br/>

</Form.Control>


<Button variant="primary" type="submit">
    Submit
</Button>
</Form>        

                      

        );
    }
}