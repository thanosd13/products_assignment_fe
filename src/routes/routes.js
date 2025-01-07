import { LoginPage } from '../pages/loginPage/LoginPage';
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
];

export default routes;
