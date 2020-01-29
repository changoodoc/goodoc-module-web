import React from 'react';

import './style.css';
import Icon from './Icon';

interface IButtonHappyTalk {
  style?: React.CSSProperties;
  onOpen: () => void;
}

const ButtonHappyTalkB: React.FC<IButtonHappyTalk> = ({ style, onOpen }) => {
  return (
    <button onClick={onOpen} className="HappyTalkB__button" style={style}>
      <Icon />
      <span className="HappyTalkB__button--title">1:1 채팅상담</span>
    </button>
  );
};

export default ButtonHappyTalkB;
