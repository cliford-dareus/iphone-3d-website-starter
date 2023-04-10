import React from "react";
import Iphone14 from "../assets/images/iphone-14.jpg";
import Iphone from "../assets/images/iphone-hand.png";

const Jumbotron = () => {
  const scrollToSection = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      top: element?.getBoundingClientRect()?.top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>

      <img src={Iphone14} alt="Iphone 14 pro" className="logo" />
      <p className="text">Big and Bigger.</p>
      <span className="description">
        From $41.62 /mo or $999 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link" onClick={() => scrollToSection()}>
            Learn more
          </a>
        </li>
      </ul>
      <img src={Iphone} className="iphone-img" alt="iphone image" />
    </div>
  );
};

export default Jumbotron;
