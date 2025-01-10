import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import routes from './routes/routes';
import './styles/styles.css';
import { Navbar } from './components/navbar/Navbar';

function App() {
  const location = useLocation();

  const currentRoute =
    routes.find(route => route.path === location.pathname) || {};
  const isEmptyObject = obj => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  };

  return (
    <div>
      {(currentRoute.showHeaderAndFooter || isEmptyObject(currentRoute)) && (
        <Navbar />
      )}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      {(currentRoute.showHeaderAndFooter || isEmptyObject(currentRoute)) && (
        <Footer />
      )}
    </div>
  );
}

export default App;
