import { PostCard } from "../components/";
import styles from "../styles/Home.module.css";
const PostCards = ({ posts }) => {
  return (
    <div className={styles.recent_posts_section_bigger_container}>
      <h2>Güncel Yazılar</h2>
      <div className={styles.recent_posts_section_container}>
        {posts.map((post, index) => (
          <div key={index} className={styles.post_item}>
            <PostCard post={post} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCards;
