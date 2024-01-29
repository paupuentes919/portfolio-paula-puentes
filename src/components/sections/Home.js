import React from "react";
import homeImg from "../../assets/img/paulapuentesfotosinfondo.png";
import { useState, useEffect } from "react";
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
              <stop offset="0%" stop-color="#000" />
              <stop offset="100%" stop-color="#fff" />
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
            stroke-linecap="round"
            stroke-width="12"
            stroke-dasharray="175.93 351.86"
          >
            <g>
              <rect
                fill="hsl(193,90%,50%)"
                width="128"
                height="64"
                clip-path="url(#smiley-eyes)"
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
                clip-path="url(#smiley-eyes)"
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
            <div className="flex justify-center">
              <div className="text-center animation-text">
                <div>Hi there!</div>
                <div>
                  Im Paula <span className="text-last-name">Puentes</span>
                </div>
                <div>
                  Im a Full Stack
                  <span className="text-job-role"> Web Developer</span>
                </div>
              </div>
              <div>
                <img src={homeImg} className="home-img" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
