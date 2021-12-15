import "../css/News-Slider.css";
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
      <div>
        <ul>
          {this.state.articles.map((article) => (
            <li key={article.id}>{article.attributes.Title}</li>
          ))}
        </ul>
      </div>
    );
  }
}
