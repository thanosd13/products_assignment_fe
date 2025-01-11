import { http } from './httpService';

export const addProductService = body => {
  return http.post('/product/addProduct', body);
};

export const getProductsService = () => {
  return http.get('/product/getProductByUserId');
};
