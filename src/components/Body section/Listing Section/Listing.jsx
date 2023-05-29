import React from 'react'
import './Listing.css'

import {BsArrowRightShort} from 'react-icons/bs'
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import img from '../../../assets/logo.png'

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="seeContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="" />
          <h3>Annual Vince</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
            </div>
            <div className="cardText">
              <span>
                1455 books sold <br/>
                <small>21 Sellers <span className='date'>7 days</span></small>
              </span>
            </div>
          </div>
        </div>

        <div className="topSellers featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
            </div>
            <div className="cardText">
              <span>
                1455 books sold <br/>
                <small>21 Sellers <span className='date'>7 days</span></small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing