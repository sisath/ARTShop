import React from 'react';
import './top.css';

import { BsSearch, BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { IoMdNotificationsOutline } from 'react-icons/io'

import img from '../../../Assets/user/me-hehe.jpg'
import img1 from '../../../Assets/logo2.png'
import video from '../../../Assets/video/green.mp4'

const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Heya !</h1>
          <p>Hello Siso, Welcome Back !</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard'/>
          <BsSearch className="icon"/>
        </div>

        <div className="adminDiv flex">
          <IoChatbubbleEllipsesOutline className="icon"/>
          <IoMdNotificationsOutline className="icon"/>
          <div className="adminImage">
            <img src={img} alt="Admin" />
          </div>
        </div>

      </div>

      <div className="cardSection flex">

        <div className="rightCard flex">
          <h1>Earth without "art"...</h1>
          <p>...is just "Eh"</p>

          <div className="buttons flex">
                <button className='btn'>Explore More</button>
                <button className='btn transparent'>Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">

            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>3 Orders</small>
                </span>
                <span>
                  This Month <br /> <small>79 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Go To My Orders <BsArrowRightShort className='icon'/>
              </span>

            </div>

            <div className="imgDiv">
              <img src={img1} alt="SomethingElse" />
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
        </div>

      </div>
    </div>
  )
}

export default Top;