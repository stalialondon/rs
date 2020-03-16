
import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styles from "./PageStyles/about.module.scss"

const About = ({ data }) => {

    const { photo: { fluid, description }, title, content: { childMarkdownRemark: { html } } } = data.allContentfulAboutPage.edges[0].node

    return (
        <Layout>
            <SEO title="Home" />
            <div className={styles.page}>
                <Img className={styles.image} fluid={fluid} alt={description} />
                <h1 className={styles.title}  >{title}</h1>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulAboutPage {
      edges {
        node {
          id
          photo {
            fluid {
                ...GatsbyContentfulFluid
              }
              description
          }
          title
          content {
            childMarkdownRemark {
                html
              }
          }
        }
      }
    }
  }
`

export default About
