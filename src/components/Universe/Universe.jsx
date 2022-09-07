import React from "react";
import { Curtain } from "../Curtain/Curtain";

import HomePlanet from "../../assets/planet-earth-svgrepo-com.svg";
import WorkPlanet from "../../assets/jupiter-svgrepo-com.svg";
import ContactPlanet from "../../assets/neptune-svgrepo-com.svg";
import Back from "../../assets/space-ship-svgrepo-com.svg";
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
        </button>
        <img src={HomePlanet} alt="" />
        <img src={WorkPlanet} alt="" />
        <img src={ContactPlanet} alt="" />
      </div>
    </div>
    //    </Curtain>
  );
};

export { Universe };
