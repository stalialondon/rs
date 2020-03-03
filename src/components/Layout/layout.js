/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/header"
import Footer from "./Footer/Footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      allContentfulGeneral {
        nodes {
          id
          siteName
          siteSubtitle
          siteMetaDescription
          authorOfSite
        }
      }
    }
  `)
  const {
    id,
    siteName,
    siteSubtitle,
    siteMetaDescription,
    authorOfSite,
  } = data.allContentfulGeneral.nodes[0]

  return (
    <>
      <Header siteTitle={siteName} />
      <div>
        <main>{children}</main>
      </div>
      <Footer siteName={siteName} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
