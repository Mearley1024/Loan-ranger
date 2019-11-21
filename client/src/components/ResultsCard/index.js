import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const ResultsCard = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="" alt="Card image cap" />
                <CardBody>
                    <CardTitle></CardTitle>
                    <CardSubtitle></CardSubtitle>
                    <CardText></CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    )
};

export default ResultsCard; 