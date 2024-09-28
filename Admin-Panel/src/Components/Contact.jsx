import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap"; // Import the Spinner component

const AllContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(`https://reliable-events.onrender.com/api/contact`);
        if (!response.ok) {
          throw new Error("Failed to fetch contacts");
        }
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Fetch contacts error:", error);
        setError("Failed to fetch contacts. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false when data is fetched
      }
    };

    fetchContacts();
  }, []);

  // Function to format timestamp into date and time
  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    const formattedTime = date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
    return { formattedDate, formattedTime };
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-5">
      <h2 className="mb-4">Queries</h2>
      {error && <p className="text-danger">{error}</p>}
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th> {/* Mobile column */}
              <th>Service</th>
              <th>Date</th> {/* Date column */}
              <th>Time</th> {/* Time column */}
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact) => {
                const { formattedDate, formattedTime } = formatDateTime(contact.createdAt); // Use createdAt for date and time
                return (
                  <tr key={contact._id}> {/* Assuming each contact has a unique _id */}
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.mobile}</td> {/* Displaying mobile number */}
                    <td>{contact.service}</td>
                    <td>{formattedDate}</td> {/* Displaying formatted date */}
                    <td>{formattedTime}</td> {/* Displaying formatted time */}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No contacts found</td> {/* Adjusted colspan to match the number of columns */}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllContacts;
