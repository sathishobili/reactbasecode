import React from 'react';
import { Route, withRouter, RouteComponentProps } from 'react-router-dom';
import { IRoute } from './routes';

type INestedRouteProps = IRoute & RouteComponentProps;

const NestedRoute: React.FC<INestedRouteProps> = props => {
  const { history, location, match, staticContext, ...rest } = props;
  const RouteComponent = props.component;

  return RouteComponent ? (
    <Route
      path={props.path}
      render={props => <RouteComponent {...props} {...rest} />}
    />
  ) : null;
};

export default withRouter(NestedRoute);
