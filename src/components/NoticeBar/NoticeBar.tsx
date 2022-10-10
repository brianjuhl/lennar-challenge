import React from 'react';
import styles from './NoticeBar.module.scss';

interface NoticeBarProps {
  notice: string;
  callToAction: string;
  onClick: () => void;
}

export const NoticeBar = ({
  notice,
  callToAction,
  onClick,
}: NoticeBarProps) => {
  return (
    <div className={styles['notice-bar']} onClick={onClick}>
      <div className={styles['notice']}>{notice}</div>
      <div className={styles['call-to-action']}>{callToAction}</div>
      <div className={styles.arrow}>
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.292894 9.70711C-0.0976307 9.31658 -0.0976307 8.68342 0.292894 8.29289L3.58579 5L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292894C0.683417 -0.0976312 1.31658 -0.0976312 1.70711 0.292894L5.70711 4.29289C6.09763 4.68342 6.09763 5.31658 5.70711 5.70711L1.70711 9.70711C1.31658 10.0976 0.683418 10.0976 0.292894 9.70711Z"
            fill="#6B7280"
          />
        </svg>
      </div>
    </div>
  );
};
