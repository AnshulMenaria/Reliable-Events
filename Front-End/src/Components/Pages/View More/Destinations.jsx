import React from "react";
import { Helmet } from "react-helmet";
import "./Destinations.css"; // Create a CSS file for styling
import weddingImage from '../../../Assets/ServicesPage/wedding3.png';

const destinations = [
  {
    name: "Taj Lake Palace",
    description: "A beautiful heritage hotel located on an island in Lake Pichola, offering a romantic setting for weddings and events.",
    location: "Lake Pichola, Udaipur",
    imageUrl: weddingImage, // Add your image path here
  },
  {
    name: "The Oberoi Udaivilas",
    description: "Luxurious hotel set in 30 acres of lush gardens, ideal for grand weddings and celebrations.",
    location: "Haridasji Ki Magri, Udaipur",
    imageUrl: "path/to/oberoi-udaivilas.jpg",
  },
  {
    name: "Ananta Palace",
    description: "Nestled in the Aravalli Mountains, Ananta Palace offers a luxurious escape with stunning views and top-notch amenities.",
    location: "Near Fateh Sagar Lake, Udaipur",
    imageUrl: "path/to/ananta-palace.jpg", // Add your image path here
  },
  {
    name: "Radisson Blu Udaipur Palace Resort & Spa",
    description: "Luxurious hotel with stunning views and spacious banquet facilities, ideal for large events and celebrations.",
    location: "Ambamata, Udaipur",
    imageUrl: "path/to/radisson-blu.jpg",
  },
  {
    name: "The Leela Palace Udaipur",
    description: "Elegantly designed with luxurious amenities, The Leela Palace is perfect for grand celebrations and events.",
    location: "Lake Pichola, Udaipur",
    imageUrl: "path/to/leela-palace.jpg",
  },
  {
    name: "Chunda Palace",
    description: "A blend of traditional architecture and modern luxury, perfect for royal weddings and celebrations.",
    location: "Chunda Palace, Udaipur",
    imageUrl: "path/to/chunda-palace.jpg",
  },
  {
    name: "Udai Kothi",
    description: "A charming hotel known for its stunning architecture and picturesque rooftop, ideal for intimate events.",
    location: "Udaipole, Udaipur",
    imageUrl: "path/to/udai-kothi.jpg",
  },
  {
    name: "Hotel Fateh Garh",
    description: "An exquisite heritage hotel offering panoramic views and spacious lawns for outdoor events.",
    location: "Fateh Garh, Udaipur",
    imageUrl: "path/to/fateh-garh.jpg",
  },
  {
    name: "Jaiwana Haveli",
    description: "A beautiful heritage hotel with a cozy atmosphere, ideal for small gatherings and events.",
    location: "Near City Palace, Udaipur",
    imageUrl: "path/to/jaiwana-haveli.jpg",
  },
  {
    name: "Hotel Mewargarh",
    description: "A heritage hotel blending traditional architecture with modern comforts, perfect for weddings and celebrations.",
    location: "Near Fateh Sagar Lake, Udaipur",
    imageUrl: "path/to/hotel-mewargarh.jpg", // Add your image path here
  },
];

const Destinations = () => {
  return (
    <div>
      <Helmet>
        <title>Destinations in Udaipur - Reliable Events</title>
        <meta
          name="description"
          content="Explore the top event destinations in Udaipur, from royal hotels to serene lakes. Perfect venues for weddings and celebrations."
        />
      </Helmet>
      <header className="destinations-header">
        <h1>Top Hotels for Events in Udaipur</h1>
        <p>Explore the best venues for your unforgettable events.</p>
      </header>
      <main className="destinations-list">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card fade-in">
            <img src={destination.imageUrl} alt={destination.name} />
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <p><strong>Location:</strong> {destination.location}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Destinations;
