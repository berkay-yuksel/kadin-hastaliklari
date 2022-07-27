import { getFeaturedOnePost, getFeaturedPostDetails } from "../../services";
import Link from "next/link";
import styles from "../../styles/PostPage.module.css";
import Moment from "react-moment";
import "moment/locale/tr";
import React from "react";
import Head from "next/head";

const PostPage = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;
    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }
      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }
      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }
    switch (type) {
      case "heading-three":
        return (
          <h3 key={index}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <div className={styles.image_container}>
            <img
              key={index}
              alt={obj.title}
              height={obj.height}
              width={obj.width}
              src={obj.src}
            />
          </div>
        );
      default:
        return modifiedText;
    }
  };
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
            href={`http://twitter.com/share?text=Mutlaka okuyun... &url=https://kadınhastalıkları.com/${post.slug}`}>
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
          post.featuredBannerImage
            ? post.featuredBannerImage
            : post.featuredImage.url
        }
      />
      <div className={styles.post_info_container}>
        <div className={styles.post_info_top}>
          {post.title.length > 70 ? " " : <br />}
          <Moment format="DD MMMM YYYY">{post.createdAt}</Moment>
          <span>{post.author.name}</span>
          <h1 className={styles.post_header}>{post.title}</h1>
        </div>
        <div>
          Etiketler :{" "}
          {post.tags.map((tag, index) => (
            <Link key={index} href={`etiketler/${tag.slug}`}>
              <span>
                {index ? ", " : ""}
                {tag.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.post_content}>
        <h2>The Digital Revolution and Its Role in the Climate Revolution</h2>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) =>
            getContentFragment(itemindex, item.text, item)
          );
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default PostPage;

export async function getStaticProps({ params }) {
  const data = await getFeaturedPostDetails(params.slug);
  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getFeaturedOnePost();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
