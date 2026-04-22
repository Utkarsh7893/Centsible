import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useStore } from './store';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import Sidebar from './components/Sidebar';
import Background3D from './components/Background3D';

import Savings from './pages/Savings';
import Borrowed from './pages/Borrowed';
import About from './pages/About';
import Terms from './pages/Terms';

// Wraps authenticated pages with sidebar + background
const AppLayout = ({ children }) => {
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

// Protected route: requires auth + terms accepted
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useStore(state => state.isAuthenticated);
  const termsAccepted = useStore(state => state.termsAccepted);
  const user = useStore(state => state.user);

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  
  // Guests always need to accept terms each session
  // Registered users only once (persisted via backend)
  if (!termsAccepted) return <Navigate to="/terms" replace />;

  return <AppLayout>{children}</AppLayout>;
};

// Terms route: requires auth but NOT terms accepted (otherwise redirect to dashboard)
const TermsRoute = () => {
  const isAuthenticated = useStore(state => state.isAuthenticated);
  const termsAccepted = useStore(state => state.termsAccepted);

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (termsAccepted) return <Navigate to="/dashboard" replace />;

  return (
    <div className="min-h-screen relative">
      <Background3D />
      <Terms />
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
        {/* Public routes */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Landing />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />} />
        
        {/* Terms gate (after login, before dashboard) */}
        <Route path="/terms" element={<TermsRoute />} />

        {/* Protected app routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/expenses" element={<ProtectedRoute><Expenses /></ProtectedRoute>} />
        <Route path="/savings" element={<ProtectedRoute><Savings /></ProtectedRoute>} />
        <Route path="/borrowed" element={<ProtectedRoute><Borrowed /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
