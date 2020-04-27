import { RouteProps } from 'react-router-dom';


import MainPage from './pages/mainPage';
import LoginPage from './pages/loginPage/login';
import Homepage from './pages/homePage/home';

export interface IRoute extends RouteProps {
  routes?: IRoute[];
}


export const routes: IRoute[] = [
  {
    exact: true,
    path: '/login',
    component: LoginPage
  },
  {
    path: '/',
    component: MainPage,
    routes: [
      {
        path: '/home',
        component: Homepage
      }
    ]
  }
];
