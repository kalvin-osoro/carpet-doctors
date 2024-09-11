import { Children } from 'react'
import '../../App.css'
import '../../Styles.css'

import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];


export const Button = ({Children, type, onclick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle
     : STYLES[0];
     const checkButtonSize = SIZES.includes(buttonSize) 
     ? buttonSize
     : SIZES[0];

     return (
        <Link to='/sign-up' className='btn-mobile'>

            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onclick}
            type={type}
            >
                {Children}
            </button>
        </Link>
     )
};