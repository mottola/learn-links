import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './routes/app';
import BookshelfMain from './components/bookshelves/bookshelf_main';
import BookshelfList from './components/bookshelves/bookshelf_list';
import { Bookshelves } from '../imports/collections/bookshelves';
import Header from './components/header/header';

// routes using react-router
const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}></Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
