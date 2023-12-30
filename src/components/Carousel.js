import React from 'react'


export default function Carousel() {
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className=""></li>
      <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="2" className=""></li>
    </ol>
    <div className="carousel-inner" >
      <div className="carousel-item" >
        {/* <svg  id="coffee-carousel-first" className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label=" :  " preserveAspectRatio="xMidYMid slice" focusable="false"><title> </title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em"> </text></svg> */}
        <img className="bd-placeholder-img"  width="100%" height="100%" src={require('../static/images/coffee-carousel-1.jpg')} />
        <div className="container">
          <div className="carousel-caption text-left">
            <h1>Sustainable Practices.</h1>
            <p className = "mb-1">Mug Life Coffee is not just about great taste; it's about responsibility.</p>
            <p><a className="btn btn-lg btn-info" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item active">
        <img className="bd-placeholder-img"  width="100%" height="100%" src={require('../static/images/coffee-carousel-2.jpg')} />
        <div className="container">
          <div className="carousel-caption">
            <h1>Craftsmanship in Every Cup.</h1>
            <p className = "mb-1">Our beans are carefully roasted to perfection.</p>
            <p><a className="btn btn-lg btn-info" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="bd-placeholder-img"  width="100%" height="100%" src={require('../static/images/coffee-carousel-3.jpg')} />
        <div className="container">
          <div className="carousel-caption text-right">
            <h1>Community and Connection.</h1>
            <p className = "mb-1">Some representative placeholder content for the third slide of this carousel.</p>
            <p><a className="btn btn-lg btn-info" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-target="#myCarousel" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-target="#myCarousel" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </button>
  </div>
  )
}
