import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BlogEntry from "./BlogEntry";
import Styles from './BlogMenu.module.scss'
const BlogMenu = () => {

  let blogPageContent = useStaticQuery(graphql`
  {
    allContentfulBlogPosts {
      edges {
        node {
          id
          slug
          title
          categories {
              name
          }
          blogMainImage {
            fluid(maxWidth: 768) {
              ...GatsbyContentfulFluid
            }
            description
          }
          description {
            description
          }
          blogContent {
            childMarkdownRemark {
              html
              timeToRead
            }
          }
          updatedAt(fromNow: true)
        }
      }
    }
  }
  `
  )

  return (
      <section className={Styles.blogHome}>

        <div className={Styles.blogList}>
          {blogPageContent.allContentfulBlogPosts.edges.map((entry) => {
            return (
              <div key={entry.node.id}>
                <BlogEntry entry={entry} />
              </div>
            )
          })}

        </div>
      </section>
  )

}

export default BlogMenu