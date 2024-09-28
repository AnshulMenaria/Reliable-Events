import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [service, setService] = useState('');
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false); // New state for sending status

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true); // Set to true while sending

    try { // eslint-disable-next-line
      const response = await axios.post('https://reliable-events.onrender.com/api/contact', { 
        name,
        email,
        mobile,
        service,
      });

      setStatus('Message sent successfully!');
      setIsSending(false); // Reset sending status
      setName('');
      setEmail('');
      setMobile('');
      setService('');
    } catch (error) {
      setStatus('An error occurred. Please try again.');
      setIsSending(false); // Reset sending status in case of error
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
          {status && <p className={`status-message ${status.includes('error') ? 'error' : 'success'}`}>
            <FontAwesomeIcon icon={status.includes('error') ? faExclamationCircle : faCheckCircle} /> {status}
          </p>}
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
              <label>Service</label>
              <select
                className="form-control"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              >
                <option value="" disabled>Select a service</option>
                <option value="Wedding">Wedding</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Seminar & Conferences">Seminar & Conferences</option>
                <option value="Social Event">Social Event</option>
                <option value="College Fest">College Fest</option>
                <option value="Sound Lighting & Decoration">Sound Lighting & Decoration</option>
                <option value="Live Shows & Artist Management">Live Shows & Artist Management</option>
                <option value="Photography & Videography">Photography & Videography</option>
              </select>
            </div>
            <button type="submit" className="btn btn-submit" disabled={isSending}>
              {isSending ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin /> Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
