import React from 'react';
import logo from '../../assets/images/home_images/companies1.jpg';
import classes from './AdsPage.module.css';

export const AdsPage = () => {
  return (
    <>
      <section className={classes.about}>
        <div className={classes.coded}>
          <img src={logo} />
          <div className={classes.text}>
            <h1 style={{ color: 'rgb(255, 146, 44)' }}>
              Ads For Products 2024
            </h1>
            <h4 style={{ color: 'rgb(255, 146, 44)' }}>Η Επιχείρησή μας</h4>
            <p style={{ color: 'rgb(33, 44, 125)', fontWeight: '800' }}>
              Σας καλωσορίζουμε στην επίσημη ιστοσελίδα μας. Η Ads For Products
              από το 2024 όπου ιδρύθηκε από τον Απόστολο Νικολαΐδη έως και
              σήμερα βρίσκεται συνεχώς δίπλα στους χρήστες της. Στόχος μας είναι
              η εξυπηρέτηση του κοινού μέσα από τις αγγελίες σας και πρωταρχικό
              σκοπό την παροχή υπηρεσιών. Ένα και πλέον χρόνο έχετε σταθεί δίπλα
              στο Ads For Products δίνοντας το κίνητρο εμείς και οι συνεργάτες
              μας να δουλεύουμε πάνω στο να γίνουμε καλύτεροι και να διευρύνουμε
              τους ορίζοντες της επιχείρησής μας. Ήδη αριθμούμε ένα σημαντικό
              αριθμό συνεργατών με εμπειρία και υπηρεσίες που μας βοηθούν να
              διευρυνθούμε. Οι εγκαταστάσεις μας βρίσκονται στην οδό Τσαλτάκη 8
              στην Λαμία. Για οποιαδήποτε απορία και λοιπά ζητήματα
              επικοινωνήστε μαζί μας στα τηλέφωνα 697-233-2455 και 22310-00000.
              Μαζί γινόμαστε καλύτεροι.
            </p>
          </div>
        </div>
      </section>
      <div className={classes.wrapper}>
        <div className={classes.koutia}>
          <div className={classes.kouti1}>
            <p>1 Εταιρία</p>
          </div>
          <div className={classes.kouti2}>
            <p>15+ Συνεργάτες</p>
          </div>
          <div className={classes.kouti3}>
            <p>500+ Αγγελίες</p>
          </div>
        </div>
      </div>
    </>
  );
};
