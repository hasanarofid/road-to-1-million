import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import LandingPage from './pages/LandingPage';
import Overview from './pages/Overview';
import Users from './pages/Users';
import Inventory from './pages/Inventory';
import AuditLogs from './pages/AuditLogs';
import Orders from './pages/Orders';
import Roles from './pages/Roles';
import Login from './pages/Login';
import Register from './pages/Register';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Dashboard Routes */}
          <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
            <Route path="/overview" element={<Overview />} />
            <Route path="/users" element={<Users />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/audit-logs" element={<AuditLogs />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/roles" element={<Roles />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
