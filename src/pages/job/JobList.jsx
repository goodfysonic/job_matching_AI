import { useState } from "react";
import PropTypes from 'prop-types';
import Breadcrumb from "@/components/ui/breadcrumb";
import JobSec2 from "@/components/ui/jobs/JobSec2";
import dataJobs from "@/assets/fakeData/dataJobs";
import FormSearch from "@/components/ui/formsearch";
import Gotop from "@/components/ui/gotop";
import PopupJob from "@/components/ui/popup/PopupJob";
import { useModal } from '@/hooks/useModal';

function Joblist() {
  const [isShowPopup, togglePopup] = useModal('.sidebar-popup');
  const [toggle, setToggle] = useState({
    key: "",
    status: false,
  });

  const handleToggle = (key) => {
    setToggle(prev => ({
      status: prev.key === key ? false : true,
      key: prev.key === key ? "" : key,
    }));
  };

  return (
    <>
      <PopupJob 
        isShow={isShowPopup} 
        handlePopup={togglePopup} 
      />
      <Breadcrumb 
        title="Find Jobs" 
        className="breadcrumb-section" 
      />
      <FormSearch />
      <JobSec2 
        data={dataJobs} 
        isShow={isShowPopup} 
        handlePopup={togglePopup} 
      />
      <Gotop />
    </>
  );
}

Joblist.propTypes = {};

export default Joblist;