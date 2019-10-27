import React, { useEffect } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import M from 'materialize-css/dist/js/materialize.min'
import headerStyles from './header.module.scss'
import Logo from '../assets/svg/Logo_CD_horiz_long_white.svg'

const Header = () => {
 useEffect(() => {
  const elem = document.querySelector('.sidenav')
  M.Sidenav.init(elem, {
   edge: 'left',
   inDuration: 250,
  })
 }, [])

 const data = useStaticQuery(graphql`
  query {
   site {
    siteMetadata {
     title
    }
   }
  }
 `)

 return (
  <div>
   <nav className={headerStyles.Navbarconteurdigital}>
    <div className="nav-wrapper">
     <Link to="/" className="brand-logo">
      <img
       className={headerStyles.logoconteurdigital}
       src={Logo}
       width="300"
       alt="logo conteur digital"
      />
     </Link>
     <a data-target="mobile-demo" className="sidenav-trigger">
      <i className="material-icons">menu</i>
     </a>
     <ul className="right hide-on-med-and-down">
      <li>
       <Link
        className={headerStyles.navItem}
        activeClassName={headerStyles.activeNavItem}
        to="/"
       >
        Accueil
       </Link>
      </li>
      <li>
       <Link
        to="charte"
        className={headerStyles.navItem}
        activeClassName={headerStyles.activeNavItem}
       >
        Charte
       </Link>
      </li>
      <li>
       <Link
        to="/blog"
        className={headerStyles.navItem}
        // activeClassName={headerStyles.activeNavItem}
       >
        Blog
       </Link>
      </li>
      <li>
       <Link
        to="#about"
        className={headerStyles.navItem}
        activeClassName={headerStyles.activeNavItem}
       >
        À propos
       </Link>
      </li>
      <li>
       <a
        href="https://www.typeform.com/"
        target="blank"
        className={headerStyles.navItem}
        activeClassName={headerStyles.activeNavItem}
       >
        Contact
       </a>
      </li>
     </ul>
    </div>
   </nav>

   {/* Mobile NavBar */}
   <ul className="sidenav" id="mobile-demo">
    <div className={headerStyles.containerMobile}>
     <li>
      <Link
       //   className={headerStyles.navItem}
       //   activeClassName={headerStyles.activeNavItem}
       to="/"
      >
       Accueil
      </Link>
     </li>
     <li>
      <Link
       to="/charte"
       // className={headerStyles.navItem}
       // activeClassName={headerStyles.activeNavItem}
      >
       Charte
      </Link>
     </li>
     <li>
      <Link
       to="/blog"
       // className={headerStyles.navItem}
       // activeClassName={headerStyles.activeNavItem}
      >
       Blog
      </Link>
     </li>
     <li>
      <Link
       to="#about"
       // className={headerStyles.navItem}
       // activeClassName={headerStyles.activeNavItem}
      >
       À propos
      </Link>
     </li>
     <li>
      <a
       href="https://www.typeform.com/"
       target="blank"
       //  className={headerStyles.navItem}
       //  activeClassName={headerStyles.activeNavItem}
      >
       Contact
      </a>
     </li>
    </div>
   </ul>
  </div>
 )
}

export default Header
