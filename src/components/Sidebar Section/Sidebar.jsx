import React from "react";
import "./Sidebar.css";

import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsQuestionCircle, BsTrophy } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";

import logo from '../../assets/logo.png'

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
        <h2>Read.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>

        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoMdSpeedometer className="icon"></IoMdSpeedometer>
              <span className="smallText">Dashboard</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdDeliveryDining className="icon"></MdDeliveryDining>
              <span className="smallText">My orders</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineExplore className="icon"></MdOutlineExplore>
              <span className="smallText">Explore</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsTrophy className="icon"></BsTrophy>
              <span className="smallText">Products</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">SETTINGS</h3>

        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlinePieChart className="icon"></AiOutlinePieChart>
              <span className="smallText">Charts</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BiTrendingUp className="icon"></BiTrendingUp>
              <span className="smallText">Trends</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon"></MdOutlinePermContactCalendar>
              <span className="smallText">Contact</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsCreditCard2Front className="icon"></BsCreditCard2Front>
              <span className="smallText">Billing</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon"/>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, omnis!</p>
          <button className="btn">Go to help center</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
