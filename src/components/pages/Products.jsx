import React from 'react';
import './Products.css';
import Layout from '../navigation/Layout';

const Products = () => {
  return (
    <Layout>
      <div className="products-page">
        {/* <h1 className="products">Our Carpet Cleaning Products</h1> */}
        
        <section className="product-detail">
          <h2>Premium Carpet Cleaner Solution</h2>
          
          <div className="product-info">
            <h3>Product Overview</h3>
            <p>
              Our Premium Carpet Cleaner Solution is designed to tackle tough stains and embedded dirt, providing a deep clean for your carpets. Formulated with high-quality ingredients, it effectively removes grime and revives the carpet’s original luster. This cleaner is ideal for both residential and commercial use, ensuring that your carpets look pristine and feel fresh.
            </p>

            <h3>Key Features</h3>
            <ul>
              <li>Powerful stain removal for deep-cleaning</li>
              <li>Safe for all types of carpets and fabrics</li>
              <li>Non-toxic, biodegradable, and eco-friendly</li>
              <li>Suitable for use with both manual and machine cleaning</li>
              <li>Fast-drying formula to minimize downtime</li>
            </ul>

            <h3>Usage Instructions</h3>
            <p>
              1. Vacuum the carpet thoroughly to remove loose dirt and debris.<br />
              2. Dilute the cleaner as per the instructions on the label.<br />
              3. Apply the solution evenly to the carpet using a clean cloth or carpet cleaning machine.<br />
              4. Allow the solution to sit for 5-10 minutes to break down stains.<br />
              5. Blot the area with a clean cloth and rinse with water.<br />
              6. Allow the carpet to dry completely before walking on it.<br />
              7. For best results, use in conjunction with our Carpet Freshener Spray.
            </p>

            <h3>Benefits</h3>
            <p>
              - Restores the appearance and texture of your carpets.<br />
              - Effectively removes stubborn stains and odors.<br />
              - Maintains carpet fibers and prolongs their lifespan.<br />
              - Ensures a healthier environment by eliminating allergens and bacteria.
            </p>

            <h3>Customer Testimonials</h3>
            <div className="testimonials">
              <blockquote>
                "The Premium Carpet Cleaner Solution from Carpet Doctors is fantastic! It removed even the toughest stains from our office carpets and left them looking brand new. Highly recommend!" - <strong>Jane D.</strong>
              </blockquote>
              <blockquote>
                "We’ve been using this cleaner for our home carpets and it’s been a game changer. Easy to use and very effective. The carpets feel soft and smell fresh!" - <strong>John S.</strong>
              </blockquote>
            </div>

            <h3>Pricing</h3>
            <p>
              - 1 Liter Bottle: $19.99<br />
              - 5 Liter Bottle: $89.99<br />
              - 10 Liter Bottle: $159.99<br />
              <small>Contact us for bulk orders and special discounts.</small>
            </p>

            <h3>FAQ</h3>
            <div className="faq">
              <h4>Q: Is this product safe for pets?</h4>
              <p>A: Yes, our Premium Carpet Cleaner Solution is non-toxic and safe for pets and children once dried.</p>

              <h4>Q: Can this cleaner be used on upholstery?</h4>
              <p>A: While primarily designed for carpets, it can also be used on upholstery. Always test on a small area first.</p>

              <h4>Q: How often should I clean my carpets?</h4>
              <p>A: For optimal maintenance, carpets should be cleaned every 6-12 months depending on traffic and usage.</p>
            </div>

            <h3>Contact Us</h3>
            <p>
              For more information about our products or to place an order, please contact us at <a href="mailto:info@carpetdoctors.com">info@carpetdoctors.com</a> or call us at (123) 456-7890. Our customer service team is here to assist you with any queries you may have.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Products;
