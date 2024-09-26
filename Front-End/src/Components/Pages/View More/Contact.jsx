import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try { // eslint-disable-next-line
      const response = await axios.post('https://reliable-events.onrender.com/api/contact', { 
        name,
        email,
        message,
        mobile,
      });

      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
      setMobile('');
    } catch (error) {
      setStatus('An error occurred. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="contact-page">
      <div className="content-container">
        <div className="left-section">
          <h2>Let us help you plan your perfect event!</h2>
          <p>Your event deserves to be unforgettable. We’ll help you every step of the way, making sure your dream event becomes a reality. Get in touch with us to start planning your big day!</p>
        </div>
        <div className="form-container">
          <h2>Contact Us</h2>
          {status && <p className="status-message">{status}</p>}
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
            <button type="submit" className="btn btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
