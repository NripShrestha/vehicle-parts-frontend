import axios from "axios";

const API_BASE_URL = "http://localhost:5051/api"; // Updated to HTTPS to bypass 307 redirection

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export const authService = {
  login: (credentials) => api.post("/Auth/login", credentials),
  register: (userData) => api.post("/Auth/register", userData),
};

export const staffService = {
  getAll: () => api.get("/Staff"),
  getById: (id) => api.get(`/Staff/${id}`),
  create: (data) => api.post("/Staff", data),
  update: (id, data) => api.put(`/Staff/${id}`, data),
  delete: (id) => api.delete(`/Staff/${id}`),
};

export const vendorService = {
  getAll: () => api.get("/Vendors"),
  getById: (id) => api.get(`/Vendors/${id}`),
  create: (data) => api.post("/Vendors", data),
  update: (id, data) => api.put(`/Vendors/${id}`, data),
  delete: (id) => api.delete(`/Vendors/${id}`),
};

export const partsService = {
  getAll: () => api.get("/Parts"),
  getById: (id) => api.get(`/Parts/${id}`),
  create: (data) => api.post("/Parts", data),
  update: (id, data) => api.put(`/Parts/${id}`, data),
  delete: (id) => api.delete(`/Parts/${id}`),
  getLowStock: () => api.get("/Parts/low-stock"),
};

export const customerService = {
  getAll: () => api.get("/Customers"),
  getById: (id) => api.get(`/Customers/${id}`),
  search: (term) => api.get(`/Customers/search?term=${term}`),
  registerWithVehicle: (data) =>
    api.post("/Customers/register-with-vehicle", data),
  getHistory: (id) => api.get(`/Customers/${id}/history`),
};

export const salesService = {
  createInvoice: (data) => api.post("/SalesInvoice", data),
  getAllInvoices: () => api.get("/SalesInvoice"),
  getInvoice: (id) => api.get(`/SalesInvoice/${id}`),
  sendEmail: (id) => api.post(`/SalesInvoice/${id}/send-email`),
};

export const purchasesService = {
  getAll: () => api.get("/Purchases"),
  getById: (id) => api.get(`/Purchases/${id}`),
  create: (data) => api.post("/Purchases", data),
};

export default api;
