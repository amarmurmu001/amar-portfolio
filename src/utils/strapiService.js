import axios from 'axios';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
const API_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN;

const api = axios.create({
  baseURL: STRAPI_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export const fetchProjects = async () => {
  try {
    // Add populate=* to get all related data including images
    const response = await api.get('/api/projects?populate=*');
    
    // Log the entire response for debugging
    console.log('Complete Strapi Response:', {
      status: response.status,
      headers: response.headers,
      data: response.data
    });
    
    // Log the raw data in a readable format
    console.log('Raw Strapi Data:', JSON.stringify(response.data, null, 2));
    
    return response.data.data;  // Return the data array from the response
  } catch (error) {
    console.error('Strapi Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    return [];
  }
};

export const getStrapiImageUrl = (imagePath) => {
  if (!imagePath) return '';
  console.log('Image path received:', imagePath);
  
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // Remove any leading slash and 'uploads' if present
  const cleanPath = imagePath.replace(/^\/uploads\//, '');
  const fullUrl = `${STRAPI_URL}/uploads/${cleanPath}`;
  console.log('Constructed image URL:', fullUrl);
  return fullUrl;
};

