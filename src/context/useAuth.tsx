'use client';
import { useContext } from 'react';
import Context from './Context';

export function useAuth() {
  return useContext(Context);
}