import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useStore } from './store';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import Sidebar from './components/Sidebar';
import Background3D from './components/Background3D';

import Savings from './pages/Savings';
import Borrowed from './pages/Borrowed';
import About from './pages/About';
import Terms from './pages/Terms';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useStore(state => state.isAuthenticated);
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return (
    <div className="flex h-screen overflow-hidden">
      <Background3D />
      <Sidebar />
      <div className="flex-1 w-full md:ml-64 pb-16 md:pb-0 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default function App() {
  const checkAuth = useStore(state => state.checkAuth);
  const isAuthenticated = useStore(state => state.isAuthenticated);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/expenses" element={<ProtectedRoute><Expenses /></ProtectedRoute>} />
        <Route path="/savings" element={<ProtectedRoute><Savings /></ProtectedRoute>} />
        <Route path="/borrowed" element={<ProtectedRoute><Borrowed /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/terms" element={<ProtectedRoute><Terms /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
