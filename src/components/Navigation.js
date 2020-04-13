/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Routes } from '../AppConfig';

import SearchInput from '../components/SearchInput';

// reverse the Routes array to ease future styling issues
const reversedRoutesArray = Routes.slice(0).reverse();

// Nav links
const Navigation = () => {
  const [isActive, setActive] = useState(false);

  const toggleIsActive = () => {
    if (isActive) setActive(false);
    else setActive(true);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <a
        role="button"
        className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
        aria-label="menu"
        aria-expanded="false"
        data-target="JS__navbar-menu"
        onClick={toggleIsActive}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <div
        id="JS__navbar-menu"
        className={`navbar-menu ${isActive ? 'is-active' : ''}`}
      >
        <div className="navbar-start">
          <ul>
            {reversedRoutesArray.map((route, i) => (
              <li key={i} className="navbar-item">
                {/* exact is needed to prevent styling issues when on parent routes */}
                <NavLink
                  exact
                  to={route.path}
                  activeClassName="selected"
                  className="has-text-weight-bold"
                >
                  {route.linkText}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <SearchInput border={true} />
          </div>
        </div>
      </div>
    </nav>
  );
};

// React Router switch -- handle "sub"-routes by
// passing them in a `routes` prop to the component it renders.
const RoutingSwitch = () => {
  return (
    <Switch>
      {Routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          render={(props) => (
            <route.component {...props} routes={route.component} />
          )}
        />
      ))}
    </Switch>
  );
};

export { Navigation, RoutingSwitch };
