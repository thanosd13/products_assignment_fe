import React, { useEffect } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { Select } from '../../components/select/Select';
import { Input } from '../../components/Input/Input';

export const AddProductModal = ({
  show,
  handleClose,
  formData,
  onChange,
  addProduct,
}) => {
  const categoryOptions = [
    { value: 'frouta', label: 'Φρούτα' },
    { value: 'lachanika', label: 'Λαχανικά' },
    { value: 'kreata', label: 'Κρέατα' },
    { value: 'galaktokomika', label: 'Γαλακτοκομικά' },
  ];
  const productOptions =
    formData.category === 'frouta'
      ? [
          { value: 'kerasi', label: 'Κεράσι' },
          { value: 'lemoni', label: 'Λεμόνι' },
          { value: 'milo', label: 'Μήλο' },
          { value: 'rodakino', label: 'Ροδάκινο' },
          { value: 'mpanana', label: 'Μπανάνα' },
          { value: 'achladi', label: 'Αχλάδι' },
          { value: 'aktinidio', label: 'Ακτινίδιο' },
          { value: 'vanilia', label: 'Βανίλια' },
          { value: 'portokali', label: 'Πορτοκάλι' },
          { value: 'stafyli', label: 'Σταφύλι' },
        ]
      : formData.category === 'lachanika'
      ? [
          { value: 'karoto', label: 'Καρότο' },
          { value: 'spanaki', label: 'Σπανάκι' },
          { value: 'ntomata', label: 'Ντομάτα' },
          { value: 'kremmydi', label: 'Κρεμμύδι' },
          { value: 'lachano', label: 'Λάχανο' },
          { value: 'piperia', label: 'Πιπεριά' },
          { value: 'marouli', label: 'Μαρούλι' },
          { value: 'melitzana', label: 'Μελιτζάνα' },
          { value: 'kounoupidi', label: 'Κουνουπίδι' },
          { value: 'patates', label: 'Πατάτες' },
        ]
      : formData.category === 'kreata'
      ? [
          { value: 'moschari', label: 'Μοσχάρι' },
          { value: 'arni', label: 'Αρνί' },
          { value: 'katsiki', label: 'Κατσίκι' },
          { value: 'choirino', label: 'Χοιρινό' },
          { value: 'kotopoulo', label: 'Κοτόπουλο' },
        ]
      : formData.category === 'galaktokomika'
      ? [
          { value: 'voutiro', label: 'Βούτυρο' },
          { value: 'tyri', label: 'Τυρί' },
          { value: 'giaourti', label: 'Γιαούρτι' },
          { value: 'gala', label: 'Γάλα' },
        ]
      : [];

  const qualityOptions = [
    { value: 'viologika', label: 'Βιολογικά' },
    { value: 'nonviologika', label: 'Μη Βιολογικά' },
    { value: 'viologika_miviologika', label: 'Βιολογικά/Μη Βιολογικά' },
  ];

  const originOptions = [
    { value: 'egxwria', label: 'Εγχώρια' },
    { value: 'ekswterikou', label: 'Εξωτερικού' },
    { value: 'egxwria_ekswterikou', label: 'Εγχώρια/Εξωτερικού' },
  ];

  const packingOptions = [
    { value: 'syskevasmena', label: 'Συσκευασμένα' },
    { value: 'xyma', label: 'Χύμα' },
    { value: 'syskevasmena_xyma', label: 'Συσκευασμένα/Χύμα' },
  ];

  const locationOptions = [
    {
      value: 'anatoliki_makedonia_kai_thraki',
      label: 'Ανατολική Μακεδονία και Θράκη',
    },
    { value: 'kentriki_makedonia', label: 'Κεντρική Μακεδονία' },
    { value: 'dytiki_makedonia', label: 'Δυτική Μακεδονία' },
    { value: 'hpeiros', label: 'Ήπειρος' },
    { value: 'thessalia', label: 'Θεσσαλία' },
    { value: 'sterea_ellada', label: 'Στερεά Ελλάδα' },
    { value: 'ionies_nhsoi', label: 'Ιόνιες Νήσοι' },
    { value: 'dytiki_ellada', label: 'Δυτική Ελλάδα' },
    { value: 'peloponnisos', label: 'Πελοπόννησος' },
    { value: 'attiki', label: 'Αττική' },
    { value: 'voreio_aigaio', label: 'Βόρειο Αιγαίο' },
    { value: 'notio_aigaio', label: 'Νότιο Αιγαίο' },
    { value: 'kriti', label: 'Κρήτη' },
  ];

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop='static'
      keyboard={false}
      size='xl'
    >
      <Modal.Header closeButton>
        <Modal.Title>Προσθήκη προϊόντος</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <Select
              label='Κατηγορία'
              placeholder='Επιλέξτε μια κατηγορία'
              options={categoryOptions}
              name='category'
              value={formData?.category}
              onChange={onChange}
            />
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <Select
              label='Προϊόν'
              placeholder='Επιλέξτε ένα προϊόν'
              options={productOptions}
              name='product'
              value={formData?.product}
              onChange={onChange}
            />
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <Select
              label='Ποιότητα'
              placeholder='Επιλέξτε ποιότητα'
              options={qualityOptions}
              name='quality'
              value={formData?.quality}
              onChange={onChange}
            />
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <Select
              label='Προέλευση'
              placeholder='Επιλέξτε προέλευση'
              options={originOptions}
              name='origin'
              value={formData?.origin}
              onChange={onChange}
            />
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <Select
              label='Συσκευασία'
              placeholder='Επιλέξτε συσκευασία'
              options={packingOptions}
              name='packing'
              value={formData?.packing}
              onChange={onChange}
            />
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <Select
              label='Τοποθεσία'
              placeholder='Επιλέξτε τοποθεσία'
              options={locationOptions}
              name='location'
              value={formData?.location}
              onChange={onChange}
            />
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            <Input
              label='Φωτογραφία'
              type='file'
              name='image'
              onChange={onChange}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <CustomButton label='Προσθήκη' variant='success' onClick={addProduct} />
        <CustomButton label='Κλείσιμο' variant='danger' onClick={handleClose} />
      </Modal.Footer>
    </Modal>
  );
};
