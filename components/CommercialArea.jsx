import styles from "../styles/CommercialArea.module.css";

const CommercialArea = () => {
  return (
    <div>
      <div className={styles.commercial_area_container}>
        <h3>BECOME OUR MEMBER</h3>
        <h1>
          Sign up for our membership and receive mails that includes tips and
          tricks of healty life.
        </h1>
        <button>Sign Up Now!</button>
      </div>
    </div>
  );
};

export default CommercialArea;
