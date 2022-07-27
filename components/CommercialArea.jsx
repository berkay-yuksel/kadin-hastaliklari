import styles from "../styles/CommercialArea.module.css";

const CommercialArea = () => {
  return (
    <div>
      <div className={styles.commercial_area_container}>
        <h3>ÜYE OLUN</h3>
        <h1>
          Üyeliğimize kaydolun ve sağlıklı yaşamın ipuçlarını ve püf noktalarını
          içeren mailler alın.
        </h1>
        <button>Şimdi kayıt ol!</button>
      </div>
    </div>
  );
};

export default CommercialArea;
