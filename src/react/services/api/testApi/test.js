// testService.js
import apiClient from './apiClient';
import { ENDPOINTS } from './apiConfig';

export async function fetchTestData() {
  try {
    const response = await apiClient.get(ENDPOINTS.test.getTest);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}