import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import routes from './routes/routes';
import './styles/styles.css';

function App() {
  const location = useLocation();
  const currentRoute =
    routes.find(route => route.path === location.pathname) || {};
  return (
    <div>
      {currentRoute.showHeaderAndFooter && <Header />}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      {currentRoute.showHeaderAndFooter && <Footer />}
    </div>
  );
}

export default App;
