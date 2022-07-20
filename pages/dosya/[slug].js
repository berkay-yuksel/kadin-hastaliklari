import { getSeries, getSerieDetails } from "../../services";

import Link from "next/link";
import styles from "../../styles/SeriPage.module.css";
import Moment from "react-moment";
import "moment/locale/tr";
import React from "react";
import Head from "next/head";

const PostPage = ({ post }) => {


  
  return (
    <div className={styles.post_page_container}>
      <Head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@nytimesbits" />
        <meta name="twitter:creator" content="@nickbilton" />
        <meta
          property="og:url"
          content={`https://kadınhastalıkları.com/${post.slug}`}
        />
        <meta property="og:title" content="A Twitter for My Sister" />
        <meta
          property="og:description"
          content="In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling."
        />
        <meta
          property="og:image"
          content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg"
        />
      </Head>
      <div className={styles.prev_button}>
        <span>
          <Link href="/">
            <img src=".././previous.png" width="30px" height="" />
          </Link>
        </span>
        <span>
          <Link
            href={`http://twitter.com/share?text=Mutlaka okuyun... &url=https://kadınhastalıkları.com/${post.slug}`}
          >
            <img src=".././twitter.png" width="30px" height="" />
          </Link>
        </span>
        <span>
          <Link
            href={`https://wa.me/?text=https://kadınhastalıkları.com/${post.slug}`}
          >
            <img src=".././share.png" width="30px" height="" />
          </Link>
        </span>
      </div>

      <img
        className={styles.banner_image}
        src={
        post.featuredImage.url}
      />

      <div className={styles.post_info_container}>
        <div className={styles.post_info_top}>
          {post.title.length > 70 ? " " : <br />}
          <Moment format="DD MMMM YYYY">{post.createdAt}</Moment>
          <span>{post.author.name}</span>
          <h1 className={styles.post_header}>{post.title}</h1>
        </div>
      </div>
    

      <div className={styles.post_content}>
   




    

    {post.episodes.map((item,i)=>(
      <div key={i}
      dangerouslySetInnerHTML={{__html: `${item.content.html}`}}
    />
    ))}
       
      </div>
    </div>
  );
};

export default PostPage;

export async function getStaticProps({ params }) {
  const data = await getSerieDetails(params.slug);
  return {
    props: { post: data },
  };
}

//önemli nextjs kısmı

export async function getStaticPaths() {
  const posts = await getSeries();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
