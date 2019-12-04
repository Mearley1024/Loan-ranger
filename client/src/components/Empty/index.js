import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function EmptyList(){
    return(
        <div>
        <Card className="bg-light text-black text-center" style={{ width: '24rem' }}>
        <Card.Header as="h5">Loan List</Card.Header>
         <Card.Body>
             <Card.Title>No Loans to Display</Card.Title>
             <Card.Text>
                 Unfortunately, no current loans match your filters. Please, try again.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>
    )
}