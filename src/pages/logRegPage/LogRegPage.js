import React, { useState } from 'react';
import classes from './LogRegPage.module.css';

export const LogReg = () => {
  const [View, setView] = useState('Register');

  const [name, setname] = useState('');
  const [nameerror, setnameerror] = useState('');

  const [name2, setname2] = useState('');
  const [nameerror2, setnameerror2] = useState('');

  const [email, Setemail] = useState('');
  const [emailerror, Setemailerror] = useState('');

  const [password, Setpassword] = useState('');
  const [pswderror, Setpswderror] = useState('');
  const [password2, setPassword2] = useState('');

  const [password3, Setpassword3] = useState('');
  const [pswderror3, Setpswderror3] = useState('');

  const ViewBox = Viewid => {
    setView(Viewid);
  };

  const ValidName = e => {
    const namevalue = e.target.value;
    const nameregex = /^[A-Za-z][A-Za-z0-9_]{7,17}$/;
    console.log(namevalue);

    if (nameregex.test(namevalue)) {
      setnameerror('');
    } else {
      setnameerror('Δώστε 8-18 χαρακτήρες χωρίς ειδικά σύμβολα.');
    }
    setname(namevalue);
  };

  {
    /*gia to name tou login giati oti grafame sto name tou register evgaine automata kai stou login */
  }
  const ValidName2 = e => {
    const namevalue2 = e.target.value;
    const nameregex2 = /^[A-Za-z][A-Za-z0-9_]{7,17}$/;
    console.log(namevalue2);

    if (nameregex2.test(namevalue2)) {
      setnameerror2('');
    } else {
      setnameerror2('Δώστε 8-18 χαρακτήρες χωρίς ειδικά σύμβολα.');
    }
    setname2(namevalue2);
  };
  const ValidEmail = e => {
    const emailvalue = e.target.value;
    const emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    console.log(emailvalue);

    if (emailregex.test(emailvalue)) {
      Setemailerror('');
    } else {
      Setemailerror('Μη έγκυρη διεύθυνση Email!');
    }
    Setemail(emailvalue);
  };

  {
    /*gia thn epivevaiwsh kwdikou sto register*/
  }
  const PSWD1 = e => {
    const pswdvalue1 = e.target.value;
    setPassword2(pswdvalue1);
  };

  {
    /*gia to password tou login, omoia evgaine idio me tou register */
  }
  const PSWD2 = e => {
    const pswdvalue3 = e.target.value;
    const pswdregex3 =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    if (pswdregex3.test(pswdvalue3)) {
      Setpswderror3('');
    } else {
      Setpswderror3(
        'Δώστε τουλάχιστον 8 χαρακτήρες με 1 κεφαλαίο, 1 πεζό γράμμα, 1 αριθμό και 1 ειδικό χαρακτήρα.'
      );
    }
    Setpassword3(pswdvalue3);
  };

  {
    /*gia to password tou register */
  }
  const PSWD = e => {
    const pswdvalue = e.target.value;
    const pswdregex =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    if (pswdregex.test(pswdvalue)) {
      Setpswderror('');
    } else {
      Setpswderror(
        'Δώστε τουλάχιστον 8 χαρακτήρες με 1 κεφαλαίο, 1 πεζό γράμμα, 1 αριθμό και 1 ειδικό χαρακτήρα.'
      );
    }
    Setpassword(pswdvalue);
  };

  return (
    <div className={classes.box}>
      <div className={classes.boxl}>
        {View === 'Register' && (
          <div className='register' id='reg'>
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
                  value={name}
                  onChange={ValidName}
                  placeholder='Όνομα Χρήστη'
                  required
                />
              </section>
              <section>
                <i className='fa-solid fa-envelope'></i>
                <input
                  type='email'
                  value={email}
                  onChange={ValidEmail}
                  placeholder='Email'
                  required
                />
              </section>
              <section>
                <i className='fa-sharp fa-solid fa-key'></i>
                <input
                  type='password'
                  id='password'
                  value={password}
                  onChange={PSWD}
                  placeholder='Κωδικός'
                  required
                />
              </section>
              <section>
                <i className='fa-sharp fa-solid fa-key'></i>
                <input
                  type='password'
                  value={password2}
                  onChange={PSWD1}
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
              {pswderror ||
              password === '' ||
              nameerror ||
              name === '' ||
              emailerror ||
              email === '' ? (
                <p
                  style={{
                    color: 'red',
                    fontSize: '20px',
                    fontWeight: '600',
                    width: '80%',
                    textAlign: 'center',
                  }}
                >
                  {nameerror} {emailerror} {pswderror}
                </p>
              ) : password !== password2 || password === '' ? (
                <p
                  style={{ color: 'red', fontSize: '20px', fontWeight: '600' }}
                >
                  Εκρεμμεί η Επιβεβαίωση Κωδικού!
                </p>
              ) : (
                <button type='submit' className='btn'>
                  Εγγραφή
                </button>
              )}
            </div>
          </div>
        )}
        {View === 'Login' && (
          <div className='login' id='log'>
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
            <div className='forms'>
              <section>
                <i className='fa-sharp fa-solid fa-user'></i>
                <input
                  type='text'
                  value={name2}
                  onChange={ValidName2}
                  placeholder='Όνομα Χρήστη'
                  required
                />
              </section>
              <section>
                <i className='fa-sharp fa-solid fa-key'></i>
                <input
                  type='password'
                  value={password3}
                  onChange={PSWD2}
                  placeholder='Κωδικός'
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
                Δεν έχεις λογαριασμό; Πάτα στο κουμπί της Εγγραφής και
                δημιούργησε τώρα έναν.
              </p>
              {nameerror2 || name2 === '' || pswderror3 || password3 === '' ? (
                <p
                  style={{
                    color: 'red',
                    fontSize: '20px',
                    fontWeight: '600',
                    width: '80%',
                  }}
                >
                  {nameerror2} {pswderror3}
                </p>
              ) : (
                <button type='submit' className='btn'>
                  Σύνδεση
                </button>
              )}
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
    </div>
  );
};
