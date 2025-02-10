import { Navigate } from 'react-router-dom';
import { useAuth } from '@/routes/AuthContext';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  // Tạm thời return trực tiếp children
  return children;
};

export default ProtectedRoute;