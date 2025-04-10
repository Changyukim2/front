// src/api/fetchData.js
import axios from 'axios';

export const fetchFallHistory = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/fall-history/');
    return response.data;
  } catch (error) {
    console.error('API 요청 실패:', error);
    return [];
  }
};
