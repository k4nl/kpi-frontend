import { IUserData } from "@/context/context.interface"
import JWT from './JWT';

const setCookiesOnDocument = (userData: IUserData) => {
  const token = JWT.sign(userData);
  document.cookie = `token=${token}; path=/`;
}

const getCookiesFromDocument = () =>  {
  const cookies = document.cookie.split(';');
  const token = cookies.find(cookie => cookie.includes('token'));
  if (!token) return null;
  const tokenValue = token.split('=')[1];
  const userData = JWT.verify(tokenValue);
  return userData;
};

const removeCookiesFromDocument = () => {
  const cookies = document.cookie.split(';');
  const token = cookies.find(cookie => cookie.includes('token'));
  if (!token) return;
  document.cookie = `${token}; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
};

export { setCookiesOnDocument, getCookiesFromDocument, removeCookiesFromDocument };