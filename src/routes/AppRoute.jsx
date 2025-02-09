import { Routes, Route } from 'react-router-dom';
import JobList from '@/pages/job/JobList';
// import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JobList />} />
      <Route path="/jobs" element={<JobList />} />
      {/* Thêm các routes khác từ template */}
    </Routes>
  );
};

export default AppRoutes;