import { getPosts, getPostDetails } from "../services";
import Link from "next/link";
import styles from "../styles/PostPage.module.css";
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
        <meta property="og:title" content="A Twitter" />
        <meta
          property="og:description"
          content={`https://kadınhastalıkları.com/${post.excerpt}`}
        />
        <meta
          property="og:image"
          content={`https://kadınhastalıkları.com/${post.featuredImage.url}`}
        />
      </Head>
      <div className={styles.prev_button}>
        <span>
          <Link href="/">
            <img src="./previous.png" width="30px" height="" />
          </Link>
        </span>
        <span>
          <Link
            href={`http://twitter.com/share?text=Mutlaka okuyun... &url=https://kadınhastalıkları.com/${post.slug}`}
          >
            <img src="./twitter.png" width="30px" height="" />
          </Link>
        </span>
        <span>
          <Link
            href={`https://wa.me/?text=https://kadınhastalıkları.com/${post.slug}`}
          >
            <img src="./share.png" width="30px" height="" />
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
        <h2>Tat vero eos et accusamus et iusto odio dignissimos</h2>
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
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
