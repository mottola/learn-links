import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Bookshelf from './components/bookshelves/bookshelf';
import BookshelfList from './components/bookshelves/bookshelf_list';
import { Bookshelves } from '../imports/collections/bookshelves';
import Header from './components/header/header';

// routes using react-router
const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={BookshelfList} />
      {/*<Route path='bookshelves/' componenet={Bookshelf} />*/}
      <Route path='bookshelves/:bookshelfId' component={Bookshelf} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
