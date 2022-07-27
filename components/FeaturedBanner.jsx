import styles from "../styles/FeaturedBanner.module.css";
import Link from "next/link";

const FeaturedBanner = ({ featuredBannerPost }) => {
  return (
    <div className={styles.featured_banner_bigger_section}>
      <div
        className={styles.featured_banner_section}
        style={{
          backgroundImage: `url("${featuredBannerPost[0].node.featuredImage.url}")`,
        }}
      >
        <div className={styles.block}></div>
        <div className={styles.block2}>
          <img src="down.png" />
        </div>
        <div className={styles.featured_banner_container}>
          <h1>{featuredBannerPost[0].node.excerpt}</h1>
          <Link href={`/kapak/${featuredBannerPost[0].node.slug}`}>
            <p>Devamını Oku</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;
