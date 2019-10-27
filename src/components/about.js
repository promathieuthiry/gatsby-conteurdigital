import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import aboutStyles from './about.module.scss'
import maillogo from '../assets/svg/close-envelope.svg'
import twitterlogo from '../assets/svg/twitter.svg'
import linkedinlogo from '../assets/svg/linkedin-logo.svg'
import Sitelogo from '../assets/svg/global.svg'

const About = () => {
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
     }
    }
   }
   allContentfulBiographieMathias {
    edges {
     node {
      titre
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

 const dataAnais = item.allContentfulBiographieAnaisJaunay.edges
 const dataMathias = item.allContentfulBiographieMathias.edges

 return (
  <div className={aboutStyles.fullContainer}>
   <div className="container">
    <h3 className={aboutStyles.aboutTitleSection} id="about">
     QUI SOMMMES-NOUS ?
    </h3>
    <div className="row newsletterblock grey lighten-5">
     {/* // Biographie Anais */}
     {dataAnais.map(item => (
      <div className="col s12 m6">
       <div className={aboutStyles.aboutContainerCard}>
        <div className="card-image">
         <img
          src={item.node.avatar.fluid.src}
          alt="Anaïs Jaunay"
          className={aboutStyles.circularImage}
          width="150"
          height="150"
         />
        </div>
        <h3>Anaïs Jaunay</h3>
        <p className={aboutStyles.aboutTitle}>{item.node.titre}</p>
        <p> {item.node.resume}</p>
        <a href="mailto:conteurdigital@gmail.com">
         <img
          src={maillogo}
          alt=""
          width="30"
          height="30"
          className={aboutStyles.aboutLogo}
         />
        </a>
        <a
         href="https://anaisjaunay.fr/"
         target="_blank"
         rel="noopener noreferrer"
        >
         <img
          src={Sitelogo}
          alt=""
          width="30"
          height="30"
          className={aboutStyles.aboutLogo}
         />
        </a>
        <a
         href="https://www.linkedin.com/in/anaisjaunay/"
         target="_blank"
         rel="noopener noreferrer"
        >
         <img
          src={linkedinlogo}
          alt=""
          width="30"
          height="30"
          className={aboutStyles.aboutLogo}
         />
        </a>
        <Link
         exact
         to="/biographieanais"
         className={aboutStyles.aboutButtonKnowMore}
        >
         En savoir plus sur Anaïs
        </Link>
       </div>
      </div>
     ))}
     {/* Biographie Mathias */}
     {dataMathias.map(item => (
      <div className="col s12 m6">
       <div className={aboutStyles.aboutContainerCard}>
        <div className="card-image">
         <img
          src={item.node.avatar.fluid.src}
          alt="Mathias Savary"
          className={aboutStyles.circularImage}
          width="150"
          height="150"
         />
        </div>
        <h3>Mathias Savary</h3>
        <p className={aboutStyles.aboutTitle}>{item.node.titre}</p>
        <p> {item.node.resume} </p>
        <a href="mailto:conteurdigital@gmail.com">
         <img
          src={maillogo}
          alt=""
          width="30"
          height="30"
          className={aboutStyles.aboutLogo}
         />
        </a>
        <a
         href="https://twitter.com/videotelling_fr"
         target="_blank"
         rel="noopener noreferrer"
        >
         <img
          src={twitterlogo}
          alt=""
          width="30"
          height="30"
          className={aboutStyles.aboutLogo}
         />
        </a>
        <a
         href="https://www.linkedin.com/in/mathias-savary-1a37a498/"
         target="_blank"
         rel="noopener noreferrer"
        >
         <img
          src={linkedinlogo}
          alt=""
          width="30"
          height="30"
          className={aboutStyles.aboutLogo}
         />
        </a>
        <Link
         exact
         to="/biographiemathias"
         className={aboutStyles.aboutButtonKnowMore}
        >
         En savoir plus sur Mathias
        </Link>
       </div>
      </div>
     ))}
    </div>
   </div>
  </div>
 )
}

export default About
