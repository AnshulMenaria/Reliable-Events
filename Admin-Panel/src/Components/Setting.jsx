import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const UpdateAdmin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const navigate = useNavigate(); // Initialize navigate for redirection
  const adminId = localStorage.getItem('adminId');

  // Fetch admin details on component mount
  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/admin/${adminId}`);
        setEmail(response.data.email); // Set current admin email
      } catch (err) {
        setError(err.response ? err.response.data.error : 'Error fetching admin details');
      }
    };

    if (adminId) {
      fetchAdminDetails();
    } else {
      setError('Admin ID not found in local storage.');
    }
  }, [adminId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    try {
      const response = await axios.post(`http://localhost:8080/api/update/${adminId}`, {
        email,
        password,
      });

      setMessage(response.data.message);
      setError('');
      
      // Redirect to login after a short delay
      setTimeout(() => {
        navigate('/'); // Redirect to login page
      }, 2000); // 2 seconds delay for demonstration
    } catch (err) {
      setError(err.response ? err.response.data.error : 'Server error');
      setMessage('');
    } finally {
      setLoading(false); // Set loading to false after the request
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update Admin Details</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Updating...' : 'Update'}
        </button>
      </form>

      {loading && (
        <div className="spinner-border text-primary mt-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {message && <div className="alert alert-success mt-3">{message}</div>}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
};

export default UpdateAdmin;
