import React from 'react'
import './Activity.css'

import {BsArrowRightShort} from 'react-icons/bs'

import img from '../../../assets/logo.png'

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="seeContainer grid">

        <div className="singleCustomer flex">
          <img src={img} alt="" />
          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Ordered new book</small>
          </div>

          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img} alt="" />
          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Ordered new book</small>
          </div>

          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img} alt="" />
          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Ordered new book</small>
          </div>

          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img} alt="" />
          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Ordered new book</small>
          </div>

          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img} alt="" />
          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Ordered new book</small>
          </div>

          <div className="duration">
            2 min ago
          </div>
        </div>

      </div>
    </div>
  );
}

export default Activity