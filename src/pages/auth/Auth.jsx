import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ParticleBackground from "./Particle";
import LoginForm from "./LoginForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { VideoCameraFilled } from '@ant-design/icons';

function Auth() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
 
  const authorize = () => navigate("/");
 
  const forgotPasswordHandler = async () => {
    if (!forgotEmail) {
      toast.error("Please enter your email");
      return;
    }
    try {
      setIsLoading(true);
      toast.success("Password reset instructions sent");
      setIsForgotPassword(false);
    } catch (error) {
      toast.error("Failed to send reset email");
    } finally {
      setIsLoading(false);
    }
  };
 
  return (
    <div className="relative min-h-screen bg-white">
      <ParticleBackground />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">JobTex</h1>
            <VideoCameraFilled className="text-2xl mb-6" />
            <h2 className="text-4xl font-bold mb-4">Login</h2>
          </div>
          
          {isForgotPassword ? (
            <ForgotPasswordForm 
              forgotEmail={forgotEmail}
              setForgotEmail={setForgotEmail}
              isLoading={isLoading}
              onSubmit={forgotPasswordHandler}
              onBack={() => setIsForgotPassword(false)}
            />
          ) : (
            <LoginForm 
              userId={userId}
              setUserId={setUserId}
              password={password} 
              setPassword={setPassword}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              isLoading={isLoading}
              onSubmit={(e) => {
                e.preventDefault();
                authorize();
              }}
              onForgotPassword={() => setIsForgotPassword(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;