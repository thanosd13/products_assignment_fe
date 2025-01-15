import { Col, Row } from 'react-bootstrap';
import { ProductCard } from '../../components/productCard/ProductCard';
import { CardContainer } from '../../styles/Styles';
import { Input } from '../../components/Input/Input';
import { Select } from '../../components/select/Select';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { faMagnifyingGlass, faBroom } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useLoader } from '../../contexts/LoaderContext';
import {
  getAllProductsService,
  getProductsWithFiltersService,
} from '../../services/productService';
import {
  categoryOptions,
  locationOptions,
  originOptions,
  packingOptions,
  productOptions,
  qualityOptions,
} from '../../utils/utils';

export const UserPage = () => {
  const initialState = {
    category: '',
    product: '',
    quality: '',
    origin: '',
    packing: '',
    location: '',
  };
  const [products, setProducts] = useState([]);
  const [foundProducts, setFoundProducts] = useState(false);
  const { showLoader, hideLoader } = useLoader();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchFilters, setSearchFilters] = useState(initialState);
  const itemsPerPage = 3; // Number of items per page

  const renderPageFunc = () => {
    window.location.reload();
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
    const url = new URL(window.location);
    url.searchParams.set('page', pageNumber);
    Object.keys(searchFilters).forEach(key => {
      if (searchFilters[key]) {
        url.searchParams.set(key, searchFilters[key]);
      }
    });
    window.history.pushState({}, '', url);
    fetchProducts(pageNumber, searchFilters);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <CustomButton
          style={{ borderRadius: '1.1rem' }}
          key={i}
          label={i.toString()}
          onClick={() => handlePageChange(i)}
          variant={i === currentPage ? 'primary' : 'secondary'}
          className='mx-1'
        />
      );
    }
    return buttons;
  };

  const handleFieldChange = event => {
    const { name, value } = event.target;
    setSearchFilters(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const searchProducts = () => {
    setCurrentPage(1);
    const url = new URL(window.location);
    url.searchParams.set('page', 1);
    Object.keys(searchFilters).forEach(key => {
      if (searchFilters[key]) {
        url.searchParams.set(key, searchFilters[key]);
      }
    });
    window.history.pushState({}, '', url);
    fetchProducts(1, searchFilters);
  };

  const cleanFilters = () => {
    setSearchFilters(initialState);
    setCurrentPage(1);
    const url = new URL(window.location);
    url.searchParams.delete('page');
    Object.keys(initialState).forEach(key => {
      url.searchParams.delete(key);
    });
    window.history.pushState({}, '', url);
    fetchProducts(1, initialState);
  };

  const fetchProducts = (page, filters) => {
    showLoader();
    getProductsWithFiltersService(filters)
      .then(response => {
        setProducts(response.data);
        if (response.data.length < 1) {
          setFoundProducts(false);
        } else {
          setFoundProducts(true);
        }
        hideLoader();
      })
      .catch(error => {
        console.log(error);
        hideLoader();
      });
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page'), 10) || 1;
    const filters = { ...initialState };
    Object.keys(initialState).forEach(key => {
      const value = urlParams.get(key);
      if (value) {
        filters[key] = value;
      }
    });
    setSearchFilters(filters);
    setCurrentPage(page);
    fetchProducts(page, filters);
  }, []);

  return (
    <div className='p-5 mt-5'>
      <CardContainer width='100%' height='20vh'>
        <Row className='w-100'>
          <Col sm={3}>
            <Select
              label='Επιλέξτε κατηγορία'
              name='category'
              value={searchFilters.category}
              options={categoryOptions}
              onChange={handleFieldChange}
            />
          </Col>
          <Col sm={3}>
            <Select
              label='Επιλέξτε προϊόν'
              name='product'
              value={searchFilters.product}
              options={productOptions}
              onChange={handleFieldChange}
            />
          </Col>
          <Col sm={3}>
            <Select
              label='Επιλέξτε ποιότητα'
              name='quality'
              value={searchFilters.quality}
              options={qualityOptions}
              onChange={handleFieldChange}
            />
          </Col>
          <Col sm={3}>
            <Select
              label='Επιλέξτε προέλευση'
              name='origin'
              value={searchFilters.origin}
              options={originOptions}
              onChange={handleFieldChange}
            />
          </Col>
          <Col sm={3}>
            <Select
              label='Επιλέξτε συσκευασία'
              name='packing'
              value={searchFilters.packing}
              options={packingOptions}
              onChange={handleFieldChange}
            />
          </Col>
          <Col sm={3}>
            <Select
              label='Επιλέξτε τοποθεσία'
              name='location'
              value={searchFilters.location}
              options={locationOptions}
              onChange={handleFieldChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomButton
              icon={faMagnifyingGlass}
              label='Αναζήτηση'
              onClick={searchProducts}
            />
          </Col>
          <Col>
            <CustomButton
              variant='danger'
              icon={faBroom}
              label='Καθαρισμός'
              onClick={cleanFilters}
            />
          </Col>
        </Row>
      </CardContainer>
      {currentProducts.length > 0 && (
        <Row className='p-3'>
          {currentProducts.map(product => (
            <Col sm={4} className='pt-4' key={product.id}>
              <ProductCard product={product} renderPageFunc={renderPageFunc} />
            </Col>
          ))}
        </Row>
      )}
      {!foundProducts && (
        <Row className='pt-4 w-100'>
          <h4 className='text-center'>Δεν βρέθηκαν προϊόντα!</h4>
        </Row>
      )}
      <Row className='mt-4'>
        <Col className='d-flex justify-content-center gap-1'>
          {renderPaginationButtons()}
        </Col>
      </Row>
    </div>
  );
};
