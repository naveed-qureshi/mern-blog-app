import React from 'react';
import {Link} from 'react-router-dom';
const ArticleList = ({ articles }) => {
    return (
        <>
            {articles.map(article => (
                    <div className="articles">
                        <Link to={`/article/${article.name}`}>
                            <h3>{article.title}</h3>
                            <p>{article.content[0].substring(0,100)}...</p>
                        </Link>
                    </div>
                )
            )}
        </>
    );

} 

export default ArticleList;