import instance from './baseURL';

export const getTransactionCategoriesRequest = async () => {
  const { data } = await instance.get('/api/transaction-categories');
  return data;
};
