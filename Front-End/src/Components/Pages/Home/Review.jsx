import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { MdArrowBack, MdArrowForward } from "react-icons/md"; // Icons for custom arrows
import axios from "axios";
import Slider from "react-slick";
import "./Review.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Left Arrow Component
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <MdArrowBack size={30} />
    </div>
  );
};

// Custom Right Arrow Component
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <MdArrowForward size={30} />
    </div>
  );
};

const Review = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [reviews, setReviews] = useState([]);

  // Fetch all reviews from backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/review")
      .then((res) => setReviews(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      name: name,
      rating: rating,
      review: review,
    };

    try {
      await axios.post("http://localhost:8080/api/review", reviewData);
      setSubmitted(true);
      setName("");
      setRating(0);
      setReview("");
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  // Slider settings with custom arrows
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 reviews per slide
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />, // Left arrow
    nextArrow: <NextArrow />, // Right arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="review-page">
      {/* Slider for reviews */}
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {reviews.map((rev, index) => (
            <div key={index} className="review-card">
              <div className="stars">
                {[...Array(5)].map((star, i) => (
                  <FaStar
                    key={i}
                    size={20}
                    color={i < rev.rating ? "#ffc107" : "#e4e5e9"}
                  />
                ))}
              </div>
              <h4>{rev.name}</h4>
              <p>{rev.review}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Review Form */}
      <div className="form-section">
        <h2>Leave a Review</h2>

        <form onSubmit={handleSubmit} className="review-form">
          <div className="rating">
            <h3>Rate Us</h3>
            <div className="stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <FaStar
                    key={index}
                    size={30}
                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(ratingValue)}
                    className="star"
                  />
                );
              })}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="review">Your Review</label>
            <textarea
              className="form-control"
              id="review"
              rows="4"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit Review
          </button>

          {submitted && <p className="success-message">Thank you for your review!</p>}
        </form>
      </div>
    </div>
  );
};

export default Review;
