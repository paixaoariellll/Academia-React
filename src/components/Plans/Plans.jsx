import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import { motion } from "framer-motion";

const Plans = () => {
  const transition = { type: "spring", duration: 3 };

  return (
    <div className="plans-container">
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -120 }}
        whileInView={{ left: "30rem" }}
        transition={{ ...transition, duration: 5 }}
        className="blur plans-blur-1"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 120 }}
        whileInView={{ right: "30rem" }}
        transition={{ ...transition, duration: 5 }}
        className="blur plans-blur-2"
      ></motion.div>

      <div className="programs-header">
        <span className="stroke-text">Read to Start</span>
        <span>Your Journey</span>
        <span className="stroke-text">Now With Us!</span>
      </div>

      {/* Plans cards */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>$ {plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="white Tick" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits ✅ </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
