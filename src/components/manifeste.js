import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import manifesteStyles from './manifeste.module.scss'


const Manifeste = () => {

    const item = useStaticQuery(graphql`
    query {
        allContentfulManifeste {
          edges {
            node {
              title
              content
              subtitle
            }
          }
        }
      }
    `)
  
    const data = item.allContentfulManifeste.edges

    return (
        <div className={manifesteStyles.container}>
            <div className={manifesteStyles.imageManifesteBackground}>
            {data.map(item => 
            <div>
            <h3 className={manifesteStyles.title}>{item.node.title}</h3>
              <p className={manifesteStyles.content}>{item.node.content}</p>
              <p className={manifesteStyles.subtitle}>{item.node.subtitle}</p>
              <div className={manifesteStyles.bouttonensavoirplus}>
                <Link to="/" className="center-align waves-effect waves-light btn deep-purple accent-3"> 
                  En savoir plus
                </Link>
                </div>
                </div>
            )}
            </div>
        </div>
    )
}

export default Manifeste