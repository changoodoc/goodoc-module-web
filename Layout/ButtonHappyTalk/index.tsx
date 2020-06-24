import React, { useEffect, useRef } from 'react';

import { BUTTON_URL } from '../../config';
import ButtonHappyTalkA from './typeA';
import ButtonHappyTalkB from './typeB';

interface IButtonHappyTalk {
  style?: React.CSSProperties;
  windowSize?: {
    width: number;
    height: number;
  };
  buttonType?: 'A' | 'B';
}

const ButtonHappyTalk: React.FC<IButtonHappyTalk> = ({ style, buttonType }) => {
  const innerWidth = useRef(0);

  useEffect(() => {
    innerWidth.current = window.innerWidth / 2;
  }, []);

  const openHappyTalk = () => {
    window.open(
      BUTTON_URL.happyTalk,
      '',
      `width=500, height=800, left=${innerWidth.current}`
    );
  };

  return (
    <>
      {buttonType === 'A' ? (
        <ButtonHappyTalkA onOpen={openHappyTalk} />
      ) : (
        <ButtonHappyTalkB onOpen={openHappyTalk} />
      )}
    </>
  );
};

export default ButtonHappyTalk;
