import React from "react";

const DisplaySection = ({ triggerPreview }) => {
  const scrollToSection = () => {
    const element = document.querySelector(".jumbotron-section");
    window.scrollTo({
      top: element?.getBoundingClientRect()?.top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="display-section wrapper">
      <h2 className="title">New </h2>
      <p className="text">Brillant.</p>
      <span className="description">
        A display that's up to 2x brighter in the sun.
      </span>
      <button className="button" onClick={() => triggerPreview()}>
        Try me
      </button>
      <button className="back-button" onClick={() => scrollToSection()}>
        TOP
      </button>
    </div>
  );
};

export default DisplaySection;
