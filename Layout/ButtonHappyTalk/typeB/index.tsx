import React from 'react';

import './style.scss';
import Icon from './Icon';

interface IButtonHappyTalk {
  style?: React.CSSProperties;
  onOpen: () => void;
}

const ButtonHappyTalkB: React.FC<IButtonHappyTalk> = ({ style, onOpen }) => {
  return (
    <button onClick={onOpen} className="HappyTalk__button" style={style}>
      <Icon />
      <span className="HappyTalk__button--title">1:1 채팅상담</span>
    </button>
  );
};

export default ButtonHappyTalkB;
