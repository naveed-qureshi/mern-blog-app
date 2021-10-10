import React from 'react';
import articles from '../content/article_content';
import ArticleList from './ArticleList';
import ErrorPage from './ErrorPage';
const ArticleShowPage = ({match}) => {
    const name = match.params.name;
    const article = articles.find(article => article.name == name)
    if (!article) return <ErrorPage/>
    
    const recomendedArticles = articles.filter(article => article.name != name )
    return (
        <>
        <h1>{article.title}</h1>
        {article.content.map(content => <p> {content} </p>)}
        <h1>Recomended articles:</h1>
        <ArticleList articles={recomendedArticles}/>    
        </>
    )
};

export default ArticleShowPage;