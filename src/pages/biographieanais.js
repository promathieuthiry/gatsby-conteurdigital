/* eslint-disable react/display-name */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'

import bioMathiasStyles from './biographiemathias.module.scss'

const BioAnais = () => {
 const item = useStaticQuery(graphql`
  query {
   allContentfulBiographieAnaisJaunay {
    edges {
     node {
      titre
      resume
      avatar {
       fluid {
        src
       }
      }
      content {
       json
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

 const data = item.allContentfulBiographieAnaisJaunay.edges

 return (
  <Layout>
   <Head title="Biographie Anais" />

   {data.map(items => (
    <div>
     {/* <!-- BEGIN MASTHEAD --> */}
     <div className={bioMathiasStyles.masthead}>
      <div className={bioMathiasStyles.logo}>Anaïs Jaunay</div>
     </div>
     {/* // <!-- END MASTHEAD --> */}
     <div className={bioMathiasStyles.wrapper}>
      <figure className={bioMathiasStyles.heroFigure}>
       <img
        className={bioMathiasStyles.imageCover}
        src={items.node.avatar.fluid.src}
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

export default BioAnais
