import React from 'react';
import dashboardService from '@/services/dashboard';
import status from '@/utils/status';
import { IData } from './dashboard.interfaces';
import DashboardComponent from './Dashboard';

const getDashboardData = async (): Promise<IData[] | []> => {
  const response = await dashboardService.getDashboard();
  if (response?.status === status.SUCCESS) {
    return response.data;
  }
  return [];
}

export default async function Dashboard() {
  const data = await getDashboardData();

  return (
    <main>
      <DashboardComponent data={data} />
    </main>
  )
}
