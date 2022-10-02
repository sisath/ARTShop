import React from 'react';
import './sidebar.css';

import logo1 from '../../Assets/logo1.png'
import { BsBrush } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdExplore, MdPayment } from 'react-icons/md'
import { RiImageEditFill } from 'react-icons/ri'
import { IoBarChartSharp } from 'react-icons/io5'
import { BiTrendingUp } from 'react-icons/bi'
import { IoMdContact } from 'react-icons/io'
import { BsQuestionCircle } from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className="logoDiv flex">
        <img src={logo1} alt="Name" />
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          MENU
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="a" className='menuLink flex'>
              <BsBrush className="icon"/>
              <span className="smallText">
                Dash Board
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="a" className='menuLink flex'>
              <TbTruckDelivery className="icon"/>
              <span className="smallText">
                My Orders
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="a" className='menuLink flex'>
              <MdExplore className="icon"/>
              <span className="smallText">
                Explore
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="a" className='menuLink flex'>
              <RiImageEditFill className="icon"/>
              <span className="smallText">
                Drawings
              </span>
            </a>
          </li>

        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="a" className='menuLink flex'>
              <IoBarChartSharp className="icon"/>
              <span className="smallText">
                Charts
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="a" className='menuLink flex'>
              <BiTrendingUp className="icon"/>
              <span className="smallText">
                Trends
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="a" className='menuLink flex'>
              <IoMdContact className="icon"/>
              <span className="smallText">
                Contact
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="a" className='menuLink flex'>
              <MdPayment className="icon"/>
              <span className="smallText">
                Billing
              </span>
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
          <p>Experiencing an issue? Please do not hesitate to contact
            us with any questions you may have.
          </p>
          <button className='btn'>Go To Help Center</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;