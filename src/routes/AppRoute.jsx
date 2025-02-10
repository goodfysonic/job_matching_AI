import { Routes, Route } from 'react-router-dom';
import JobList from '@/pages/job/JobList';
import Auth from '@/pages/auth/Auth';
import ProtectedRoute from './ProtectedRoute';
import Layout from '@/components/layouts/Layout';

const AppRoutes = () => {
 return (
   <Routes>
     <Route path="/login" element={<Auth />} />
     
     <Route element={<Layout />}>
       <Route 
         path="/jobs" 
         element={
           <ProtectedRoute>
             <JobList />
           </ProtectedRoute>
         } 
       />
       <Route 
         path="/" 
         element={
           <ProtectedRoute>
             <JobList />
           </ProtectedRoute>
         } 
       />
       <Route path="*" element={<div>404 Not Found</div>} />
     </Route>
   </Routes>
 );
};

export default AppRoutes;