import React, { Component } from "react";
import axios from "axios";

class Results extends Component {

    componentDidMount() {
        this.getResults();
    }

    getResults = key => {
        console.log(id);

        axios.get(`/api/loan/${key}`)
            .then( () => {

            })
            .catch((err => console.log(err)))
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Results;