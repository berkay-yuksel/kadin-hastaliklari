import { useState,useEffect } from "react"
import { getRecentPosts,getSimilarPosts } from "../services"

const PostWidget = ({categories,slug}) => {
  const [realtedPosts, setRealtedPosts] = useState([])


  useEffect(() => {
    if(slug){
      getSimilarPosts(categories,slug)
      .then((result)=>setRealtedPosts(result))
    }
    else{
      getRecentPosts(categories,slug)
      .then((result)=>setRealtedPosts(result))
    }

  }, [slug])

  
  return (
    <div>
<h3>
{slug? 'Related Posts': 'Recent Posts'}
</h3>
{/* {realtedPosts.map((post)=>(
<div key={post.title}>
<img   key={post.title} src={post.featuredImage.url} width="420px"  />  
</div>
))} */}

    </div>
  )
}

export default PostWidget