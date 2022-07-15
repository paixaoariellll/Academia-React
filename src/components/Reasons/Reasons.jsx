import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>Some reasons</span>

        <div>
          <span className="stroke-text">Why </span>
          <span>Choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>Over 140+ Expert Coachs</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Train Smarter and Faster than before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Reliable Partners</span>
          </div>
        </div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          Our Partners
        </span>

        <div className="partners">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Reasons;
