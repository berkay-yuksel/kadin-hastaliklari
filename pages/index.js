import Head from "next/head";
import { useState } from "react";
import { PostCard, FeaturedOne, Serie, Header } from "../components/";
import { getPosts,getSeries } from "../services";
import styles from "../styles/Home.module.css";

export default function Home({ posts ,series}) {
 
  return (
    <div className={styles.home_container}>
      <Head>
        <title>Kadın Hastalıkları</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={styles.recent_posts_section_container}>
        {posts.map((post, index) =>
          post.node.isFeaturedOne ? (
            []
          ) : (
            <div  key={index} className={styles.post_item}>
              <PostCard post={post} key={index} />
            </div>
          )
        )}
      </div>
<Serie series={series}/>
     
<div>

{posts.map((post, index) =>
  post.node.isFeaturedOne ? <FeaturedOne key={index} post={post} /> : []
)}
</div>


    </div>
  );
}

//fetching data with nextx js
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const series = (await getSeries()) || [];
  return {
    props: { posts:posts,
    series:series },
   
  };
}

