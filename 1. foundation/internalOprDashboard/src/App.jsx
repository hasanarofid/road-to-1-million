import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/Overview';
import Users from './pages/Users';
import Inventory from './pages/Inventory';
import AuditLogs from './pages/AuditLogs';
import Orders from './pages/Orders';
import Roles from './pages/Roles';
import Login from './pages/Login';
import Register from './pages/Register';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/users" element={<Users />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/audit-logs" element={<AuditLogs />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/roles" element={<Roles />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
