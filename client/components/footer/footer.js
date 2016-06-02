import React, { Component } from 'react';
import Accounts from '../accounts/accounts';
import { Link, browserHistory } from 'react-router';

class Footer extends Component {
  render() {
    return (
          <p className='copyright'>Copyright &copy; 2016 <Link to='/'><span className='blue'>Learn</span><span className='green'>Links</span></Link></p>
    );
  }
}

export default Footer;
