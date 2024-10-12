import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css'; // Assuming you have a separate CSS for CardItem

const CardItem = (props) => {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            {/* Add this paragraph to display the paragraph prop */}
            {props.paragraph && <p className='cards__item__paragraph'>{props.paragraph}</p>}
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;
