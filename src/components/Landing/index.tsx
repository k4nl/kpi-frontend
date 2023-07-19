'use client';
import React, { useState } from 'react';
import { useAuth } from '@/context/useAuth';
import { useRouter } from 'next/navigation';
import LogoContainer from './LogoContainer';
import Form from './Form';
import userService from '@/services/user';
import status from '@/utils/status';


interface IResponse {
  status: number;
  data: any;
}


export default function Landing() {
  const [email, setEmail] = useState('');
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();
  const auth = useAuth();

  const verifyResponse = (response: IResponse) => {
    if (response?.status === status.SUCCESS) {
      auth.login(response.data);
      return router.push('/dashboard')
    }
    setSearching(false);
    setError(true);
  }

  const handleSearch = async (e: any) => {
    e.preventDefault();
    setError(false);
    setSearching(true);
    const response = await userService.get(email);
    verifyResponse(response);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '500px',
          maxHeight: '300px',
          height: '100%',
          width: '100%',
          backgroundColor: '#f5f5f5',
          borderRadius: '10px',
        }}
      >

        <LogoContainer />

        <Form
          email={email}
          handleSearch={handleSearch}
          setEmail={setEmail}
          searching={searching}
          error={error}
        />

      </div>
    </div>
  )
}
