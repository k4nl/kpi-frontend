'use client';
import AuthenticatedRoute from '@/context/AuthentificatedRoute';
import AuthProvider from '@/context/Provider';
import { useRouter } from 'next/navigation';

const Provider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <AuthProvider>
      <AuthenticatedRoute router={router}>
        { children }
      </AuthenticatedRoute>
    </AuthProvider>
  );
};

export default Provider;