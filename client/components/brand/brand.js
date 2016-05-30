import React, { Component } from 'react';
import Accounts from '../accounts/accounts';
import { Link, browserHistory } from 'react-router';

class Brand extends Component {
  render() {
    return (
      <div>
        <h1 className='brand'>
          <Link to='/'><span className='blue'>Learn</span>Links</Link>
        </h1>
      </div>
    );
  }
}

export default Brand;
