'use client';

import { createContext } from 'react';
import { AuthContextType } from './context.interface';

const AuthContext = createContext<AuthContextType>({
  userData: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
