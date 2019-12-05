import React, { Component } from "react";
import axios from "axios";
import { Row, Col } from "../../components/Grid";
import Empty from "../../components/Empty";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Img from 'react-image'
import logo0 from './rcklogo1.png'
import logo1 from './amrlogo2.png'
import logo2 from './mrlogo3.jpg'
import {Helmet} from 'react-helmet';
import Background from './back.jpg';
import { ResultsCard, ResultsCardItem } from "../../components/ResultsCards";
import "./Card.css";


class Results extends Component {
    state = {
      loans: []
    };

    componentDidMount() {
        this.getResults();
    }

    displayRes = data => {
      this.setState({ loans: data.items });
    }

    getResults = () => {

        axios.get(`/loancontroller`)
            .then( res => {
              console.log(res.data);

                
            })
            .catch((err => console.log(err)))
    }

    render() {
        return (
          // <div>
          //   <Row>
          //     <Col size="md-12">
          //       {(this.state.loans && this.state.loans > 0) ?
          //       <ResultsCard>
          //         {this.state.loans.map(loan => {
          //           return (
          //             <div>
          //               <ResultsCardItem 
          //               key={loan.id}
          //               institution={loan.institution}
          //               loan={loan.loan}
          //               amount={loan.amount}
          //               rate={loan.rate}
          //               />
          //             </div>
          //           )
          //           })}
          //       </ResultsCard>  
          //       :
          //       <Empty/>
          //     }
          //     </Col>
          //   </Row>
          // </div>

          

          <div id="returndiv"  >

            <Helmet>
                <style>{'backgroundImage: url(' + Background + ')'}</style>
            </Helmet>
            
            <br/>
          <div className="row">
            <div className="col-lg-12">
              
            <Card id="card2">
<Card.Header as="h5"> <Img className='imgs' src={logo0} crossorigin="anonymous" />Rocket Mortgage</Card.Header>
  <Card.Body>
    <Card.Title>$500,000</Card.Title>
    <Card.Text>
      4 year term with a 5% rate.
    </Card.Text>
    <Button variant="primary">Save</Button>
  </Card.Body>
</Card>
              
            </div>           
          </div>

          <br/>

          <div className="row">
            <div className="col-lg-12">
              
            <Card id="card2">
<Card.Header as="h5"> <Img className='imgs' src={logo1} crossorigin="anonymous" />America's Loan Company</Card.Header>
  <Card.Body>
    <Card.Title>$200,000</Card.Title>
    <Card.Text>
      2 year term with a 4.5% rate.
    </Card.Text>
    <Button variant="primary">Save</Button>
  </Card.Body>
</Card>
              
            </div>           
          </div>
          <br/>

          <div className="row">
            <div className="col-lg-12">
              
            <Card id="card2">
<Card.Header as="h5"> <Img className='imgs' src={logo2} crossorigin="anonymous" />Marcus by Goldman Sachs</Card.Header>
  <Card.Body>
    <Card.Title>$750,000</Card.Title>
    <Card.Text>
      5 year term with a 6.5% rate.
    </Card.Text>
    <Button variant="primary">Save</Button>
  </Card.Body>
</Card>
              
              </div>           
            </div>
          </div>

         
        )
    }
}

export default Results;