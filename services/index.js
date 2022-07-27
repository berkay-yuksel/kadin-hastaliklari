import { graphql } from "graphql";
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  /* we can add last 3 for getting only latest 3 of them*/
  const query = gql`
    query GetPosts {
      postsConnection(
        orderBy: createdAt_DESC
        where: { isFeaturedBanner: false, isFeaturedOne: false }
      ) {
        edges {
          node {
            author {
              name
            }
            isFeaturedBanner
            isFeaturedOne
            createdAt
            title
            excerpt
            slug
            tags {
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
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          name
          slug
          photo {
            url
          }
        }
        isFeaturedOne
        createdAt
        title
        excerpt
        slug
        tags {
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
        content {
          raw
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getFeaturedPostDetails = async (slug) => {
  const query = gql`
    query getFeaturedPostDetail($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          name
          slug
          photo {
            url
          }
        }
        isFeaturedOne
        createdAt
        title
        excerpt
        slug
        tags {
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
        content {
          raw
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getSeries = async () => {
  const query = gql`
      query GetSeries(){
        seriesConnection( where:{isFeaturedSerie:true}){
          edges {
            node {
              author {
                name
              }
              title
              slug
              isFeaturedSerie
              episodes {
                number
                title
                image {
                  url
                }
              }
            }
          }
        }
        }
        
      `;

  const result = await request(graphqlAPI, query);

  return result.seriesConnection.edges;
};

export const getSerieDetails = async (slug) => {
  const query = gql`
    query GetSerieDetail($slug: String!) {
      serie(where: { slug: $slug }) {
        author {
          name
        }
        title
        slug
        isFeaturedSerie
        featuredImage {
          url
        }
        episodes {
          number
          title
          image {
            url
          }
          content {
            html
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.serie;
};

export const getFeaturedBannerPost = async () => {
  const query = gql`
    query getFeaturedBannerPost {
      postsConnection(where: { isFeaturedBanner: true }) {
        edges {
          node {
            author {
              name
            }
            isFeaturedOne
            isFeaturedBanner
            createdAt
            title
            excerpt
            slug
            tags {
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
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getFeaturedBannerPostDetails = async (slug) => {
  const query = gql`
    query getFeaturedBannerDetail($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          name
          slug
          photo {
            url
          }
        }
        isFeaturedOne
        createdAt
        title
        excerpt
        slug
        tags {
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
        content {
          raw
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getFeaturedOnePost = async () => {
  /**   last:3  eklersen 3 tane görür */
  const query = gql`
    query getFeaturedOnePost {
      postsConnection(where: { isFeaturedOne: true }) {
        edges {
          node {
            author {
              name
            }
            isFeaturedOne
            isFeaturedBanner
            createdAt
            title
            excerpt
            slug
            tags {
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
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getEditorsPick = async () => {
  const query = gql`
    query getEditorsPick {
      postsConnection(orderBy: createdAt_DESC, where: { editorsPick: true }) {
        edges {
          node {
            author {
              name
            }
            isFeaturedBanner
            isFeaturedOne
            createdAt
            title
            excerpt
            slug
            tags {
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
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        name
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

/* 

getSimilar posts

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
