import "../css/News-Slider.css";
import { CardGroup, Card, Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import axios from "axios";

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
      <Container>
  <Row>
  {this.state.articles.map((article) => (
            
    <Col> <Card key= {article.id}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>{article.attributes.Title}</Card.Title>
      <Card.Text>
      {article.attributes.Description}
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  ))}
  </Row>
</Container>
    );

  }
}
