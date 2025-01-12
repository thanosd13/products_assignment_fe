import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import routes from './routes/routes';
import './styles/styles.css';
import { Navbar } from './components/navbar/Navbar';
import { Loader } from './components/loader/Loader';
import { useAuth } from './contexts/AuthContext';

function App() {
  const location = useLocation();
  const { authState } = useAuth();
  console.log(authState);

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
      <Loader />
    </div>
  );
}

export default App;
