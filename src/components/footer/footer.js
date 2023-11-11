import React, { Component } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default class FooterComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='footer-wrapper'>
        <div className='left-side'>

          <div className='nav-link-wrapper'>
            <NavLink to="/about-me" activeClassName="nav-link-active">About</NavLink>
          </div>

          <div className='nav-link-wrapper'>
            <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
          </div>


        </div>
        <div className='right-side'>
          All rights reserved
        </div>
      </div>
    )
  }
}