import axios from 'axios';

export const PRIMARY_URL = "https://venturenestbackend.cgcuniversity.in";
export const FALLBACK_URL = "https://venture-nest-backend.onrender.com";

let currentBaseUrl = PRIMARY_URL;

// Set global variable for easy access without imports in every file
window.API_BASE_URL = currentBaseUrl;

const api = axios.create({
  baseURL: currentBaseUrl,
  timeout: 15000,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if ((!error.response || error.response.status >= 500) && !originalRequest._retry) {
      originalRequest._retry = true;
      if (currentBaseUrl === PRIMARY_URL) {
        console.warn("Primary API failed, switching to Fallback URL...");
        currentBaseUrl = FALLBACK_URL;
        window.API_BASE_URL = currentBaseUrl; // Update global
      }
      originalRequest.baseURL = currentBaseUrl;
      // If the URL was absolute, replace it
      if (originalRequest.url.includes(PRIMARY_URL)) {
        originalRequest.url = originalRequest.url.replace(PRIMARY_URL, FALLBACK_URL);
      }
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

export const initializeApi = async () => {
  try {
    await axios.get(`${PRIMARY_URL}/getstartup`, { timeout: 5000 });
    currentBaseUrl = PRIMARY_URL;
  } catch (error) {
    currentBaseUrl = FALLBACK_URL;
  }
  window.API_BASE_URL = currentBaseUrl;
  return currentBaseUrl;
};

export const getBaseUrl = () => currentBaseUrl;

export default api;
