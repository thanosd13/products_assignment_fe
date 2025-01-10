import React from 'react';
import logo1 from '../../assets/images/home_images/fruit.avif';
import logo2 from '../../assets/images/home_images/vegetables.jpg';
import logo3 from '../../assets/images/home_images/dairy.jpg';
import logo4 from '../../assets/images/home_images/meat.jpg';
import classes from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={classes.content}>
      <div className={classes.banner}>
        <section className={classes.slogan1}>
          <h1 style={{ borderBottom: '5px solid white' }}>ADS For Products</h1>
          <h5>Διαφήμισε, Αναζήτησε και Καταχώρησε αγγελίες εντελώς δωρεάν</h5>
        </section>
      </div>
      <div className={classes.categories}>
        <div className={classes.slogan}>
          <h1>Κατηγορίες Αγγελιών</h1>
          <p>Περιηγηθείτε σε όλες τις αγγελίες με βάση την κατηγορία</p>
        </div>
        <div className={classes.boxes}>
          <div className={classes.box5}>
            <a href='#'>
              <img src={logo1} />
            </a>
            <p>Φρούτα</p>
          </div>
          <div className={classes.box6}>
            <a href='#'>
              <img src={logo2} />
            </a>
            <p>Λαχανικά</p>
          </div>
          <div className={classes.box7}>
            <a href='#'>
              <img src={logo3} />
            </a>
            <p>Γαλακτοκομικά</p>
          </div>
          <div className={classes.box8}>
            <a href='#'>
              <img src={logo4} />
            </a>
            <p>Κρέατα</p>
          </div>
        </div>
      </div>
      <div className={classes.paroxes}>
        <div className={classes.box1}>
          <i className='fa-regular fa-file-lines fa-fade'></i>
          <p>Άμεση Μεταφόρτωση</p>
        </div>
        <div className={classes.box2}>
          <i className='fa-solid fa-bullhorn fa-fade'></i>
          <p>Δωρεάν Διαφήμιση</p>
        </div>
        <div className={classes.box3}>
          <i className='fa-solid fa-magnifying-glass fa-fade'></i>
          <p>Εύκολη Αναζήτηση</p>
        </div>
        <div className={classes.box4}>
          <i className='fa-regular fa-lemon fa-fade'></i>
          <p>Ποικίλες Επιλογές Προιόντων</p>
        </div>
      </div>
      <div className={classes.contact}>
        <div className={classes.texts} style={{ width: '100%' }}>
          <h2>ΕΠΙΚΟΙΝΩΝΙΑ</h2>
          <p>
            Για οποιοδήποτε πρόβλημα αντιμετωπίζετε ή απορία έχετε επικοινωνήστε
            μαζί μας, είτε τηλεφωνικώς στο παρακάτω νούμερο είτε μέσω
            ηλεκτρονικού ταχυδρομείου και λάβετε την απάντηση εντός 24 ωρών
          </p>
          <h3>Τηλ. Επικοινωνίας</h3>
          <p>22310-99999</p>
        </div>
        <div className={classes.forms} style={{ width: '100%' }}>
          <form className={classes.form} style={{ padding: '10px' }}>
            <div
              className={classes.inputs}
              style={{ display: 'block', marginLeft: '80px' }}
            >
              {/*display block giati epireaze to form sto upload*/}
              <input
                type='email'
                placeholder='Διεύθυνση Email'
                style={{ width: '230px', marginLeft: '-1px', padding: '8px' }}
                required
              />{' '}
              {/*marginright auto to 1 px giati den ebgaine kalh h stoixish */}
              <textarea
                style={{ marginTop: '15px', height: '150px', width: '230px' }}
                placeholder='Στείλε το μήνυμα σου...'
              ></textarea>
              <input type='button' value='Αποστολή' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
