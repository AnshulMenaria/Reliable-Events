import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`https://reliable-events.onrender.com/api/review`);
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Fetch reviews error:", error);
        setError("Failed to fetch reviews. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false after data is fetched or error occurs
      }
    };

    fetchReviews();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://reliable-events.onrender.com/api/review/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete review");
      }

      setReviews(reviews.filter((review) => review._id !== id));
    } catch (error) {
      console.error("Delete review error:", error);
      setError("Failed to delete review. Please try again later.");
    }
  };

  // Function to format the createdAt timestamp into a readable date and time
  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    const formattedTime = date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
    return { formattedDate, formattedTime };
  };

  // Sort reviews by createdAt date in descending order
  const sortedReviews = reviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="container mt-4 mb-5">
      <h2 className="mb-4">Reviews</h2>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <>
          {error && <p className="text-danger">{error}</p>}
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Review</th>
                  <th>Date</th> {/* New Date column */}
                  <th>Time</th> {/* New Time column */}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedReviews.length > 0 ? (
                  sortedReviews.map((review) => {
                    const { formattedDate, formattedTime } = formatDateTime(review.createdAt); // Use createdAt for date and time
                    return (
                      <tr key={review._id}>
                        <td>{review.name}</td>
                        <td>{review.rating}</td>
                        <td>{review.review}</td>
                        <td>{formattedDate}</td> {/* Displaying formatted date */}
                        <td>{formattedTime}</td> {/* Displaying formatted time */}
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(review._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">No reviews found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Reviews;
