import React from 'react';
import CardItem from './CardItem';
import '../Styles.css';

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Welcome to Carpet Doctors Cleaning Services</h1>

      {/* Add paragraphs below the cards */}
      <div className="cards__paragraphs">
        <h2>Experience Exceptional Carpet Cleaning Services</h2>
        <p>
          At Carpet Doctors, we are committed to providing top-notch cleaning solutions for your carpets, upholstery, and more. Our team of trained professionals uses state-of-the-art equipment and eco-friendly products to ensure your spaces are spotless and fresh. We pride ourselves on delivering prompt, efficient, and reliable service tailored to your specific needs.
        </p>
        <p>
          Our services include deep cleaning, stain removal, and odor elimination. We offer flexible scheduling options and same-day pickup to accommodate your busy lifestyle. With our attention to detail and dedication to customer satisfaction, you can trust us to enhance the cleanliness and longevity of your carpets and upholstery.
        </p>
      </div>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/side-hd.png"
              text="Quality Carpet Cleaning Services"
              label="Same day pickup"
              path="/services"
              paragraph="Our same-day pickup service ensures that your carpets are collected, cleaned, and returned to you promptly. We use advanced cleaning techniques to remove dirt, stains, and allergens, providing a thorough clean that revitalizes your carpets and improves indoor air quality."
            />
            <CardItem
              src="images/automated.jpeg"
              text="Luxury Carpet Care"
              label="Luxury"
              path="/services"
              paragraph="Experience the luxury of professionally cleaned carpets with our premium services. We use high-quality products and methods to give your carpets a deep clean while preserving their texture and appearance. Ideal for homes and businesses seeking an extra level of care and elegance."
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/hanger 2.jpeg"
              text="Adventure-Ready Carpet Solutions"
              label="Adventure"
              path="/services"
              paragraph="Perfect for high-traffic areas and adventurous environments, our carpet cleaning solutions are designed to handle heavy use and wear. We offer robust cleaning and maintenance options to keep your carpets looking great, no matter how busy your space may be."
            />
            <CardItem
              src="images/reliable 2.jpeg"
              text="Reliable Carpet Maintenance"
              label="Reliable"
              path="/services"
              paragraph="Count on us for reliable carpet maintenance services that extend the life of your carpets. Our team provides consistent, high-quality care, ensuring that your carpets stay clean and well-maintained throughout their lifespan."
            />
            <CardItem
              src="images/customer-service.jpeg"
              text="Customer-Focused Service"
              label="Customer Service"
              path="/customer-service"
              paragraph="At Carpet Doctors, customer satisfaction is our top priority. We offer personalized service and are always available to address your questions and concerns. From initial consultation to follow-up care, we are dedicated to delivering a superior customer experience."
            />
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Cards;
