import api from './api';
import { getCookiesFromDocument } from '@/utils/Cookies';

const baseURL = '/dashboard';

const getDashboard = async () => {
  try {
    const userId = getCookiesFromDocument().id;
    if (!userId) return { status: 400, data: 'Usuario nao encontrado' };
    const response = await api.get(`${baseURL}/${userId}`);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

const dashboardService = {
  getDashboard,
};

export default dashboardService;