import React from 'react';
import './activity.css';

import { BsArrowRightShort } from 'react-icons/bs'

import user from '../../../Assets/user/mb.png'
import user1 from '../../../Assets/user/av.png'
import user2 from '../../../Assets/user/jw.png'
import user3 from '../../../Assets/user/rr.png'

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>
      
      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user} alt="WhateverImage" />
          <div className="customerDetails">
            <span className="name">Madison Beer</span>
            <small>Ordered "Lost Within"</small>
          </div>
          <div className="duration">
            7 minutes ago
          </div>
        </div>
        
        <div className="singleCustomer flex">
          <img src={user1} alt="WhateverImage" />
          <div className="customerDetails">
            <span className="name">Alissa Violet</span>
            <small>Ordered "Lost Within"</small>
          </div>
          <div className="duration">
            9 minutes ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="WhateverImage" />
          <div className="customerDetails">
            <span className="name">Jeniffer Lawrence</span>
            <small>Ordered "Inner Demons"</small>
          </div>
          <div className="duration">
            17 minutes ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="WhateverImage" />
          <div className="customerDetails">
            <span className="name">Ryan Reynolds</span>
            <small>Ordered "Lost Within"</small>
          </div>
          <div className="duration">
            21 minutes ago
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Activity;