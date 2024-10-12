import React from 'react'
// import '../../App.css'
import './Services.css'
import Layout from '../navigation/Layout'
import './Services.css' // Add a dedicated CSS file for Services page styling

const Services = () => {
  return (
    <Layout>
      <div className="services-page">
        <div className="services-header">
          <h1 className="services-title">Our Carpet Cleaning Services</h1>
          <p className="services-subtitle">Exceptional customer service, same-day pickup, and quality cleaning solutions!</p>
        </div>

        <div className="services-info">
          <div className="service-card">
            <h2>Same-Day Pickup</h2>
            <p>We understand that convenience is important to you. That's why we offer same-day pickup services for your carpets. Just give us a call, and our team will be at your doorstep to collect your carpets for cleaning.</p>
          </div>

          <div className="service-card">
            <h2>Deep Carpet Cleaning</h2>
            <p>Our deep cleaning process eliminates dirt, allergens, and bacteria embedded in your carpets. Using eco-friendly cleaning solutions, we ensure a safe and clean environment for you and your family.</p>
          </div>

          <div className="service-card">
            <h2>Quick Drying Techniques</h2>
            <p>Say goodbye to long drying times! With our state-of-the-art drying techniques, your carpets will be ready for use in no time. We minimize water usage while delivering a thorough clean.</p>
          </div>

          <div className="service-card">
            <h2>Custom Cleaning Plans</h2>
            <p>Every carpet is unique, and so is our cleaning plan. We offer customized solutions tailored to the fabric and condition of your carpets, ensuring longevity and durability.</p>
          </div>

          <div className="service-card">
            <h2>Customer Satisfaction Guarantee</h2>
            <p>At Carpet Doctors, your satisfaction is our priority. We guarantee that our professional team will provide exceptional service every time.</p>
          </div>
        </div>

        <div className="contact-section">
          <h2>Get in Touch Today!</h2>
          <p>Call us at <strong>0748 086 676</strong> for same-day pickup or to schedule your next cleaning service.</p>
        </div>
      </div>
    </Layout>
  )
}

export default Services
