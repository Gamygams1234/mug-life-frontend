import React from 'react'
import { Link } from "react-router-dom";
import '../Home.scss';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <div className = "homepage">
{/* 
      <h1>Embrace the Daily Grind</h1>
      <Link to="#">
        <button>Shop Now</button>
      </Link> */}
   <Carousel></Carousel>

    </div>
  )
}
