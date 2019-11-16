import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'



export class Terms extends React.Component {
     render(){
        return(
            
            <div>

              <div className="container">
                  <div className="row">
                      <br/>
                <br/>   
                <br/>

                <div>

                <Card id="card" style={{ width: '50rem' }}>
  <Card.Body>
    <Card.Title>Mortgage Term</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
    <Form.Group>
    <input type="hidden" name="wl" defaultValue="en" />
    <label>
      Purchase price: <input type="text" name="ma" defaultValue="250,000" /> $
    </label>
    <br />
    <label>
      Down payment: <input type="text" name="dp" defaultValue={10} /> %
    </label>
    <br />
    <label>
      Mortgage term: <input type="text" name="mt" defaultValue={30} /> years
    </label>
    <br />
    <label>
      Interest rate: <input type="text" name="ir" defaultValue="5.5" /> %
    </label>
    <br />  
    <label>
      Estimated Credit Score: <input type="text" name="cs" defaultValue="700" /> 
    </label>  
  </Form.Group>
  <br />
  <br />

    </Card.Text>
    <Link to=''>
                <Button variant="danger">Next</Button>
                </Link>  </Card.Body>
    </Card>
        </div>               

              


                  </div>
              </div>
          </div>
        );
    }
}