import React, { useState, useEffect, useCallback } from 'react';
import styles from './NavBar.module.scss';
import { motion } from 'framer-motion';
import { NavLink } from '../NavLink/NavLink';
import { Button } from '../Button/Button';
import { MenuButton } from '../MenuButton/MenuButton';

interface NavBarProps {
  items: { label: string; href: string }[];
  onFreeTrialClick: () => void;
}

export const NavBar = ({ items, onFreeTrialClick }: NavBarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    /* Close the menu if it's open and screen resized beyond mobile*/
    function handleResize() {
      if (window.innerWidth > 768 && menuOpen) {
        toggleMenu();
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen, toggleMenu]);

  const renderNavItems = (kind: 'primary' | 'secondary' | 'tertiary') => {
    return items.map((item, index) => (
      <NavLink key={index} kind={kind} href={item.href}>
        {item.label}
      </NavLink>
    ));
  };

  return (
    <div className={styles.navbar}>
      <svg
        className={styles.logo}
        width="33"
        height="30"
        viewBox="0 0 33 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9844 27.4376C14.179 26.9367 14.2717 26.4021 14.2573 25.865C14.2869 24.3764 14.6848 22.9184 15.4153 21.621C16.144 20.3258 17.1831 19.2321 18.4393 18.438C18.9044 18.1885 19.3141 17.8473 19.6435 17.4349C19.9729 17.0225 20.2153 16.5476 20.3559 16.0389C20.4965 15.5301 20.5324 14.9982 20.4615 14.4751C20.3906 13.9521 20.2143 13.4489 19.9433 12.996C19.5813 12.391 19.0603 11.895 18.4393 11.565C18.0833 11.318 17.7413 11.052 17.4153 10.767L16.5983 9.967C15.1012 8.3932 14.2617 6.30708 14.2513 4.135C14.2667 3.59777 14.1744 3.06288 13.9799 2.56188C13.7853 2.06089 13.4923 1.60395 13.1183 1.218C12.7459 0.832488 12.2997 0.52595 11.8062 0.316684C11.3128 0.107418 10.7823 -0.000286365 10.2463 5.71818e-07C9.71059 0.000756001 9.18051 0.108938 8.68738 0.318146C8.19424 0.527354 7.74808 0.833339 7.37527 1.218C7.00189 1.60462 6.70937 2.06183 6.51483 2.56287C6.32029 3.06391 6.22763 3.59872 6.24227 4.136C6.251 4.83344 6.4431 5.5163 6.79927 6.116C7.15421 6.71469 7.66096 7.20902 8.26827 7.549C10.7273 9.105 12.4383 12.08 12.4383 15.006C12.4322 17.1592 11.6087 19.2298 10.1343 20.799L8.27427 22.451C7.66727 22.79 7.16027 23.284 6.80427 23.884C6.44727 24.483 6.25627 25.167 6.24727 25.865C6.23197 26.4022 6.32434 26.9371 6.51892 27.438C6.7135 27.939 7.00637 28.396 7.38027 28.782C7.7527 29.1674 8.19894 29.4739 8.69237 29.6832C9.18579 29.8924 9.7163 30.0002 10.2523 30C10.7881 29.9994 11.3184 29.8913 11.8117 29.682C12.305 29.4728 12.7513 29.1668 13.1243 28.782C13.4975 28.3955 13.7899 27.9384 13.9844 27.4376Z"
          fill="#6366F1"
        />
        <path
          d="M19.4163 6.36C18.9753 5.698 18.7403 4.919 18.7403 4.123C18.7409 3.05673 19.1633 2.034 19.9153 1.278C20.5691 0.62024 21.4314 0.210504 22.3543 0.119089C23.2772 0.0276751 24.2031 0.260281 24.9733 0.777001C25.6329 1.2199 26.1466 1.84836 26.4493 2.583C26.752 3.31848 26.831 4.12692 26.6765 4.9071C26.5219 5.68728 26.1406 6.40452 25.5803 6.969C25.0217 7.53193 24.308 7.91563 23.5304 8.07112C22.7527 8.22661 21.9464 8.14685 21.2143 7.842C20.4815 7.53685 19.8557 7.02107 19.4163 6.36Z"
          fill="#6366F1"
        />
        <path
          d="M20.5213 22.518C21.1803 22.076 21.9553 21.84 22.7473 21.84V21.838C23.2737 21.8386 23.7949 21.9432 24.2809 22.1457C24.7669 22.3482 25.2081 22.6446 25.5793 23.018C26.2352 23.6779 26.6432 24.544 26.7343 25.47C26.8254 26.3959 26.594 27.3249 26.0793 28.1C25.6399 28.762 25.0137 29.2785 24.2803 29.584C23.5482 29.8888 22.7418 29.9686 21.9642 29.8131C21.1865 29.6576 20.4729 29.2739 19.9143 28.711C19.3538 28.1464 18.9723 27.429 18.8178 26.6486C18.6632 25.8683 18.7423 25.0596 19.0453 24.324C19.348 23.5894 19.8616 22.9609 20.5213 22.518Z"
          fill="#6366F1"
        />
        <path
          d="M32.3243 12.758C32.7641 13.4198 32.9991 14.1974 32.9993 14.9931C32.9986 16.0597 32.5762 17.0827 31.8243 17.839C31.453 18.2122 31.0118 18.5086 30.5258 18.7111C30.0398 18.9136 29.5187 19.0182 28.9923 19.019C28.1994 19.019 27.4245 18.783 26.7663 18.341C26.1066 17.8981 25.593 17.2696 25.2903 16.535C24.9873 15.7994 24.9082 14.9907 25.0628 14.2104C25.2173 13.43 25.5988 12.7126 26.1593 12.148C26.7179 11.5849 27.4318 11.2011 28.2096 11.0456C28.9875 10.8901 29.794 10.9699 30.5263 11.275C31.2592 11.5804 31.885 12.0966 32.3243 12.758Z"
          fill="#6366F1"
        />
        <path
          d="M1.78026 11.647C2.43926 11.205 3.21326 10.969 4.00626 10.969C4.53261 10.9701 5.05357 11.075 5.53934 11.2776C6.02511 11.4803 6.46617 11.7767 6.83726 12.15C7.49287 12.8097 7.90068 13.6754 7.99178 14.601C8.08288 15.5265 7.85169 16.4552 7.33726 17.23C6.89793 17.8914 6.27217 18.4075 5.53926 18.713C4.8069 19.0164 4.00093 19.0953 3.22361 18.9399C2.44629 18.7845 1.73266 18.4017 1.17326 17.84C0.612965 17.2755 0.231653 16.5583 0.0770756 15.7781C-0.0775017 14.9979 0.00152573 14.1895 0.304262 13.454C0.606855 12.719 1.12048 12.0902 1.78026 11.647Z"
          fill="#6366F1"
        />
      </svg>
      <nav className={styles['desktop-nav']}>{renderNavItems('tertiary')}</nav>
      <div className={styles['desktop-actions']}>
        <NavLink kind="tertiary" href="#">
          Log in
        </NavLink>
        <Button kind="secondary" onClick={onFreeTrialClick}>
          Start free trial
        </Button>
      </div>
      <div className={styles['menu-button-container']}>
        <MenuButton open={menuOpen} onClick={toggleMenu} />
      </div>
      <motion.div
        className={styles['mobile-menu']}
        animate={menuOpen ? 'open' : 'closed'}
        variants={{
          closed: {
            clipPath: `circle(0px at 100% 0px)`,
            transition: {
              duration: 0.3,
            },
          },
          open: {
            clipPath: `circle(${392 * 2 + 200}px at 100% 0px)`,
            transition: {
              duration: 0.5,
            },
          },
        }}
      >
        <nav className={styles['mobile-nav']}>
          {renderNavItems('secondary')}
        </nav>
        <div className={styles['mobile-actions']}>
          <Button
            kind="primary"
            onClick={() => {
              toggleMenu();
              onFreeTrialClick();
            }}
          >
            Start free trial
          </Button>
          <div>
            <span>Existing customer?</span>
            <NavLink kind="secondary" href="#">
              Login
            </NavLink>
          </div>
        </div>
      </motion.div>
      <motion.div
        className={styles['back-drop']}
        onClick={toggleMenu}
        animate={menuOpen ? 'open' : 'closed'}
        variants={{
          closed: {
            opacity: 0,
            height: 0,
            transition: {
              duration: 0.3,
            },
          },
          open: {
            opacity: 0.75,
            height: '100vh',
            transition: {
              duration: 0.5,
            },
          },
        }}
      />
    </div>
  );
};
