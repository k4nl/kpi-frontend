'use client';
import Context from './Context';
import { useAuth } from './useAuth';
import { IUserData } from './context.interface';
import { setCookiesOnDocument, removeCookiesFromDocument } from '@/utils/Cookies';

const AuthProvider = ({ children }: any) => {
  const auth = useAuth();

  const login = (data: IUserData) => {
    auth.isAuthenticated = true;
    auth.userData = data;
    setCookiesOnDocument(data);
  };

  const logout = () => {
    auth.isAuthenticated = false;
    auth.userData = null;
    removeCookiesFromDocument();
  };

  const isAuthenticated = !!auth.userData;

  const contextValue = {
    login,
    logout,
    isAuthenticated,
    userData: auth.userData,
  };

  return (
    <Context.Provider value={contextValue}>{children}</Context.Provider>
  )
}

export default AuthProvider;
