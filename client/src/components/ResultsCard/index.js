import React from "react";
import { Container, Row, Col } from "../Grid";

export function ResultsCard({children}) {
    return (
        <ul className="list-group">{children}</ul>
    );
}

    export class ResultsCardItem extends React.Component {

        render() {
            console.log(this.props);
            return (
                <li>
                    <Container>
                        <Row>
                            <Col size="xs-8 sm-9">
                                <h3>{this.props.institution}</h3>
                                <p>{this.props.loan}</p>
                                <p>{this.props.amount}</p>
                                <p>{this.props.rate}</p>
                            </Col>
                        </Row>
                    </Container>
                </li>
            );
        }
    }
