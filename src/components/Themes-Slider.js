import "../css/Themes-Slider.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import axios from "axios";
import Img from "../images/placeholder-image.jpg";

const api = axios.create({
    baseURL: "https://sheltered-chamber-01043.herokuapp.com/api/",
});

export default class ThemesSlider extends Component {
    constructor() {
        super();
        this.state = {
            themes: [],
        };
    }

    componentDidMount = () => {
        api.get("/themes/?populate=Cover").then((res) => {
            console.log(res.data.data);
            this.setState({ themes: res.data.data });
        });
    };

    render() {
        return (
            <div className="theme-container">
                <Container>
                    <Row>
                        {this.state.themes.map((theme) => (
                            <Col>
                                <Card className="theme-card" key={theme.id}>
                                    <Card.Img
                                        className="theme-card-img"
                                        variant="top"
                                        src={theme.attributes.Cover.data.attributes.name}
                                    />
                                    <Card.Body className="theme-card-body">
                                        <Card.Title className="theme-card-title">
                                            {theme.attributes.Title}
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