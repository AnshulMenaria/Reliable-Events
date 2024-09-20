import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};

export default Contact;
