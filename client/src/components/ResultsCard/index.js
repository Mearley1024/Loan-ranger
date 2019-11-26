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
                                {/* This is where information about the loan shall be placed */}
                            </Col>
                        </Row>
                    </Container>
                </li>
            );
        }
    }
