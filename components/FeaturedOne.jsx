import { PostCard } from "./PostCard";
import React from "react";
import Link from "next/link";
import styles from "../styles/FeaturedOne.module.css";

const FeaturedOne = ({ featuredOnePost }) => {
  return (
    <div className={styles.featured_section_container}>
      <div className={styles.featured_container}>
        <div className={styles.featured_container_left}>
          <h4> {featuredOnePost[0].node.categories[0].name.toUpperCase()}</h4>
          <h1> {featuredOnePost[0].node.title}</h1>
          <h3> {featuredOnePost[0].node.excerpt} </h3>
          <h5>
            <Link href={`/ozel/${featuredOnePost[0].node.slug}`}>
              Devamını Oku
            </Link>
          </h5>
        </div>
        <div className={styles.featured_container_right}>
          <img src={featuredOnePost[0].node.featuredImage.url} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedOne;
