import Link from "next/link";
import styles from "../styles/Header.module.css";
import React, { useState } from "react";

const Header = ({ categories, featuredOne }) => {
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
          <div className={styles.header_container_inside}>
            <div className={styles.header_container_categories}>
              <h2>POPÜLER KATEGORİLER</h2>
              <ul>
                {categories.map((item, index) => (
                  <li key={index} >{item.name}</li>
                ))}
              </ul>
            </div>

            <div className={styles.right_side}>
              <div>
                <h2>Kadın Hastalıkları Hakkında</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut. pariatur
                </p>
              </div>
              <div>
                <button>Üye ol</button>
                <p className={styles.social}>
                  <span>TWITTER </span>
                  <span>FACEBOOK</span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.navButtonClosed} onClick={handleToggle}>
            <img src="previous.png" height="25px" />
          </div>
        </div>
      </div>
      <div className={styles.navBar}>
        <div className={styles.sub_button}>
          <button>ABONE OL</button>
        </div>
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
