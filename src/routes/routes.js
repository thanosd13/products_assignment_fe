import { AdsPage } from '../pages/adsPage/AdsPage';
import { HomePage } from '../pages/homePage/HomePage';
import { LoginPage } from '../pages/loginPage/LoginPage';
import { LogReg } from '../pages/logRegPage/LogRegPage';
import { RegisterPage } from '../pages/registerPage/RegisterPage';
import { UserPage } from '../pages/userPage/UserPage';

const routes = [
  {
    path: '/login',
    element: <LoginPage />,
    showHeaderAndFooter: false,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    showHeaderAndFooter: false,
  },
  {
    path: '/user',
    element: <UserPage />,
    showHeaderAndFooter: true,
  },
  {
    path: '/home',
    element: <HomePage />,
    showHeaderAndFooter: true,
  },
  {
    path: '/ads',
    element: <AdsPage />,
    showHeaderAndFooter: true,
  },
  {
    path: '/logReg',
    element: <LogReg />,
    showHeaderAndFooter: true,
  },
  {
    path: '*',
    element: <HomePage />,
    showHeaderAndFooter: true,
  },
];

export default routes;
