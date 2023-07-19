'use client';
import React, { useState, useEffect } from 'react';
import dashboardService from '@/services/dashboard';
import status from '@/utils/status';
import { IData } from './dashboard.interfaces';
import DashboardComponent from './Dashboard';

export default function Dashboard() {

  const [data, setData] = useState<IData[] | []>([]);

  const getDashboardData = async () => {
    const response = await dashboardService.getDashboard();
    if (response?.status === status.SUCCESS) {
      setData(response.data);
    } else {
      setData([])
    }
  }

  useEffect(() => {
    getDashboardData();
  }, []);

  

  return (
    <main>
      <DashboardComponent data={data} />
    </main>
  )
}
