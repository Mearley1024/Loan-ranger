import React, { Component } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Img from 'react-image'
import logo0 from './rcklogo1.png'
import logo1 from './amrlogo2.png'
import logo2 from './mrlogo3.jpg'
import {Helmet} from 'react-helmet';
import Background from './back.jpg';


class Results extends Component {

    // componentDidMount() {
    //     this.getResults();
    // }

    // getResults = key => {
    //     console.log(id);

    //     axios.get(`/api/loan/${key}`)
    //         .then( () => {

    //         })
    //         .catch((err => console.log(err)))
    // }

    

    render() {
        return (

          

          <div id="returndiv"  >

            <Helmet>
                <style>{'backgroundImage: url(' + Background + ')'}</style>
            </Helmet>
            
            <br/>
          <div className="row">
            <div className="col-lg-12">
              
            <Card id="card1">
<Card.Header as="h5"> <Img className='imgs' src={logo0} crossorigin="anonymous" />Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
              
            </div>           
          </div>

          <br/>

          <div className="row">
            <div className="col-lg-12">
              
            <Card id="card2">
<Card.Header as="h5"> <Img className='imgs' src={logo1} crossorigin="anonymous" />Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
              
            </div>           
          </div>
          <br/>

          <div className="row">
            <div className="col-lg-12">
              
            <Card id="card3">
<Card.Header as="h5"> <Img className='imgs' src={logo2} crossorigin="anonymous" />Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
              
              </div>           
            </div>
          </div>

         
        )
    }
}

export default Results;