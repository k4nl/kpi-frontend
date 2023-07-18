import api from './api';
import { cookies } from 'next/headers'
import JWT from '@/utils/JWT'

const baseURL = '/dashboard';

const getUserIdFromCookies = () => {
  const token = cookies().get('token')?.value;
  if (!token) return null;
  return JWT.verify(token).id;
}

const getDashboard = async () => {
  try {
    const userId = getUserIdFromCookies();
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