import React from "react";
import "./Main.css";
import wall_crack from "../assets/video/wall_crack.mov";
import { GiSoccerBall } from "react-icons/gi";

export const Main = () => {
  return (
    <div className="main-body">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={wall_crack} type="video/mp4" />
      </video>

      <section className="stage">
        <div id="home" className="div">
          <a href="/stadium">
            <p id="home" className="p">
              Stadiums
            </p>
          </a>
        </div>
        <div className="div" id="about">
          <a href="/playerdata">
            <p className="p">Players</p>
          </a>
        </div>
      </section>

      <header>
        <div className="overlay">
          <h1>
            Know Better your favorite Game
            <GiSoccerBall />
          </h1>
        </div>
      </header>
    </div>
  );
};
