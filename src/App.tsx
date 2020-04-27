import React from 'react';



import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import NestedRoute from './nested-route';

import { routes } from './routes';

const BaseName = '';

const App: React.FC = () => {
  const redirectToLogin = () => {
    alert('login')
    return <Redirect to="/login" />;
  };

  return (
    <div className="App">
      <Router basename={BaseName}>
        <Switch>
          {routes.map((route, i) => (
            <NestedRoute key={i} {...route} />
          ))}
          <Route render={redirectToLogin} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;