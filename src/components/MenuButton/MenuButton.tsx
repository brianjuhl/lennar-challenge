import React, { MutableRefObject, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './MenuButton.module.scss';

interface MenuButtonProps {
  open: boolean;
  onClick: () => void;
}

export const MenuButton = ({ open, onClick }: MenuButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <button
      ref={ref}
      className={`${styles['menu-button']} ${
        open ? styles.open : styles.closed
      }`}
      onClick={() => {
        ref?.current?.blur();
        onClick();
      }}
    >
      <motion.svg
        animate={open ? 'open' : 'closed'}
        width={open ? '16' : '18'}
        height="16"
        viewBox={open ? '0 0 20 20' : '0 0 22 20'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          fill="transparent"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </motion.svg>
    </button>
  );
};
