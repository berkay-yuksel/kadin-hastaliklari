import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div  className={styles.footer_section_container}>
      <div className={styles.footer_top_container}>
        <div>
          <img src="./logo.png" height="60px" />
          <h3>The things that move us.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
            pariatur
          </p>
        </div>
        <div className={styles.footer_top_middle_container}>
          <h5>MORE FROM IRON & AIR</h5>
          <ul>
            <li>Motorcycles</li>
            <li>Automobiles</li>
            <li>Travel & Adventure</li>
            <li>Culture</li>
            <li>Artifacts</li>
            <li>Art & Design</li>

          </ul>
        </div>
        <div className={styles.footer_top_right_container}>
    <div>
    <button>Login</button>
       <br/>
       <button>Become a member</button>

       <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. pariatur
       </p>
    </div>
        </div>
      </div>

     <div className={styles.footer_bottom_container}>
     <div className={styles.footer_bottom_left}>© 2022 Iron & Air. Iron & Air Magazine / An Iron & Air Media company.</div>
      <div  className={styles.footer_bottom_right}>
        <span>TWITTER    </span>
        <span>FACEBOOK</span>
      </div>

     </div>
    </div>
  );
};

export default Footer;
