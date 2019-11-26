import React from "react";
import Card from 'react-bootstrap/Card';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function EmptyList(){
    return(
        <Card.Header as="h5">Loan List</Card.Header>
         <Card.Body>
             <Card.Title>No Loans to Display</Card.Title>
             <Card.Text>
                 Unfortunately, no current loans match your filters. Please, try again.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
            </Card.Body>
     </Card>
    )
}