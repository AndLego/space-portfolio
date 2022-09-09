import React from "react";
import { Curtain } from "../Curtain/Curtain";

import Earth from "../../assets/planet-earth-svgrepo-com.svg";
import Jupiter from "../../assets/jupiter-svgrepo-com.svg";
import ContactPlanet from "../../assets/neptune-svgrepo-com.svg";
import Back from "../../assets/rocket.svg"
import DeathStar from "../../assets/space-station-svgrepo-com.svg"
import Fighter from "../../assets/space-dark-force.svg"
import Moon from  "../../assets/moon-svgrepo-com.svg"

import styles from "./Universe.module.css";

const Universe = ({ setHide, hide }) => {
  const handleClick = () => {
    setHide(!hide);
  };

  return (
    //    <Curtain>
    <div className={styles.Universe}>
      <div>
        <button onClick={handleClick}>
          <img src={Back} alt="" />
          <span>Go Back</span>
        </button>
        <div className={styles.Planets}>
          <div>
            <img className={styles.Planet} src={Earth} alt="About Me" />
            <img className={styles.DeathStar} src={DeathStar} alt="" />
            <img className={styles.Fighter} src={Fighter} alt="" />
            <img className={styles.Moon} src={Moon}></img>
            <span>About Me</span>
          </div>
          <div>
            <img className={styles.Planet} src={Jupiter} alt="My Work" />
            <img className={styles.DeathStar} src={DeathStar} alt="" />
            <img className={styles.Fighter} src={Fighter} alt="" />
            <img className={styles.Moon} src={Moon}></img>
            <span>My Work</span>
          </div>
          <div>
            <img
              className={styles.Planet}
              src={ContactPlanet}
              alt="Contact Me"
            />
            <img className={styles.DeathStar} src={DeathStar} alt="" />
            <img className={styles.Fighter} src={Fighter} alt="" />
            <img className={styles.Moon} src={Moon}></img>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </div>
    //    </Curtain>
  );
};

export { Universe };
