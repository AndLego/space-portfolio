import React from "react";
import { Curtain } from "../Curtain/Curtain";
import styles from "./Start.module.css";

const Start = ({ setHide, hide }) => {
  const handleClick = () => {
    setHide(!hide);
  };

  return (
    <Curtain>
      <div className={styles.home}>
        <button onClick={handleClick}>Explore</button>
      </div>
    </Curtain>
  );
};

export { Start };
