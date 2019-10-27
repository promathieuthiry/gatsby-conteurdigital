import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import newsletterStyles from './newsletter.module.scss'

const Newsletter = () => {

    const item = useStaticQuery(graphql`
    query {
        allContentfulNewsletter {
          edges {
            node {
              title
              content {
                content
              }
            }
          }
        }
      }
    `)
    const data = item.allContentfulNewsletter.edges

    return (
        <div className={newsletterStyles.container}>
            {data.map(item =>
          <div>
          <h3 className="center-align">{item.node.title}</h3>
              <p className={newsletterStyles.content}>
                {item.node.content.content}
              </p>
              <br />
                <div className={newsletterStyles.boutonenvoienewsletter}>
                <a href="http://eepurl.com/geH-AD" target="_blank" rel="noopener noreferrer" className="btn waves-effect waves-light red darken-1 btn-large">
                    Abonnement
                  </a>
                </div>
              </div>
           )}
        </div>
    )
}

export default Newsletter