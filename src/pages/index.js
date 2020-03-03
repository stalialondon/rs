import React from "react"
import { Link } from "gatsby"
import BlogMenu from "../components/blog/BlogMenu"
import Layout from "../components/Layout/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  <BlogMenu />

  </Layout>
)

export default IndexPage
