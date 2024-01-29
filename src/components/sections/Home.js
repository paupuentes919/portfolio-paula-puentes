import React from "react";
import homeImg from "../../assets/img/paulapuentesfotosinfondo.png";
import portfolio from "../../assets/pdf/CVPaulaPuentes.pdf";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../../css/components/Home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1700);
  }, []);

  return (
    <>
      {loading ? (
        <div id="background-home-loading">
          <svg
            role="img"
            aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all parts rotate and merge into 3:00"
            className="smiley btn-loading"
            viewBox="0 0 128 128"
            width="128px"
            height="128px"
          >
            <defs>
              <clipPath id="smiley-eyes">
                <circle
                  className="smiley__eye1"
                  cx="64"
                  cy="64"
                  r="8"
                  transform="rotate(-40,64,64) translate(0,-56)"
                />
                <circle
                  className="smiley__eye2"
                  cx="64"
                  cy="64"
                  r="8"
                  transform="rotate(40,64,64) translate(0,-56)"
                />
              </clipPath>
              <linearGradient id="smiley-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#000" />
                <stop offset="100%" stopColor="#fff" />
              </linearGradient>
              <mask id="smiley-mask">
                <rect
                  x="0"
                  y="0"
                  width="128"
                  height="128"
                  fill="url(#smiley-grad)"
                />
              </mask>
            </defs>
            <g
              strokeLinecap="round"
              strokeWidth="12"
              strokeDasharray="175.93 351.86"
            >
              <g>
                <rect
                  fill="hsl(193,90%,50%)"
                  width="128"
                  height="64"
                  clipPath="url(#smiley-eyes)"
                />
                <g fill="none" stroke="hsl(193,90%,50%)">
                  <circle
                    className="smiley__mouth1"
                    cx="64"
                    cy="64"
                    r="56"
                    transform="rotate(180,64,64)"
                  />
                  <circle
                    className="smiley__mouth2"
                    cx="64"
                    cy="64"
                    r="56"
                    transform="rotate(0,64,64)"
                  />
                </g>
              </g>
              <g mask="url(#smiley-mask)">
                <rect
                  fill="hsl(223,90%,50%)"
                  width="128"
                  height="64"
                  clipPath="url(#smiley-eyes)"
                />
                <g fill="none" stroke="hsl(223,90%,50%)">
                  <circle
                    className="smiley__mouth1"
                    cx="64"
                    cy="64"
                    r="56"
                    transform="rotate(180,64,64)"
                  />
                  <circle
                    className="smiley__mouth2"
                    cx="64"
                    cy="64"
                    r="56"
                    transform="rotate(0,64,64)"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      ) : (
        <div id="background-home">
          <div className="content-container mt-16">
            <div className="display justify-center">
              <div className="text-center animation-text">
                <div>Hi there!</div>
                <div>
                  Im Paula <span className="text-last-name">Puentes</span>
                </div>
                <div>
                  Im a Full Stack
                  <span className="text-job-role"> Web Developer</span>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/pau919/"
                    className="-m-1.5 p-1.5 mr-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faSquareFacebook} />
                    <span className="sr-only">pau919 facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/pawpuentes/"
                    className="-m-1.5 p-1.5 mr-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">pau919 instagram</span>
                    <FontAwesomeIcon icon={faSquareInstagram} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/paula-puentes-71487116b/"
                    className="-m-1.5 p-1.5 mr-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">pau919 LinkedIn</span>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    href="https://github.com/paupuentes919/"
                    className="-m-1.5 p-1.5 mr-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">pau919 github</span>
                    <FontAwesomeIcon icon={faSquareGithub} />
                  </a>
                </div>
                <a href={portfolio} download>
                  <span className="btn-portfolio">Download Portfolio</span>
                </a>
              </div>
              <div className="animation-img">
                <img src={homeImg} className="home-img" alt="profile" />
              </div>
            </div>
            <div className="section-home-about-me mt-16">
              <span>About me</span>
            </div>
            <div className="display justify-center mt-16 mb-16">
              <div className="text-about-me animation-text">
                As an industrious and proactive industrial engineer, I am
                dedicated to continual skill refinement and professional
                advancement. Known for my reliability, efficiency, and ability
                to thrive both independently and within teams, I prioritize open
                communication and embrace ongoing learning opportunities
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
