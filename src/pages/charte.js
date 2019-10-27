/* eslint-disable react/display-name */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'

import charteStyles from './charte.module.scss'

const Charte = () => {
 const item = useStaticQuery(graphql`
  query {
   allContentfulCharte {
    edges {
     node {
      title
      content {
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

 const options = {
  renderNode: {
   'embedded-asset-block': node => {
    const alt = node.data.target.fields.title['en-US']
    const { url } = node.data.target.fields.file['en-US']
    return <img alt={alt} src={url} />
   },
  },
 }

 const data = item.allContentfulCharte.edges
 console.log(data)
 return (
  <Layout>
   <Head title="Charte" />

   {data.map(items => (
    <div>
     {/* <!-- BEGIN MASTHEAD --> */}
     <div className={charteStyles.masthead}>
      <div className={charteStyles.logo}>{items.node.title}</div>
     </div>
     {/* // <!-- END MASTHEAD --> */}
     <div className={charteStyles.wrapper}>
      <figure className={charteStyles.heroFigure}>
       <img
        className={charteStyles.imageCover}
        src={items.node.cover.fluid.src}
        alt=""
       />
      </figure>
      <p>{documentToReactComponents(items.node.content.json, options)}</p>
     </div>
    </div>
   ))}
  </Layout>
 )
}

export default Charte
