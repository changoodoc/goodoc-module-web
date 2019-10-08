import React, { useEffect, useRef } from 'react';

import './style.css';
import Icon from './Icon';

interface IButtonHappyTalk {
  href: string;
  style?: React.CSSProperties;
  windowSize?: {
    width: number;
    height: number;
  }
}

const ButtonHappyTalk: React.FC<IButtonHappyTalk> = ({ href, style }) => {
  const innerWidth = useRef(0);

  useEffect(() => {
    innerWidth.current = window.innerWidth / 2;
  }, []);

  const openHappyTalk = () => {
    window.open(
      href,
      "",
      `width=500, height=800, left=${innerWidth.current - 125}`
    );
  }

  return (
    <button onClick={openHappyTalk} className="HappyTalk__button" style={style}>
      <Icon />
      <span className="HappyTalk__button--title">1:1 채팅상담</span>
    </button>
  )
}

export default ButtonHappyTalk;
