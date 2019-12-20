import React, { useEffect, useRef } from "react";

import "./style.scss";
import Icon from "./Icon";
import { BUTTON_URL } from "../../config";

interface IButtonHappyTalk {
  style?: React.CSSProperties;
  windowSize?: {
    width: number;
    height: number;
  };
}

const ButtonHappyTalk: React.FC<IButtonHappyTalk> = ({ style }) => {
  const innerWidth = useRef(0);

  useEffect(() => {
    innerWidth.current = window.innerWidth / 2;
  }, []);

  const openHappyTalk = () => {
    window.open(
      BUTTON_URL.happyTalk,
      "",
      `width=500, height=800, left=${innerWidth.current}`
    );
  };

  return (
    <button onClick={openHappyTalk} className="HappyTalk__button" style={style}>
      <Icon />
      <span className="HappyTalk__button--title">1:1 채팅상담</span>
    </button>
  );
};

export default ButtonHappyTalk;
