import "../css/News-Slider.css";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import React, { Component } from "react";
import axios from "axios";
import Logo from "../images/logo.svg";

const api = axios.create({
  baseURL: "https://sheltered-chamber-01043.herokuapp.com/api/",
});
export default class NewsSlider extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }
  componentDidMount = () => {
    api.get("/articles").then((res) => {
      console.log(res.data.data);
      this.setState({ articles: res.data.data });
    });
  };

  render() {
    return (
      <Container className="news-container">
        <Row>
          {this.state.articles.map((article) => (
            <Col>
              <Card className="news-card" key={article.id}>
                <Card.Img className="news-card-img" variant="top" src={Logo} />
                <Card.Body className="news-card-body">
                  <Card.Title className="news-card-title">{article.attributes.Title}</Card.Title>
                  <Card.Text className="news-card-description">{article.attributes.Description}</Card.Text>
                  <Button className="news-card-button">Læs mere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}