import { http } from './httpService';

export const addProductService = body => {
  return http.post('/product/addProduct', body);
};

export const addCommentService = (id, body) => {
  return http.post('/product/addComment/' + id, body);
};

export const getProductsWithFiltersService = body => {
  return http.post('/product/searchProductsByCriteria', body);
};

export const getProductsService = () => {
  return http.get('/product/getProductByUserId');
};

export const getProductsPerUserService = id => {
  return http.get('/product/getProductsPerUser/' + id);
};

export const getAllProductsService = () => {
  return http.get('/product/getAllProducts');
};

export const deleteProductService = id => {
  return http.delete('/product/deleteProductById/' + id);
};
