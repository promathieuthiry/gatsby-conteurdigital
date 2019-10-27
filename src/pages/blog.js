import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

import Head from '../components/head'
import CardBlogPage from '../components/cardblogpage'

const BlogPage = () => {
 const item = useStaticQuery(graphql`
  query {
   allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
    edges {
     node {
      title
      headline
      author
      slug
      publishedDate(formatString: "DD MMMM YYYY", locale: "fr")
      body {
       json
      }
      cover {
       fluid {
        src
       }
      }
     }
    }
   }
  }
 `)

 const data = item.allContentfulBlogPost.edges
 console.log(data)
 return (
  <Layout>
   <Head title="Blog" />
   <CardBlogPage />
  </Layout>
 )
}

export default BlogPage
