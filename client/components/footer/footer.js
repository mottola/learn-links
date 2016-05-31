import React, { Component } from 'react';
import Accounts from '../accounts/accounts';
import { Link, browserHistory } from 'react-router';

class Footer extends Component {
  render() {
    return (
      <div className='navbar navbar-default navbar-fixed-bottom'>
        <div className='container'>
          <p className='copyright'>Copyright &copy; 2016 <span className='blue'>Learn</span><span className='green'>Links</span></p>
        </div>
      </div>
    );
  }
}

export default Footer;
