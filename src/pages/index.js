import React from 'react'
import { Link } from 'gatsby'

import indexStyles from './index.module.scss'
import Layout from '../components/layout'
import Head from '../components/head'
import CardBlog from '../components/card'
import Manifeste from '../components/manifeste'
import Newsletter from '../components/newsletter'
import Service from '../components/service'
import About from '../components/about'

const indexPage = () => (
 <Layout>
  <Head title="Accueil" />
  <div className={indexStyles.heroContainer}>
   <div className={indexStyles.heroImage}>
    <div className={indexStyles.heroText}>
     <h1 className={indexStyles.heroTitle}>Conteur Digital</h1>
     <p className={indexStyles.heroEnonce}>
      Conteur digital est une agence de création de contenus spécialisée dans le
      storytelling. Elle s’adresse aux entrepreneurs, managers et acteurs du
      monde associatifs qui souhaitent bousculer leur secteur d’activité.
     </p>
     <div className={indexStyles.heroButton}>
      <button
       className="waves-effect waves-light btn indigo darken-2"
       type="button"
      >
       <Link to="/biographiemathias" className={indexStyles.button}>
        Mathias Savary
       </Link>
      </button>

      <button
       className="waves-effect waves-light btn red darken-1"
       type="button"
      >
       <Link to="/biographieanais" className={indexStyles.button}>
        Anais Jaunay
       </Link>
      </button>
     </div>
    </div>
   </div>
  </div>
  <CardBlog />
  <Manifeste />
  <Newsletter />
  <Service />
  <About />
 </Layout>
)

export default indexPage
