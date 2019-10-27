import React from 'react'
import { Link, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'

import Layout from '../components/layout'
import blogStyles from './blogtemplate.module.scss'

export const query = graphql`
 query($slug: String!) {
  contentfulBlogPost(slug: { eq: $slug }) {
   title
   headline
   author
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
  allContentfulBiographieAnaisJaunay {
   edges {
    node {
     resume
     avatar {
      fluid {
       src
      }
     }
    }
   }
  }
  allContentfulBiographieMathias {
   edges {
    node {
     resume
     avatar {
      fluid {
       src
      }
     }
    }
   }
  }
  allContentfulBlogPost(
   limit: 4
   sort: { fields: publishedDate, order: DESC }
  ) {
   edges {
    node {
     title
     slug
     publishedDate(formatString: "DD MMMM YYYY", locale: "fr")
     author
     headline
     cover {
      fluid(maxWidth: 700) {
       src
      }
     }
    }
   }
  }
 }
`
const Blog = props => {
 const options = {
  renderNode: {
   'embedded-asset-block': node => {
    const alt = node.data.target.fields.title['en-US']
    const { url } = node.data.target.fields.file['en-US']
    return <img alt={alt} src={url} />
   },
  },
 }

 const avatarAnais =
  props.data.allContentfulBiographieAnaisJaunay.edges[0].node.avatar.fluid.src
 const avatarMathias =
  props.data.allContentfulBiographieMathias.edges[0].node.avatar.fluid.src
 const authorIsMathias = props.data.contentfulBlogPost.author.includes(
  'Mathias Savary'
 )

 const resumeAnais =
  props.data.allContentfulBiographieAnaisJaunay.edges[0].node.resume
 const resumeMathias =
  props.data.allContentfulBiographieMathias.edges[0].node.resume

 const data = props.data.allContentfulBlogPost.edges
 return (
  <Layout>
   <Head title={props.data.contentfulBlogPost.title} />
   {/* <!-- BEGIN MASTHEAD --> */}
   <div className={blogStyles.masthead}>
    <div className={blogStyles.logo}>BLOG</div>
   </div>
   {/* // <!-- END MASTHEAD --> */}

   {/* <!-- BEGIN ARTICLE --> */}
   <div className={blogStyles.wrapper}>
    <h1 className={blogStyles.title1}>{props.data.contentfulBlogPost.title}</h1>
    <p className={blogStyles.teaser}>
     {props.data.contentfulBlogPost.headline}
    </p>

    <figure className={blogStyles.heroFigure}>
     <img
      className={blogStyles.imageCover}
      src={props.data.contentfulBlogPost.cover.fluid.src}
      alt=""
     />
    </figure>

    <div className={blogStyles.articleMeta}>
     <Link to={authorIsMathias ? '/biographiemathias' : '/biographieanais'}>
      <img src={authorIsMathias ? avatarMathias : avatarAnais} alt="Author" />
     </Link>
     <div className={blogStyles.metaData}>
      <span className={blogStyles.metaAuthor}>
       {props.data.contentfulBlogPost.author}
      </span>
      <br />
      <span className={blogStyles.metaDate}>
       {props.data.contentfulBlogPost.publishedDate}
      </span>
     </div>
     <hr />
    </div>
    <p className={blogStyles.bodyText}>
     {documentToReactComponents(
      props.data.contentfulBlogPost.body.json,
      options
     )}
    </p>
   </div>
   <div className={blogStyles.metaBio}>
    <Link to={authorIsMathias ? '/biographiemathias' : '/biographieanais'}>
     <div className={blogStyles.wrapper}>
      <img src={authorIsMathias ? avatarMathias : avatarAnais} alt="" />
      <div className={blogStyles.bioText}>
       <p className={blogStyles.bioShl}>Auteur</p>
       <p className={blogStyles.bioHl}>
        {props.data.contentfulBlogPost.author}
       </p>
       <p>{authorIsMathias ? resumeMathias : resumeAnais}</p>
      </div>
     </div>
    </Link>
   </div>
   {/* <!-- BEGIN FOOTER --> */}

   <div className={blogStyles.prefooter}>
    <div className={blogStyles.wrapper}>
     <p className={blogStyles.sectionHl}>LIRE AUSSI</p>
     {data.map(item => (
      <Link to={`/blog/${item.node.slug}`}>
       <div className={blogStyles.footBlock}>
        <div>
         <img src={item.node.cover.fluid.src} alt="" />
         <h4>{item.node.title}</h4>
        </div>
       </div>
      </Link>
     ))}
     {/* <!-- end .foot-block --> */}
    </div>
   </div>
  </Layout>
 )
}

export default Blog
