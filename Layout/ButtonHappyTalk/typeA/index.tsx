import React from "react";

import "./style.css";
import Icon from "./Icon";

interface IButtonHappyTalk {
  style?: React.CSSProperties;
  onOpen: () => void;
}

const ButtonHappyTalkA: React.FC<IButtonHappyTalk> = ({ style, onOpen }) => {
  return (
    <button onClick={onOpen} className="HappyTalkA__button" style={style}>
      <div className="HappyTalkA__button--icon">
        <Icon />
      </div>
      <span className="HappyTalkA__button--title">1:1 채팅상담</span>
    </button>
  );
};

export default ButtonHappyTalkA;
