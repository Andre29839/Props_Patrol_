import instance from './baseURL';

export const getUsersCurrentDataRequest = async () => {
  const { data } = await instance.get('/api/users/current');
  return data;
};
