import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { UserPage } from './pages/userPage/UserPage';
import './styles/styles.css';

function App() {
  return (
    <div>
      <Header />
      <UserPage />
      <Footer />
    </div>
  );
}

export default App;
