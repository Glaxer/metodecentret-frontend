import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import NewsArticle from '../pages/News-Article'

const api = axios.create({
    baseURL: "https://sheltered-chamber-01043.herokuapp.com/api/",
});

export default class SingleNews extends Component {
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
                <Container>
                    {this.state.articles.map((article) => (
                        <NewsArticle
                            key={article.id}
                            name={article.attributes.Title}
                            description={article.attributes.Description}
                            text={article.attributes.Text}
                        />
                    ))}
                </Container>
            </div>
        )
    }
}
