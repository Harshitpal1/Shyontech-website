import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data?.message || error.message);
    return Promise.reject(error);
  }
);

export const servicesAPI = {
  getAll: (category) =>
    api.get('/services', { params: category && category !== 'All' ? { category } : {} }),
  getById: (id) => api.get(`/services/${id}`),
};

export const blogAPI = {
  getAll: (params) => api.get('/blog', { params }),
  getById: (id) => api.get(`/blog/${id}`),
};

export const contactAPI = {
  submit: (data) => api.post('/contact', data),
};

export default api;
