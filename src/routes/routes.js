import { AccountPage } from '../pages/accountPage/AccountPage';
import { AdminPage } from '../pages/adminPage/AdminPage';
import { AdsPage } from '../pages/adsPage/AdsPage';
import { FavoriteProductsPage } from '../pages/favoriteProductsPage/FavoriteProductsPage';
import { HomePage } from '../pages/homePage/HomePage';
import { LoginPage } from '../pages/loginPage/LoginPage';
import { LogReg } from '../pages/logRegPage/LogRegPage';
import { ProducerPage } from '../pages/producerPage/ProducerPage';
import { ProductsPerUserPage } from '../pages/productsPerUserPage/ProductsPerUserPage';
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
    path: '/producer',
    element: <ProducerPage />,
    showHeaderAndFooter: true,
  },
  {
    path: '/admin',
    element: <AdminPage />,
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
    path: '/account/:username',
    element: <AccountPage />,
    showHeaderAndFooter: true,
  },
  {
    path: '/getProductsPerUser/:userId',
    element: <ProductsPerUserPage />,
    showHeaderAndFooter: true,
  },
  {
    path: '/favoriteProducts',
    element: <FavoriteProductsPage />,
    showHeaderAndFooter: true,
  },
  {
    path: '*',
    element: <HomePage />,
    showHeaderAndFooter: true,
  },
];

export default routes;
