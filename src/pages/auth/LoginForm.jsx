import React from "react";
import PropTypes from 'prop-types';
import { EyeOutlined } from '@ant-design/icons';

const LoginForm = ({
  userId,
  setUserId,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  isLoading,
  onSubmit,
  onForgotPassword
}) => (
  <form onSubmit={onSubmit} className="mt-8">
    <div className="mb-4">
      <label className="block mb-2">
        Username <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="w-full p-2 bg-blue-50/30 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        disabled={isLoading}
        required
      />
    </div>
    
    <div className="mb-6">
      <label className="block mb-2">
        Password <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"} 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 bg-blue-50/30 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          disabled={isLoading}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded"
        >
          <EyeOutlined className="text-gray-500" />
        </button>
      </div>
    </div>

    <button
      type="submit" 
      className="w-full mb-4 p-2 border border-gray-300 rounded text-base font-normal hover:bg-gray-50"
      disabled={isLoading}
    >
      LOGIN
    </button>

    <button
      type="button"
      onClick={onForgotPassword}
      className="w-full p-2 border border-gray-300 rounded uppercase text-sm font-normal"
    >
      FORGOT PASSWORD?
    </button>
  </form>
);

LoginForm.propTypes = {
  userId: PropTypes.string.isRequired,
  setUserId: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  setShowPassword: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onForgotPassword: PropTypes.func.isRequired
};

export default LoginForm;