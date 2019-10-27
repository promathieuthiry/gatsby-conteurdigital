import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'
import instagramLogo from '../assets/svg/instagram-brands.svg';

const Footer = () => {

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
    `)

    return (
        <div>
    <footer className={footerStyles.container}>
    <footer class={footerStyles.siteFooter}>
      <div class="container">
        <div class="row">
          <div class="col s12 col m6">
            <h6>Conteur Digitale</h6>
            <p>Conteur digital est une agence de création de contenus spécialisée dans le storytelling. Elle s’adresse aux entrepreneurs, managers et acteurs du monde associatifs qui souhaitent bousculer leur secteur d’activité.</p>
          </div>

          <div class="col s6 col m3 offset-m3" >
            <h6>Newsletter</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">Abonnez-vous</a></li>
            </ul>
            <h6>Contact</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">Contactez-nous</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col l4 col m5 col s12">
            <p className={footerStyles.copyrightText}>Copyright &copy; 2019 Conteur digital 
            </p>
          </div>
        </div>
      </div>
</footer>
            </footer>
        </div>
    )
}

export default Footer