import React from "react";
import { Link } from 'react-router-dom'
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
          <h1 className="text-md-left text-sm-center">REFUGEE CODE SCHOOL</h1>
          <h1 className="text-md-left text-sm-center">
            <span>IN </span><span
              ref={el => {
                this.el = el;
              }}
            />
          </h1>
          <div className="buttons-container py-5 text-md-left text-sm-center">
            <div className="py-3">
            <Link to='/apply' className="apply-now-button btn btn-lg btn-outline-danger">APPLY NOW</Link>
            </div>
            <div className="py-3">
            <Link to='/support' id="how-help-button" className="btn btn-outline-danger">HOW CAN I HELP?</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeBannerImage;
