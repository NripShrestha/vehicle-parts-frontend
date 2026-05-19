import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5051/api";

export const API_ORIGIN = API_BASE_URL.replace(/\/api\/?$/, "");

export const resolvePartImageUrl = (imageUrl) => {
  if (!imageUrl) return null;
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }
  return `${API_ORIGIN}${imageUrl.startsWith("/") ? imageUrl : `/${imageUrl}`}`;
};

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

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

const multipartConfig = {
  headers: { "Content-Type": "multipart/form-data" },
};

export const buildPartFormData = (fields, imageFile) => {
  const formData = new FormData();
  formData.append("VendorID", String(fields.vendorID ?? fields.VendorID));
  formData.append("PartName", fields.partName ?? fields.PartName ?? "");
  formData.append("Category", fields.category ?? fields.Category ?? "");
  formData.append("CostPrice", String(fields.costPrice ?? fields.CostPrice ?? 0));
  formData.append(
    "SellingPrice",
    String(fields.sellingPrice ?? fields.SellingPrice ?? 0),
  );
  formData.append(
    "StockQuantity",
    String(fields.stockQuantity ?? fields.StockQuantity ?? 0),
  );
  formData.append(
    "ReorderLevel",
    String(fields.reorderLevel ?? fields.ReorderLevel ?? 10),
  );
  if (imageFile) {
    formData.append("image", imageFile);
  }
  return formData;
};

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
  createWithImage: (formData) =>
    api.post("/Parts/with-image", formData, multipartConfig),
  updateWithImage: (id, formData) =>
    api.put(`/Parts/${id}/with-image`, formData, multipartConfig),
  uploadImage: (id, file) => {
    const formData = new FormData();
    formData.append("image", file);
    return api.post(`/Parts/${id}/image`, formData, multipartConfig);
  },
  deleteImage: (id) => api.delete(`/Parts/${id}/image`),
};

export const customerService = {
  getAll: () => api.get("/Customers"),
  getById: (id) => api.get(`/Customers/${id}/details`),
  search: (term) => api.get(`/Customers/search?term=${term}`),
  registerWithVehicle: (data) =>
    api.post("/Customers/register-with-vehicle", data),
  getHistory: (id) => api.get(`/Customers/${id}/history`),
};

export const salesService = {
  createInvoice: (data) => api.post("/SalesInvoice", data),
  getAllInvoices: () => api.get("/SalesInvoice"),
  getInvoice: (id) => api.get(`/SalesInvoice/${id}`),
  updatePayment: (id, data) => api.put(`/SalesInvoice/${id}/payment`, data),
  sendEmail: (id) => api.post(`/SalesInvoice/${id}/send-email`),
};

export const purchasesService = {
  getAll: () => api.get("/Purchases"),
  getById: (id) => api.get(`/Purchases/${id}`),
  create: (data) => api.post("/Purchases", data),
};

export const customerSelfServiceService = {
  getProfile: () => api.get("/customer-self-service/profile"),
  updateProfile: (data) => api.put("/customer-self-service/profile", data),
  getHistory: () => api.get("/customer-self-service/history"),
  getVehicles: () => api.get("/customer-self-service/vehicles"),
  registerVehicle: (data) => api.post("/customer-self-service/vehicles", data),
  updateVehicle: (id, data) =>
    api.put(`/customer-self-service/vehicles/${id}`, data),
  deleteVehicle: (id) => api.delete(`/customer-self-service/vehicles/${id}`),
  bookAppointment: (data) =>
    api.post("/customer-self-service/appointments", data),
  getAppointments: () => api.get("/customer-self-service/appointments"),
  cancelAppointment: (id) =>
    api.put(`/customer-self-service/appointments/${id}/cancel`),
  submitReview: (data) => api.post("/customer-self-service/reviews", data),
  getReviews: () => api.get("/customer-self-service/reviews"),
  requestPart: (data) => api.post("/customer-self-service/part-requests", data),
  getPartRequests: () => api.get("/customer-self-service/part-requests"),
};

export const reportService = {
  getDailyFinancial: () => api.get("/Reports/financial/daily"),
  getMonthlyFinancial: () => api.get("/Reports/financial/monthly"),
  getYearlyFinancial: () => api.get("/Reports/financial/yearly"),
  getFinancialSummary: () => api.get("/Reports/financial/summary"),
  getRegularCustomers: () => api.get("/Reports/regular-customers"),
  getTopSpenders: () => api.get("/Reports/top-spenders"),
  getPendingCredits: () => api.get("/Reports/pending-credits"),
  triggerNotifications: () => api.post("/Reports/trigger-notifications"),
};

export default api;
