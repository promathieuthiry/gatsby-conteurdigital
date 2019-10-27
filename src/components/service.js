import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import serviceStyles from './service.module.scss'

const Service= () => {

    const item = useStaticQuery(graphql`
    query {
        allContentfulService {
          edges {
            node {
              service1Title
              service1Description
              service1Photo {
                fluid (
                 maxWidth: 400,
                  maxHeight: 400
                  ) 
                  {
                  src
                }
              }
              service2Title
              service2Description
              service2Photo {
                fluid (
                    maxWidth: 400,
                  maxHeight: 400
                  ) 
                  {
                  src
                }
              }
              service3Title
              service3Description
              service3Photo {
                fluid (
                    maxWidth: 400,
                  maxHeight: 400
                  ) 
                  {
                  src
                }
              }
            }
          }
        }
      }
    `)
    const data = item.allContentfulService.edges
    console.log(data)

    return (
        <div className={serviceStyles.container}>
          <h3 className="center-align titreblog1">SERVICES</h3>
          <div className="row">
          {data.map(item => 
          <div>
        {/* //   1re article */}
            <div className="col s12 m6 l4">
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={item.node.service1Photo.fluid.src} alt="" />
                </div>
                <div className="card-content">
                <span class="card-title activator grey-text text-darken-4">{item.node.service1Title}<i class="material-icons right">more_vert</i></span>
                  </div>
                <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{item.node.service1Title}<i class="material-icons right">close</i></span>
                    <p>{item.node.service1Description}</p>
                </div>
                </div>
              </div>
              {/* 2ème article */}
            <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={item.node.service2Photo.fluid.src} alt="" />
          </div>
          <div className="card-content">
          <span class="card-title activator grey-text text-darken-4">{item.node.service2Title}<i class="material-icons right">more_vert</i></span>
            </div>
          <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">{item.node.service2Title}<i class="material-icons right">close</i></span>
              <p>{item.node.service2Description}</p>
          </div>
          </div>
        </div>
              
               {/* 3ème article */}
            <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={item.node.service3Photo.fluid.src} alt="" />
          </div>
          <div className="card-content">
          <span class="card-title activator grey-text text-darken-4">{item.node.service3Title}<i class="material-icons right">more_vert</i></span>
            </div>
          <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">{item.node.service3Title}<i class="material-icons right">close</i></span>
              <p>{item.node.service3Description}</p>
          </div>
          </div>
        </div>
        </div>
          )}
            </div>
            </div>
    )
}

export default Service