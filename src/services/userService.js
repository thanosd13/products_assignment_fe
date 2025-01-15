import { http } from './httpService';

export const registerService = body => {
  return http.post('/user/createUser', body);
};

export const loginService = body => {
  return http.post('/user/login', body);
};

export const addFavoriteProductService = productId => {
  return http.post('/user/addFavoriteProduct/' + productId);
};

export const getUserByUsernameService = username => {
  return http.get('/user/getUserByUsername/' + username);
};

export const getAllUsersService = () => {
  return http.get('/user/getAllUsers');
};

export const getFavoriteProductsService = () => {
  return http.get('/user/getFavoriteProducts');
};

export const deleteUserService = id => {
  return http.delete('/user/deleteUserByUserId/' + id);
};

export const deleteFavoriteProductService = productId => {
  return http.delete('/user/deleteFavoriteProduct/' + productId);
};
