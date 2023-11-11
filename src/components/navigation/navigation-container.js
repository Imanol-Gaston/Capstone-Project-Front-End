import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const NavigationComponent = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className='nav-link-wrapper'>
        <NavLink to={route} activeClassName="nav-link-active">{linkText}</NavLink>
      </div>
    );
  };

  const handleSignOut = () => {
    axios
      .delete(
        "https://ikeralareki.devcamp.space/logout",
        { withCredentials: true }
      )
      .then(response => {
        if (response.status === 200) {
          props.history.push("/");
          props.handleSuccessfulLogout();
        }
        return response.data;
      })
      .catch(error => {
        console.log('Error signing out', error);
      });
  };

  return (
    <div className='nav-wrapper'>
      <div className='left-side'>
        <div className='nav-link-wrapper'>
          <NavLink exact to="/" activeClassName="nav-link-active">Profiles</NavLink>
        </div>

        {props.loggedInStatus === "LOGGED_IN" ? (
          dynamicLink("/portfolio-manager", "My Profile")
        ) : null}

      </div>

      {props.loggedInStatus === 'LOGGED_IN' &&
        <div className='right-side'>
          IMANOL GASTON

          <a onClick={handleSignOut}>
            <FontAwesomeIcon icon="sign-out-alt" />
          </a>
        </div>
      }
      
      {props.loggedInStatus !== 'LOGGED_IN' &&
        <div className='right-side'>
          <NavLink exact to="/auth" activeClassName="nav-link-active">Login</NavLink>
        </div>
      }
    </div>
  );
}
export default withRouter(NavigationComponent);