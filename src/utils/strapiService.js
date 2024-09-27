import axios from 'axios';

const API_URL = 'http://localhost:1337/'; // URL of your Strapi backend

// Fetch projects from Strapi
export const fetchProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}api/projects?populate=*`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

