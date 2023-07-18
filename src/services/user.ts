import api from './api';

const baseURL = '/user';

const get = async (email: string) => {
  try {
    const response =  await api.get(`${baseURL}/${email}`);
    return response;
  } catch (error: any) {
    return error.response;
  }
}

const userService = {
  get,
}

export default userService;