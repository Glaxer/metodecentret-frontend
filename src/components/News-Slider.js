import "../css/News-Slider.css";
import React, { Component } from 'react'
import axios from 'axios';



export default class newsSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {news: [], error: null,};  }
// Fetch your restaurants immediately after the component is mounted
async componentDidMount() {
    let response = await fetch("https://sheltered-chamber-01043.herokuapp.com/api/articles");
    if (!response.ok) {
      return
    }

    let products = await response.json()
    this.setState({ loading: false, products: products })
  }
    render() {
    // Print errors if any
    if (this.state.error) {
      return <div>An error occured: {this.state.error.message}</div>;
    }
        return (
            <div>
                 <ul>
          {this.state.news.map(news => (
            <li key={news.id}>{news.title}</li>
          ))}
        </ul>
            </div>
        )
    }
}
