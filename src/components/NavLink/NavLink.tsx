import React from 'react';
import styles from './NavLink.module.scss';

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  kind: 'primary' | 'secondary' | 'tertiary';
  children?: React.ReactNode;
}

export const NavLink = ({ kind, children, ...props }: NavLinkProps) => {
  return (
    <a className={`${styles['nav-link']} ${styles[kind]}`} {...props}>
      {children}
    </a>
  );
};
