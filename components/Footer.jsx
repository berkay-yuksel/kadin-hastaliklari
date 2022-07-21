import styles from "../styles/Footer.module.css";

const Footer = ({categories}) => {

  return (
    <div  className={styles.footer_section_container}>
      <div className={styles.footer_top_container}>
        <div>
          <img src="./logo.png" height="60px" />
          <h3>Serius est quam cogitas.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
            pariatur
          </p>
        </div>
        <div className={styles.footer_top_middle_container}>
          <h5>POPÜLER KATEGORİLER</h5>
          <ul>

            {
              categories.map((category,i)=><li key={i}>{category.name} </li>)
            }
      

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
     <div className={styles.footer_bottom_left}>© 2022 Viya Labs Health / An Viya Labs Media company.</div>
      <div  className={styles.footer_bottom_right}>
        <span>TWITTER    </span>
        <span>FACEBOOK</span>
      </div>

     </div>
    </div>
  );
};

export default Footer;
