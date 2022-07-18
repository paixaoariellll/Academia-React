import React from "react";
import { Header } from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import { type } from "@testing-library/user-event/dist/type";
import NumberCounter from "number-counter";

const Hero = () => {
  const trasnsition = {
    type: "tween",
    duration: 2.3,
    stiffness: 20,
  };
  const stars = {
    type: "spring",
    duration: 10,
    whileInView: "visible",
    visualViewport: { once: true },
  };
  const mobile = window.innerWidth < 768 ? true : false;

  return (
    <div className="hero" id="home">
      <motion.div
        className="blur hero-blur"
        initial={{ opacity: 0.5, left: mobile ? "178px" : "238px" }}
        animate={{ opacity: 1, left: mobile ? "0px" : "178px" }}
        transition={{ ...stars, duration: 10 }}
        whileInView={{ left: "70rem", top: "15rem" }}
        exit={{ opacity: 0 }}
      ></motion.div>

      <div className="left-h">
        <Header />
        {/* The best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ opacity: 0.5, left: mobile ? "178px" : "238px" }}
            animate={{ x: 15, opacity: 1 }}
            transition={{
              ...trasnsition,
              type: "tween",
              duration: 5,
              damping: 3,
            }}
            whileInView={{ left: "8px" }}
            exit={{ opacity: 0 }}
          ></motion.div>
          <span>The best fitness club in the town!</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={60} delay="5" preFix="+" />
            </span>
            <span>Expert coachs</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={900} delay="5" preFix="+" />
            </span>
            <span>Members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay="5" preFix="+" />
            </span>
            <span>Fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn"> Join Now</button>

        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={trasnsition}
        >
          <img src={Heart} alt="Heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <motion.img
          initial={{ right: "-20rem" }}
          whileInView={{ right: "10rem" }}
          transition={trasnsition}
          src={hero_image}
          alt="hero_image"
          className="hero-image"
        />
        <motion.img
          initial={{ right: "15rem" }}
          whileInView={{ right: "25rem" }}
          transition={trasnsition}
          src={hero_image_back}
          alt="hero_image_back"
          className="hero-image-back"
        />

        {/* Calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={{ ...trasnsition }}
          className="calories"
        >
          <img src={Calories} alt="Calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
