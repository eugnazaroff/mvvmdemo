import apiSauce from 'apisauce';
export const apiClient = apiSauce.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
