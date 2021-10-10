import React from 'react';
import articles from '../content/article_content';
import ArticleList from './ArticleList';
const ArticleListPage = () => (
    <>
        <ArticleList articles={articles} />
    </>
);

export default ArticleListPage;