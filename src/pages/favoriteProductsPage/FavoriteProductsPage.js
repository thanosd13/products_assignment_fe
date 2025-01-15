import { Col, Row } from 'react-bootstrap';
import { ProductCard } from '../../components/productCard/ProductCard';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { useEffect, useState } from 'react';
import { useLoader } from '../../contexts/LoaderContext';
import { getFavoriteProductsService } from '../../services/userService';

export const FavoriteProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [foundProducts, setFoundProducts] = useState(false);
  const { showLoader, hideLoader } = useLoader();
  const [currentPage, setCurrentPage] = useState(1);
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
    window.history.pushState({}, '', url);
    window.location.reload();
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

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page'), 10);
    if (page) {
      setCurrentPage(page);
    }

    showLoader();
    getFavoriteProductsService()
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
  }, []);

  return (
    <div className='p-5 mt-5'>
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
