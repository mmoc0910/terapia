import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_BASE_URL;
console.log('apiUrl ~ ', apiUrl)

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm interceptor để tự động gắn accessToken vào request
api.interceptors.request.use(
  (config) => {
    const authData = JSON.parse(localStorage.getItem('account') || 'null');
    if (authData?.accessToken) {
      config.headers.Authorization = `Bearer ${authData.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Thêm interceptor để xử lý lỗi authentication
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('account'); // Xóa toàn bộ thông tin user
      window.location.href = '/sign-in'; // Chuyển hướng về trang login
    }
    return Promise.reject(error);
  }
);



export default api;
