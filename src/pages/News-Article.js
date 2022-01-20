import React from 'react'

function NewsArticle(id, title, description, text) {
    return (
        <div>
            <Container>
                <Card key={id}>
                    <h1>{title}</h1>
                    <h2>{description}</h2>
                    <h3>{text}</h3>
                </Card>
            </Container>
        </div>
    )
}

export default NewsArticle
