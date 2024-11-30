'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // For routing
import '../../styles/Auth.css'; // Your custom CSS for styling

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Perform login logic here (e.g., API call)
    console.log('Login Data:', formData);

    // On success, redirect to dashboard or home page
    router.push('/dashboard'); // Or wherever you want to redirect on success
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p>
        Don&apos;t have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;
