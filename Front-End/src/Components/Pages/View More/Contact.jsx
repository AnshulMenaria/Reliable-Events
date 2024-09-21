import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // For success/error messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the data to your backend
      const response = await axios.post('http://localhost:8080/api/contact', { // eslint-disable-line no-unused-vars
        name,
        email,
        message,
        mobile,
      });

      // Handle success
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
      setMobile('');
    } catch (error) {
      // Handle error
      setStatus('An error occurred. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h2>Contact Us</h2>
        {status && <p className="status-message">{status}</p>} {/* Show status messages */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <input
              type="text"
              className="form-control"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Your Mobile Number"
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
