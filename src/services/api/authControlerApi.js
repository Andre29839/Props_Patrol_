import instance from './baseURL';

export const setToken = token => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
};

const clearToken = token => {
  instance.defaults.headers.Authorization = '';
};

export const registerRequest = async formData => {
  const { data } = await instance.post('/api/auth/sign-up', formData);
  setToken(data.token);
  return data;
};

export const logInRequest = async formData => {
  const { data } = await instance.post('/api/auth/sign-in', formData);
  setToken(data.token);
  return data;
};

export const logOutRequest = async () => {
  const { data } = await instance.delete('/api/auth/sign-out');
  clearToken();
  return data;
};
