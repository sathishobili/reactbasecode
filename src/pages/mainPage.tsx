import React from 'react'
import { Switch, Redirect, RouteComponentProps } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { IRoute } from '../routes';
import NestedRoute from '../nested-route';

type INestedRouteProps = IRoute & RouteComponentProps;

const MainPage = (props :INestedRouteProps) => {
    return (
            <div className="container">

<Navbar />
        <Switch>
          {
            (props.routes &&
              props.routes.map((route, i: number) => (
                <NestedRoute key={i} {...props} {...route} />
              )))}
          <Redirect to={'/home'} />
        </Switch>
        <Footer />
        </div>
    )
}

export default MainPage
