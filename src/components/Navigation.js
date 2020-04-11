import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Routes from '../AppConfig';

// reverse the Routes array to ease future styling issues
const reversedRoutesArray = Routes.slice(0).reverse();

// Nav links
const Navigation = () => {
  return (
    <nav>
      <ul>
        {reversedRoutesArray.map((route, i) => (
          <li>
            {/* exact is needed to prevent styling issues when on parent routes */}
            <NavLink key={i} exact to={route.path} activeClassName="selected">
              {route.linkText}
            </NavLink>
          </li>
        ))}
      </ul>
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
          path={route.path}
          render={(props) => <route.file {...props} routes={route.file} />}
        />
      ))}
    </Switch>
  );
};

export { Navigation, RoutingSwitch };
