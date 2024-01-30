import React from "react";
import "../../css/components/About.css";
import aboutmephoto from "../../assets/img/paulapng2.png";
import mephoto from "../../assets/img/mepng.png";
import paulafacultad from "../../assets/img/paulafacultad.png";
function About() {
  return (
    <div>
      <div className="about-me-container">
        <div className="about-me-text">About</div>
        <img src={mephoto} className="img-me" />
      </div>
      <div className="flex justify-center">
        <img src={aboutmephoto} className="img-about-me" />
        <div className="full-stack-text">
          Im a Full Stack Web Developer from Buenos Aires, Argentina
        </div>
        <div className="flex">
        <div className="description-about-me">
          When I'm not coding, I'm someone who finds immense fulfillment in
          expressing my creativity through drawing and painting. Spending
          quality time with my family, pets and friends is invaluable to me. I also
          prioritize my physical well-being and enjoy the energizing atmosphere
          of the gym.
        </div>
        <img src={paulafacultad} className="img-facultad"/>
        </div>
      </div>
    </div>
  );
}

export default About;
