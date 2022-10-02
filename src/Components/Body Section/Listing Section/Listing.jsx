import React from "react";
import "./listing.css";

import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import img from "../../../Assets/drawing.jpg";
import img1 from "../../../Assets/drawing2.jpg";
import user from "../../../Assets/user/av.png";
import user1 from "../../../Assets/user/mb.png";
import user2 from "../../../Assets/user/rr.png";
import user3 from "../../../Assets/user/ts.png";
import user4 from "../../../Assets/user/ys.png";
import user5 from "../../../Assets/user/jw.png";
import user6 from "../../../Assets/user/rg.png";
import user7 from "../../../Assets/user/dj.png";

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Whatever" />
          <h3>Lost Within</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img1} alt="Whatever" />
          <h3>Inner Demons</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user} alt="WhateverUser" />
              <img src={user1} alt="WhateverUser" />
              <img src={user2} alt="WhateverUser" />
              <img src={user3} alt="WhateverUser" />
            </div>
            <div className="cardText">
              <span>
                11,339 sold <br />
                <small>
                  17 Sellers <span className="date">
                    7 Days
                  </span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user4} alt="WhateverUser" />
              <img src={user5} alt="WhateverUser" />
              <img src={user6} alt="WhateverUser" />
              <img src={user7} alt="WhateverUser" />
            </div>
            <div className="cardText">
              <span>
                21,339 sold <br />
                <small>
                  21 Sellers <span className="date">
                    31 Days
                  </span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
