import React from "react";
import "../styles.css";

type BallProps = {
  letter: string;
};

const Ball: React.FC<BallProps> = ({ letter }) => {
  return <div className="ball">{letter}</div>;
};

export default Ball;