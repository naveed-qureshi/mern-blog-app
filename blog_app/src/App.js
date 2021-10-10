import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ArticleListPage from './pages/ArticleListPage';
import ArticleShowPage from './pages/ArticleShowPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import NavBar from './pages/NavBar';
function App() {
  return (
    <div className="app-body">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/article-list/" component={ArticleListPage}/>
          <Route path="/article/:name" component={ArticleShowPage}/>
          <Route path="/about" component={AboutPage}/>
          <Route  component={ErrorPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
