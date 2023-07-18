'use client';
import { useEffect, useState } from 'react';
import { useAuth } from './useAuth';
import { getCookiesFromDocument } from '@/utils/Cookies';

const AuthenticatedRoute = ({ children, router }: any) => {
  const auth = useAuth()
  const [isAuthReady, setIsAuthReady] = useState(false);

  const vefiryCookie = () => {
    const cookies = getCookiesFromDocument();
    if (cookies) return cookies;
    return null;
  }


  useEffect(() => {
    const checkAuth = async () => {
      if (!auth.isAuthenticated) {
        const cookies = vefiryCookie();
        if (!cookies) {
          router.replace('/');
          setIsAuthReady(true);
          return;
        }
        auth.isAuthenticated = true;
        auth.userData = cookies;
        setIsAuthReady(true);
      } else {
        setIsAuthReady(true);
      }
    };
    checkAuth();
  }, [auth.isAuthenticated, router, auth]);

  if (!isAuthReady) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default AuthenticatedRoute;