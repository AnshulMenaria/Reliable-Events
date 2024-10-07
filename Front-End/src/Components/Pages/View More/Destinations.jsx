import React from "react";
import { Helmet } from "react-helmet";
import "./Destinations.css"; 
import TajLakePalace from '../../../Assets/Destinations/TajLakePalace.jpg';
import Oberoi from '../../../Assets/Destinations/Oberoi.jpg';
import LeelaPalace from '../../../Assets/Destinations/LeelaPalace.jpg';
import jagmandir from '../../../Assets/Destinations/jagmandir.jpg';
import Ananta from '../../../Assets/Destinations/Ananta.jpg';
import Radissonblu from '../../../Assets/Destinations/Radissonblu.jpg';
import Chunda from '../../../Assets/Destinations/Chunda.jpg';
import udaikothi from '../../../Assets/Destinations/udai kothi.jpg';
import FatehGarh from '../../../Assets/Destinations/FatehGarh.jpg';
import labhgarh from '../../../Assets/Destinations/labh garh.jpg';

const destinations = [
  {
    name: "Taj Lake Palace",
    description: "A beautiful heritage hotel located on an island in Lake Pichola, offering a romantic setting for weddings and events.",
    location: "Lake Pichola, Udaipur",
    imageUrl: TajLakePalace,
  },
  {
    name: "The Oberoi Udaivilas",
    description: "Luxurious hotel set in 30 acres of lush gardens, ideal for grand weddings and celebrations.",
    location: "Haridasji Ki Magri, Udaipur",
    imageUrl: Oberoi,
  },
  {
    name: "The Leela Palace Udaipur",
    description: "Elegantly designed with luxurious amenities, The Leela Palace is perfect for grand celebrations and events.",
    location: "Lake Pichola, Udaipur",
    imageUrl: LeelaPalace,
  },
  {
    name: "Jagmandir Island Palace",
    description: "A magnificent palace located on an island in Lake Pichola, offering a majestic setting for weddings and royal events.",
    location: "Lake Pichola, Udaipur",
    imageUrl: jagmandir,
  },
  {
    name: "Ananta Palace",
    description: "Nestled in the Aravalli Mountains, Ananta Palace offers a luxurious escape with stunning views and top-notch amenities.",
    location: "Near Fateh Sagar Lake, Udaipur",
    imageUrl: Ananta,
  },
  {
    name: "Radisson Blu Udaipur Palace Resort & Spa",
    description: "Luxurious hotel with stunning views and spacious banquet facilities, ideal for large events and celebrations.",
    location: "Ambamata, Udaipur",
    imageUrl: Radissonblu,
  },
  {
    name: "Chunda Palace",
    description: "A blend of traditional architecture and modern luxury, perfect for royal weddings and celebrations.",
    location: "Chunda Palace, Udaipur",
    imageUrl: Chunda,
  },
  {
    name: "Udai Kothi",
    description: "A charming hotel known for its stunning architecture and picturesque rooftop, ideal for intimate events.",
    location: "Udaipole, Udaipur",
    imageUrl: udaikothi,
  },
  {
    name: "Hotel Fateh Garh",
    description: "An exquisite heritage hotel offering panoramic views and spacious lawns for outdoor events.",
    location: "Fateh Garh, Udaipur",
    imageUrl: FatehGarh,
  },
  {
    name: "Labh Garh",
    description: "A luxurious hotel set amidst scenic hills, offering a serene environment perfect for weddings and corporate events.",
    location: "Cheerwa Ghats, Eklingji Road, Udaipur",
    imageUrl: labhgarh,
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
