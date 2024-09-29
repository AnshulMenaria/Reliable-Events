import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { MdArrowBack, MdArrowForward } from "react-icons/md"; // Icons for custom arrows
import axios from "axios";
import Slider from "react-slick";
import "./Review.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg2 from "../../../Assets/HeroSection/bg-2.jpg";

// Custom Left Arrow Component
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} reviews-custom-prev-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      aria-label="Previous Review"
    >
      <MdArrowBack size={30} />
    </button>
  );
};

// Custom Right Arrow Component
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} reviews-custom-next-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      aria-label="Next Review"
    >
      <MdArrowForward size={30} />
    </button>
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
      .get("https://reliable-events.onrender.com/api/review")
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
      await axios.post(
        "https://reliable-events.onrender.com/api/review",
        reviewData
      );
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
    <section className="reviews-page">
      <h1 className="reviews-heading">Customer Reviews</h1> {/* Added for SEO */}
      
      {/* Slider for reviews */}
      <div className="reviews-slider-container" aria-label="Customer Reviews Carousel">
        <Slider {...sliderSettings}>
          {reviews.map((rev, index) => (
            <article key={index} className="reviews-card">
              <div className="reviews-stars" aria-label={`Rating: ${rev.rating} out of 5`}>
                {[...Array(5)].map((star, i) => (
                  <FaStar
                    key={i}
                    size={20}
                    color={i < rev.rating ? "#ffc107" : "#e4e5e9"}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <h4>{rev.name}</h4>
              <p>{rev.review}</p>
            </article>
          ))}
        </Slider>
      </div>

      {/* Review Form */}
      <div className="reviews-form-section">
        {/* Image Section */}
        <figure className="reviews-image-container">
          <img src={bg2} alt="Illustration for Reviews" className="reviews-img" />
        </figure>

        {/* Form Section */}
        <section className="reviews-form-container">
          <h2>Submit Review</h2>
          <p>
            We highly value your feedback! Kindly take a moment to rate your
            experience and provide us with your valuable feedback.
          </p>
          <form onSubmit={handleSubmit} className="reviews-form">
            <div className="reviews-rating">
              <label htmlFor="rating" className="sr-only">
                Rating
              </label>
              <div className="reviews-stars">
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <FaStar
                      key={index}
                      size={30}
                      color={
                        ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                      }
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                      onClick={() => setRating(ratingValue)}
                      className="star"
                      aria-label={`Rating ${ratingValue} out of 5`}
                    />
                  );
                })}
              </div>
            </div>

            <div className="reviews-form-group">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                className="reviews-form-control"
                placeholder="Enter your Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="reviews-form-group">
              <label htmlFor="review" className="sr-only">
                Review
              </label>
              <textarea
                className="reviews-form-control"
                id="review"
                placeholder="Write your Review"
                rows="4"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="reviews-submit-btn">
              Submit Review
            </button>

            {submitted && (
              <p className="reviews-success-message">
                Thank you for your review!
              </p>
            )}
          </form>
        </section>
      </div>
    </section>
  );
};

export default Review;
