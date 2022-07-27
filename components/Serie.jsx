import styles from "../styles/Serie.module.css";
import Link from "next/link";

const Serie = ({ series }) => {
  return (
    <div className={styles.serie_section}>
      <h1>
        <Link href={`/dosya/${series[0].node.slug}`}>
          {series[0].node.title}
        </Link>
      </h1>
      <div className={styles.episode_container}>
        {series[0].node.episodes.map((episode, index) => (
          <div key={index} className={styles.episode_container_item}>
            <div>
              <img src={episode.image.url} />
              {}
            </div>
            <div className={styles.episode_container_info}>
              <h5>
                Bölüm {episode.number}
                {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}-{"\u00A0"}
                {series[0].node.episodes.length}
              </h5>
              <p>{episode.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Serie;
