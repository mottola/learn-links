import React, { Component } from 'react';
import Accounts from '../accounts/accounts';
import { Link, browserHistory } from 'react-router';

class Header extends Component {

  render() {
    return (
      <nav className='nav navbar-primary'>
        <ul className='nav navbar-nav'>
          <li>
            <a><Accounts /></a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
