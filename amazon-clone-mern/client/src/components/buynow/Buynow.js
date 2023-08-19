import React from "react";
import "./buynow.css";
import { Divider } from "@mui/material";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Right";

const Buynow = () => {
  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>Select all items</p>
          <span className="leftbuyprice">Price</span>
          <Divider/>

          <div className="item_container">
            <img src="./amalogo.png" alt="" />
            <div className="item_details">
                <h3>Smart Watch</h3>
                <p className="unusuall">Uaslly dispatched in 8 days</p>
                <p>Eligible for free shiping</p>
                <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="" />
                <Option/>
            </div>
            <h3 className="item_price">6788</h3>
          </div>
          <Divider/>
          <Subtotal/>
        </div>
        <Right/>
      </div>
    </div>
  );
};

export default Buynow;
