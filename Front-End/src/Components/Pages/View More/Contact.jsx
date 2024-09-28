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
  const [uniquedate, setUniquedate] = useState(''); // State for selected unique date
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false); // Sending status

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true); // Set sending status to true

    try {
      const response = await axios.post('https://reliable-events.onrender.com/api/contact', { 
        name,
        email,
        mobile,
        service,
        uniquedate, // Send the selected unique date to the backend
      });

      setStatus('Message sent successfully! We will contact you shortly to discuss your event details.');
      setIsSending(false); // Reset sending status
      clearForm();
    } catch (error) {
      setStatus('An error occurred. Please try again.');
      setIsSending(false); // Reset sending status in case of error
      console.error(error);
    }
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setMobile('');
    setService('');
    setUniquedate(''); // Reset unique date field
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
          {status && (
            <p className={`status-message ${status.includes('error') ? 'error' : 'success'}`}>
              <FontAwesomeIcon icon={status.includes('error') ? faExclamationCircle : faCheckCircle} /> {status}
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
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
              <input
                type="tel"
                className="form-control"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Your Mobile Number"
                pattern="[0-9]{10}" // Basic validation for 10-digit mobile numbers
                required
              />
              <small className="form-text text-muted">Format: 10-digit mobile number.</small>
            </div>
            <div className="form-group">
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
            <div className="form-group">
              <input
                type="date"
                className="form-control"
                value={uniquedate} // Controlled by state
                onChange={(e) => setUniquedate(e.target.value)} // Update state on change
                required
              />
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
