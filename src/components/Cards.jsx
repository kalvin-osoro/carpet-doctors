 import React from 'react'
import CardItem from './CardItem'
import '../Styles.css'
 
 const Cards = () => {
   return (
     <div className='cards'>

      <h1>Check our the services we offer</h1>
      <div className="cards__container">
        <div className="cadrs__wrapper">
          <ul className="cards__items">
          <CardItem 
            
            src="images/img-9.jpg"
            text="Explore the hidden gem inside the amazon jungle"
            label="Adventure"
            path="/services"
            />
            <CardItem 
            
            src="images/img-2.jpg"
            text="Explore the hidden gem inside the amazon jungle"
            label="Luxury"
            path="/services"
            />            
          </ul>       

          <ul className="cards__items">
          <CardItem 
            
            src="images/img-9.jpg"
            text="Explore the hidden gem inside the amazon jungle"
            label="Adventure"
            path="/services"
            />
            <CardItem 
            
            src="images/img-2.jpg"
            text="Explore the hidden gem inside the amazon jungle"
            label="Luxury"
            path="/services"
            />  
             <CardItem 
            
            src="images/img-2.jpg"
            text="Explore the hidden gem inside the amazon jungle"
            label="Luxury"
            path="/services"
            />             
          </ul>         
        </div>
      </div>
     </div>
   )
 }
 
 export default Cards
 