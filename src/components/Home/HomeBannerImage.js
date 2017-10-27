import React from "react";
import Typed from "typed.js";

class HomeBannerImage extends React.Component {
  componentDidMount() {
    //	Thanks to https://jsfiddle.net/mattboldt/ovat9jmp/
    const strings = ["COPENHAGEN", "MALMÖ"];
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      loopCount: Infinity
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div className="home-banner-image container-fluid text-center img-fluid py-5">
        <div className="py-5">
          <h1>REFUGEE CODE SCHOOL</h1>
          <h1>
            <span>IN </span><span
              ref={el => {
                this.el = el;
              }}
            />
          </h1>
          <div className="buttons-container py-5">
            <div className="py-3">
            <a className="apply-now-button btn btn-lg btn-outline-danger">APPLY NOW</a>
            </div>
            <div className="py-3">
            <a id="how-help-button" className="btn btn-outline-danger">HOW CAN I HELP?</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeBannerImage;
