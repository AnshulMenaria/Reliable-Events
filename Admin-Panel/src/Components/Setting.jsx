import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const UpdateAdmin = () => {
  const [email, setEmail] = useState('');
  const [newEmail, setNewEmail] = useState(''); // State for new email
  const [confirmEmail, setConfirmEmail] = useState(''); // State for confirm email
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const navigate = useNavigate(); // Initialize navigate for redirection
  const adminId = localStorage.getItem('adminId');

  // Fetch admin details on component mount
  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const response = await axios.get(`https://reliable-events.onrender.com/api/admin/${adminId}`);
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

    // Check if password and confirm password match
    if (password && password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    // Check if email and confirm email match
    if (newEmail && newEmail !== confirmEmail) {
      setError('Emails do not match.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`https://reliable-events.onrender.com/api/update/${adminId}`, {
        email: newEmail || email, // Send newEmail if changed, otherwise send current email
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
            value={newEmail || email} // Show newEmail if it exists, else current email
            onChange={(e) => setNewEmail(e.target.value)} // Change newEmail
            placeholder="Enter new email (optional)"
          />
        </div>

        {/* Conditionally render confirm email if new email is filled */}
        {newEmail && (
          <div className="mb-3">
            <label htmlFor="confirmEmail" className="form-label">Confirm Email</label>
            <input
              type="email"
              className="form-control"
              id="confirmEmail"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              placeholder="Confirm your email"
              required
            />
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
          />
        </div>

        {/* Conditionally render confirm password if password field is filled */}
        {password && (
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
        )}

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
