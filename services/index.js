import { graphql } from "graphql"
import {request, gql} from "graphql-request"

const graphqlAPI=process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async()=>{

    const query=gql`
    query GetPosts {
        postsConnection(orderBy:createdAt_DESC
          last:3 
            ){
          edges {
            node{
              author {
                name
              }
              isFeaturedOne
              createdAt
              title
              excerpt
              slug
              tags{
                name
              }
              categories {
                name
                slug
              }
              featuredImage {
                url
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

export const getPostDetails = async(slug)=>{

  const query=gql`
  query GetPostDetails($slug:String!) {
      post(
        where: {slug:$slug} 
          ){
            author {
              name
              slug
              photo{
                url
              }
            }
            isFeaturedOne
            createdAt
            title
            excerpt
            slug
            tags{
              name
              slug
            }
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
            content{
              raw
            }
      }
    }
    
  `


//burada categories de gereksiz olabilir gereksizse sil
  const result= await request(graphqlAPI,query,{slug});

  return result.post;
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