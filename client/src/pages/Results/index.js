import React, { Component } from "react";
import axios from "axios";
import { Row, Col } from "../Grid";
import ResultsCard, { ResultsCardItem } from "../../components/ResultsCards";

class Results extends Component {

    componentDidMount() {
        this.getResults();
    }

    getResults = key => {
        console.log(id);

        axios.get(`/api/loan/${key}`)
            .then(() => {

            })
            .catch((err => console.log(err)))
    }

    render() {
        return (
            <Row>
                <Col size="md-12">
                    <ResultsCard>

                        return (
                            <div>
                                <ResultsCardItem/>
                            </div>
                        )
                    </ResultsCard>
                </Col>
            </Row>
        )
    }
}

export default Results;