import { Briefcase, MapPin, DollarSign } from 'lucide-react';
import PropTypes from 'prop-types';

const JobCard = ({ title, company, location, salary }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <h3 className="font-semibold text-lg">{title}</h3>
    <div className="mt-2 space-y-2">
      <div className="flex items-center text-gray-600">
        <Briefcase className="w-4 h-4 mr-2" />
        <span>{company}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <MapPin className="w-4 h-4 mr-2" />
        <span>{location}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <DollarSign className="w-4 h-4 mr-2" />
        <span>{salary}</span>
      </div>
    </div>
    <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
      Apply Now
    </button>
  </div>
);

JobCard.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired
  };

const DashboardPage = () => {
  const recentJobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Corp',
      location: 'Ho Chi Minh City',
      salary: '$1000 - $2000'
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Innovation Labs',
      location: 'Ha Noi',
      salary: '$1500 - $2500'
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'Digital Solutions',
      location: 'Da Nang',
      salary: '$2000 - $3000'
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          Upload CV
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentJobs.map(job => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;