import Link from 'next/link'
import styles from "../styles/PostCard.module.css"
import Moment from 'react-moment'
import 'moment/locale/tr';


const PostCard = ({post}) => {

  return (
    <>
<Link href={`${post.node.slug}`}>
<div className={styles.post_card}>
 <div className={styles.post_card_image}>
 <img src={post.node.featuredImage.url} width="527px" height="275px"/>
 </div>
<div className={styles.post_card_container}>
<div className={styles.post_card_top}><Moment  format="DD MMMM">{post.node.createdAt}</Moment><span>{post.node.author.name}</span></div>
<h1>{post.node.title}</h1>
<div className={styles.post_card_tags}>Etiketler:{post.node.tags.map((tag,index)=>(
   <Link key={index} href={`${tag.slug}`}><span className={styles.post_card_tag}>{tag.name}</span></Link>
  ))} </div>

</div>
  
</div>
  </Link>

    </>
  )
}

export default PostCard

