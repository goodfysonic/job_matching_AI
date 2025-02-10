import React from "react";
import PropTypes from 'prop-types';

const ForgotPasswordForm = ({ 
 forgotEmail, 
 setForgotEmail, 
 isLoading, 
 onSubmit, 
 onBack 
}) => (
 <div className="mt-6">
   <div className="mb-4">
     <label className="block text-sm font-medium text-gray-700">
       Enter your email
     </label>
     <input
       type="email"
       value={forgotEmail}
       onChange={(e) => setForgotEmail(e.target.value)}
       placeholder="Enter your email"
       className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
       disabled={isLoading}
     />
   </div>
   <button
     type="button"
     onClick={onSubmit}
     className={`w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200 ${
       isLoading ? "opacity-50 cursor-not-allowed" : ""
     }`}
     disabled={isLoading}
   >
     {isLoading ? "Sending..." : "Send Reset Link"}
   </button>
   <button
     type="button"
     onClick={onBack}
     className="w-full mt-4 text-blue-500 hover:text-blue-600 transition-colors duration-200"
     disabled={isLoading}
   >
     Back to Login
   </button>
 </div>
);

ForgotPasswordForm.propTypes = {
 forgotEmail: PropTypes.string.isRequired,
 setForgotEmail: PropTypes.func.isRequired,
 isLoading: PropTypes.bool.isRequired,
 onSubmit: PropTypes.func.isRequired,
 onBack: PropTypes.func.isRequired
};

export default ForgotPasswordForm;