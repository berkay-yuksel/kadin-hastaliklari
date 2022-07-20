import Link from "next/link";
import styles from "../styles/Header.module.css";
import React, { useState } from "react";

const Header = () => {
  const [fistClick, setFirstClick] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
    setFirstClick(true);
  };

  return (
    <div className={styles.header_container}>
      <div>
        <div
          className={`${
            navbarOpen
              ? styles.showMenu
              : fistClick
              ? styles.hideMenu
              : styles.defaultMenu
          }`}
        >
          <span>asda</span>
          <div className={styles.navButtonClosed} onClick={handleToggle}>
            {" "}
            <img src="previous.png" height="25px" />
          </div>
        </div>
      </div>

      <div className={styles.navBar}>
        <div><button>ABONE OL</button></div>

        <Link href="/">
          <div>
            <img src="./logo.png" height="60px" width="205px" />
          </div>
        </Link>
        <div className={styles.navButtonOpened} onClick={handleToggle}>
          MENU
        </div>
      </div>
    </div>
  );
};

export default Header;
