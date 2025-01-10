import { http } from './httpService';

export const registerService = body => {
  return http.post('/user/createUser', body);
};

export const loginService = body => {
  return http.post('/user/login', body);
};
