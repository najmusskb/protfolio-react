import React from "react";
import { img } from "../../assets";
import styles from "./home.module.css";
import './home.css'

import { t } from "i18next";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className={`home ${styles.home}`}>
      <img className="img" src={img.homeBg} alt="home" />

      <h1 >
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(2500).deleteAll().start();
          }}
          options={{
            strings: ["Full Stack Developer", "UI Designer"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>


    </div>
  );
};

export default Home;
