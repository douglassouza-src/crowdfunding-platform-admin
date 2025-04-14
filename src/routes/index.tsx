import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { 
  HomePage, 
  ReceiverRegisterPage, 
  SupplierRegisterPage, 
  DonorRegisterPage, 
  DashboardPage,
  ContractsPage
} from '../pages';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register/receiver" element={<ReceiverRegisterPage />} />
      <Route path="/register/supplier" element={<SupplierRegisterPage />} />
      <Route path="/register/donor" element={<DonorRegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/contracts" element={<ContractsPage />} />
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes; 