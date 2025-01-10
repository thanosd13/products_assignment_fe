import React, { useState } from 'react';
import classes from './LogRegPage.module.css';
import { Select } from '../../components/select/Select';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { loginService, registerService } from '../../services/userService';
import { GenericModal } from '../../modals/genericModal/GenericModal';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import { GREEN, RED } from '../../constants/ColorsTypes';
import { useAuth } from '../../contexts/AuthContext';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export const LogReg = () => {
  const [View, setView] = useState('Register');
  const [showGenericModal, setShowGenericModal] = useState(false);
  const [titleForGenericModal, setTitleForGenericModal] = useState('');
  const [iconForModal, setIconForModal] = useState('');
  const [colorForIcon, setColorForIcon] = useState('');
  const [bodyForGenericModal, setBodyForGenericModal] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: '',
    password: '',
    repeatedPassword: '',
  });

  const { setAuthState } = useAuth();
  const navigate = useNavigate();

  // modal functions
  const handleCloseGenericModal = () => setShowGenericModal(false);

  const options = [
    { value: 'user', label: 'Χρήστης' },
    { value: 'producer', label: 'Παραγωγός' },
  ];

  const ViewBox = Viewid => {
    setView(Viewid);
  };

  const ValidUsername = username => {
    const nameregex = /^[A-Za-z][A-Za-z0-9_]{7,17}$/;

    if (nameregex.test(username)) {
      return true;
    } else {
      return false;
    }
  };

  const ValidEmail = email => {
    const emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (emailregex.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  /*gia to password tou register */
  const PSWD = password => {
    const pswdregex =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    if (pswdregex.test(password)) {
      return true;
    } else {
      return false;
    }
  };

  const handleFieldChange = event => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const register = () => {
    if (formData.password !== formData.repeatedPassword) {
      setTitleForGenericModal('Σφάλμα');
      setBodyForGenericModal('Οι κωδικοί πρόσβασης δεν ταιριάζουν!');
      setIconForModal(faXmark);
      setColorForIcon(RED);
      setShowGenericModal(true);
      return;
    } else if (!ValidUsername(formData.username)) {
      setTitleForGenericModal('Σφάλμα');
      setBodyForGenericModal(
        'Δώστε 8-18 χαρακτήρες χωρίς ειδικά σύμβολα στο username!'
      );
      setIconForModal(faXmark);
      setColorForIcon(RED);
      setShowGenericModal(true);
      return;
    } else if (!ValidEmail(formData.email)) {
      setTitleForGenericModal('Σφάλμα');
      setBodyForGenericModal('Το e-mail δεν πληροί τις προϋποθέσεις!');
      setIconForModal(faXmark);
      setColorForIcon(RED);
      setShowGenericModal(true);
      return;
    } else if (!PSWD(formData.password)) {
      setTitleForGenericModal('Σφάλμα');
      setBodyForGenericModal(
        'Δώστε τουλάχιστον 8 χαρακτήρες με 1 κεφαλαίο, 1 πεζό γράμμα, 1 αριθμό και 1 ειδικό χαρακτήρα στο password!'
      );
      setIconForModal(faXmark);
      setColorForIcon(RED);
      setShowGenericModal(true);
      return;
    } else if (formData.role === '') {
      setTitleForGenericModal('Σφάλμα');
      setBodyForGenericModal('Συμπληρώστε ρόλο χρήστη!');
      setIconForModal(faXmark);
      setColorForIcon(RED);
      setShowGenericModal(true);
      return;
    }

    registerService(formData)
      .then(() => {
        setTitleForGenericModal('Επιτυχής εγγραφή!');
        setBodyForGenericModal('Η εγγραφή ολοκληρώθηκε επιτυχώς.');
        setIconForModal(faCheck);
        setColorForIcon(GREEN);
        setShowGenericModal(true);
      })
      .catch(error => {
        setTitleForGenericModal('Σφάλμα');
        setBodyForGenericModal(error.response.data.message);
        setIconForModal(faXmark);
        setColorForIcon(RED);
        setShowGenericModal(true);
      });
  };

  const login = () => {
    if (!formData.username) {
      setTitleForGenericModal('Σφάλμα');
      setBodyForGenericModal('Συμπληρώστε username!');
      setIconForModal(faXmark);
      setColorForIcon(RED);
      setShowGenericModal(true);
      return;
    } else if (!formData.password) {
      setTitleForGenericModal('Σφάλμα');
      setBodyForGenericModal('Συμπληρώστε password!');
      setIconForModal(faXmark);
      setColorForIcon(RED);
      setShowGenericModal(true);
      return;
    }

    loginService(formData)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        setAuthState(jwtDecode(response.data.token));
        if (response.data.role === 'producer') {
          navigate('/producer');
        } else if (response.data.role === 'user') {
          navigate('/user');
        }
      })
      .catch(error => {
        setTitleForGenericModal('Σφάλμα');
        setBodyForGenericModal(error.response.data.message);
        setIconForModal(faXmark);
        setColorForIcon(RED);
        setShowGenericModal(true);
      });
  };

  return (
    <div className={classes.box}>
      <div className={classes.boxl}>
        {View === 'Register' && (
          <div className={classes.register} id='reg'>
            <h1
              style={{
                color: '#115561',
                fontSize: '30px',
                fontWeight: '800',
                margin: '10px',
                textAlign: 'center',
                border: '2px solid',
                borderRadius: '20px',
                backgroundColor: '#ffffff',
                boxShadow: 'rgb(15, 84, 116) 0 0 4px 4px',
              }}
            >
              Εγγραφή
            </h1>
            <div className={classes.forms}>
              <section>
                <i className='fa-sharp fa-solid fa-user'></i>
                <input
                  type='text'
                  value={formData.username}
                  name='username'
                  onChange={handleFieldChange}
                  placeholder='Όνομα Χρήστη'
                  required
                />
              </section>
              <section>
                <i className='fa-solid fa-envelope'></i>
                <input
                  type='email'
                  value={formData.email}
                  name='email'
                  onChange={handleFieldChange}
                  placeholder='Email'
                  required
                />
              </section>
              <section
                style={{
                  width: '13vw',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                }}
              >
                <i className='fa-solid fa-user'></i>
                <Select
                  name='role'
                  onChange={handleFieldChange}
                  placeholder='Ρόλος χρήστη'
                  options={options}
                />
              </section>
              <section>
                <i className='fa-sharp fa-solid fa-key'></i>
                <input
                  type='password'
                  value={formData.password}
                  name='password'
                  onChange={handleFieldChange}
                  placeholder='Κωδικός'
                  required
                />
              </section>
              <section>
                <i className='fa-sharp fa-solid fa-key'></i>
                <input
                  type='password'
                  value={formData.repeatedPassword}
                  name='repeatedPassword'
                  onChange={handleFieldChange}
                  placeholder='Επιβεβαίωση Κωδικού'
                  required
                />
              </section>
              <p
                style={{
                  color: '#115561',
                  padding: '8px',
                  fontSize: '20px',
                  fontWeight: '700',
                  textAlign: 'center',
                  width: '80%',
                }}
              >
                Έχεις ήδη λογαριασμό; Πάτα στο κουμπί Σύνδεση για να συνδεθείς
                στο προφίλ σου.
              </p>
              <CustomButton label='Εγγραφή' onClick={register} />
            </div>
          </div>
        )}
        {View === 'Login' && (
          <div className={classes.login} id='log'>
            <h1
              style={{
                color: '#115561',
                fontSize: '40px',
                fontWeight: '800',
                margin: '20px',
                textAlign: 'center',
                border: '2px solid',
                borderRadius: '20px',
                backgroundColor: '#ffffff',
                boxShadow: 'rgb(15, 84, 116) 0 0 4px 4px',
              }}
            >
              Σύνδεση
            </h1>
            <div className={classes.forms}>
              <section>
                <i className='fa-sharp fa-solid fa-user'></i>
                <input
                  type='text'
                  name='username'
                  onChange={handleFieldChange}
                  value={formData.username}
                  placeholder='Όνομα Χρήστη'
                  required
                />
              </section>
              <section>
                <i className='fa-sharp fa-solid fa-key'></i>
                <input
                  type='password'
                  name='password'
                  value={formData.password}
                  onChange={handleFieldChange}
                  placeholder='Κωδικός'
                  required
                />
              </section>
              <p
                style={{
                  color: '#115561',
                  padding: '8px',
                  fontSize: '20px',
                  fontWeight: '400',
                  textAlign: 'center',
                  width: '80%',
                }}
              >
                Δεν έχεις λογαριασμό; Πάτα στο κουμπί της Εγγραφής και
                δημιούργησε τώρα έναν.
              </p>
              <CustomButton label='Σύνδεση' onClick={login} />
            </div>
          </div>
        )}
      </div>
      <div className={classes.boxr}>
        <h3
          style={{
            color: 'white',
            background: 'none',
            position: 'absolute',
            top: '15%',
            left: '5%',
            padding: '10px',
            fontSize: '30px',
            width: '70%',
          }}
        >
          Γίνε και εσύ μέλος στην{' '}
          <span
            style={{
              background: 'none',
              fontSize: '40px',
              fontWeight: '700',
              color: 'rgb(255, 22, 57)',
            }}
          >
            Ads For Products
          </span>{' '}
          κοινότητα
        </h3>
        <button onClick={() => ViewBox('Register')} className={classes.btn4}>
          Εγγραφή
        </button>
        <button onClick={() => ViewBox('Login')} className={classes.btn4}>
          Σύνδεση
        </button>
      </div>
      <GenericModal
        show={showGenericModal}
        title={titleForGenericModal}
        icon={iconForModal}
        backgroundColorIcon={colorForIcon}
        body={bodyForGenericModal}
        handleClose={handleCloseGenericModal}
      />
    </div>
  );
};
