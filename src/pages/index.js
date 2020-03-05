import React from "react"
import BlogMenu from "../components/blog/BlogMenu"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BlogMenu />

  </Layout>
)

export default IndexPage
