import React from "react"
import "./Reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r"></div>
      <img src={image1} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
      <img src={image4} alt="" />

      <div className="right-r">RIGHT SIDE</div>
    </div>
  )
}
export default Reasons
