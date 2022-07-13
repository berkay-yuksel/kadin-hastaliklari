import { graphql } from "graphql"
import {request, gql} from "graphql-request"

const graphqlAPI=process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async()=>{

    const query=gql`
    query MyQuery {
        postsConnection(orderBy:createdAt_DESC
          last:3 
            ){
          edges {
            node{
              author {
                name
                slug
              }
              isFeaturedOne
              createdAt
              title
              excerpt
              slug
              tags{
                name
              }
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
      
    `


//burada categories de gereksiz olabilir gereksizse sil
    const result= await request(graphqlAPI,query);

    return result.postsConnection.edges;
}
/* 
 
//rECENT pOSTS

export const getRecentPosts = async ()=>{
  const query=gql=`
  query GetPostDetails(){
    posts(orderBy:createdAt_ASC
    last:3
      ){
        title
        featuredImage{
          url
        }
       createdAt
       slug

      }
  }
  `
  const result= await request(graphqlAPI,query);

  return result.posts;
}


//getSimilar posts

const getSimilarPosts = async ()=>{
  const query=gql`
  query GetPostDetails($slug:String!, $categories:[String!]){
    posts(
      where:{
        slug_not: $slug, AND: {categories_some:{slug_in: $categories}}
        last:3
    )
    {
      title
      featuredImage{
        url
      }
      createdAt
      slug
    }
  }
  
  `

  const result= await request(graphqlAPI,query);

  return result.posts;

}

*/