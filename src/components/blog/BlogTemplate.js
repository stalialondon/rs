import React, { useEffect } from "react"
import Layout from "../Layout/layout"
import SEO from "../seo"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"
import Styles from "./BlogTemplate.module.scss"
import CommentForm from "./Comments/CommentForm"
import CommentList from "./Comments/CommentList"
import BlogClap from "./BlogClap/BlogClap"

export default ({ data }) => {
  const blogData = data.contentfulBlogPosts
  const generalData = data.allContentfulGeneral.edges[0].node

  return (
    <Layout>
      <SEO title={blogData.title} description={blogData.metaDescription} />
      <article className={Styles.blogContainer}>
        <h1>{blogData.title}</h1>
        <div className={Styles.blogInfoWidget}>
          <Img
            fluid={generalData.authorImage.fluid}
            alt={generalData.authorImage.description}
          />
          <div className={Styles.blogInfoWidgetSubContainer}>
            <p>By Rebecca Savva</p>
            <p>
              {blogData.updatedAt}&nbsp; · &nbsp;
              {blogData.blogContent.childMarkdownRemark.timeToRead} Min Read
            </p>
          </div>

        </div>
        <BlogClap style={{ padding: "0em" }} id={blogData.id} />
        <div className={Styles.categories}>
          {blogData.categories.map(category => (
            <span key={category.id}>{category.name}</span>
          ))}
        </div>
        <Img
          fluid={blogData.blogMainImage.fluid}
          alt={blogData.blogMainImage.description}
        />
        <div
          className={Styles.blogMainContent}
          dangerouslySetInnerHTML={{
            __html: blogData.blogContent.childMarkdownRemark.html,
          }}
        />
      </article>
      <section className={Styles.clapcontainer}>
        <BlogClap id={blogData.id} />
      </section>
      <section className={Styles.comments}>
        <CommentForm id={blogData.id} />
        <CommentList id={blogData.id} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPosts(slug: { eq: $slug }) {
      id
      slug
      title
      categories {
        id
        name
      }
      blogMainImage {
        fluid {
          ...GatsbyContentfulFluid
        }
        description
      }
      blogContent {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      metaDescription
      updatedAt(formatString: "MMM DD")
    }
    allContentfulGeneral {
      edges {
        node {
          id
          authorImage {
            fluid {
              ...GatsbyContentfulFluid
            }
            description
          }
        }
      }
    }
  }
`
