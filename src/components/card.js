import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import cardStyles from './card.module.scss'

const CardBlog = () => {
 const item = useStaticQuery(graphql`
  query {
   allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
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
  }
 `)

 const data = item.allContentfulBlogPost.edges
 const avatarAnais =
  item.allContentfulBiographieAnaisJaunay.edges[0].node.avatar.fluid.src
 const avatarMathias =
  item.allContentfulBiographieMathias.edges[0].node.avatar.fluid.src
 // const authorIsMathias = props.data.contentfulBlogPost.author.includes("Mathias Savary")

 const divStyle = {
  maxWidth: '40px',
  minHeight: '40px',
 }

 return (
  <div>
   <h3 className={cardStyles.cardBlogTitle}>BLOG</h3>
   {data.slice(0, 3).map(items => (
    <Link to={`/blog/${items.node.slug}`}>
     <div className={cardStyles.cardItem}>
      <div className="card">
       <div className="card-image">
        <img
         src={items.node.cover.fluid.src}
         className={cardStyles.cardCover}
         alt=""
        />
       </div>
       <div className={cardStyles.contentCard}>
        <div className="card-content">
         <span className="card-title">{items.node.title}</span>
         <p>{items.node.headline}</p>
        </div>
       </div>
       <div className="card-action">
        <div className={cardStyles.cardBlogAuthor}>
         <img
          src={
           items.node.author[0].includes('Mathias Savary')
            ? avatarMathias
            : avatarAnais
          }
          alt="avatar"
          style={divStyle}
          className="circle responsive-img"
         />
         <span className="black-text left-align">
          <b>{items.node.author[0]}</b>
          <br />
          <i className="card-createDate">
           {`Publié le ${items.node.publishedDate}`}
          </i>
         </span>
        </div>
       </div>
      </div>
     </div>
    </Link>
   ))}
  </div>
 )
}

export default CardBlog
