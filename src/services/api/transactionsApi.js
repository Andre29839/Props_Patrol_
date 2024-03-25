import instance from './baseURL';

export const getTransactionsSummaryRequest = async params => {
  const { data } = await instance.get('/api/transactions-summary', { params });

  return data;
};

export const getTransactionsRequest = async () => {
  const { data } = await instance.get('/api/transactions');
  return data;
};

export const addTransactionsRequest = async formData => {
  const { data } = await instance.post('/api/transactions', formData);
  return data;
};

export const patchTransactionsRequest = async (transactionId, updatedData) => {
  const { data } = await instance.patch(
    `/api/transactions/${transactionId}`,
    updatedData
  );
  return data;
};

export const deleteTransactionsRequest = async transactionId => {
  const { data } = await instance.delete(`/api/transactions/${transactionId}`);
  return data;
};
