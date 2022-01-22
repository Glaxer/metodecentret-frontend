import "../css/Method-Slider.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import axios from "axios";
import Img from "../images/placeholder-image.jpg";

const api = axios.create({
    baseURL: "https://sheltered-chamber-01043.herokuapp.com/api/",
});

export default class MethodSlider extends Component {
    constructor() {
        super();
        this.state = {
            methods: [],
        };
    }

    componentDidMount = () => {
        api.get("/methods/?populate=Cover").then((res) => {
            console.log(res.data.data);
            this.setState({ methods: res.data.data });
        });
    };

    render() {
        return (
            <div className="method-container">
                <Container>
                    <Row>
                        {this.state.methods.map((method) => (
                            <Col>
                                <Card className="method-card" key={method.id}>
                                    <Card.Img
                                        className="method-card-img"
                                        variant="top"
                                        src={method.attributes.Cover.data.attributes.name}
                                    />
                                    <Card.Body className="method-card-body">
                                        <Card.Title className="method-card-title">
                                            {method.attributes.Title}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}