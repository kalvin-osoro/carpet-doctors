import React from 'react'
import '../Styles.css'

const HeroSection = () => {
  return (
    <div className='hero-containers'>
        {/* <video src="videos/video-2.mp4" autoPlay loop muted /> */}

        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/carosel-gp.jpeg" className="d-block w-100" alt="..."/>
          </div>
          {/* <div className="carousel-item">
            <img src="/images/carosel-gp.jpeg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="/images/carosel-gp.jpeg" className="d-block w-100" alt="..."/>
          </div> */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        
          
            <div className="hero-btns">
                {/* <Button
                className="btns"
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    GET  STARTED
                </Button>

                <Button
                className="btns"
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    WATCH TRAILER <i className="far fa-play-circle" />
                </Button> */}
            </div>       
      
    </div> 
  )
}

export default HeroSection
