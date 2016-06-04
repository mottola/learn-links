import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './routes/app';
import Bookshelf from './components/bookshelves/bookshelf';
import BookshelfList from './components/bookshelves/bookshelf_list';
import BookshelfCollection from '../imports/collections/bookshelves-collection';
import Bookshelves from './routes/bookshelves';
import Header from './components/header/header';

// routes using react-router
const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}></Route>

    <Route path='/bookshelves' component={Bookshelves}>
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
