import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Button from "../components/Buttons/PrimaryButtonLink"
import styles from './PageStyles/404.module.scss'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className={styles.notfoundpage}>
      <img src="https://images.pexels.com/photos/247314/pexels-photo-247314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="not found misery" />
      <h1>NOT FOUND</h1>
      <p>This page doesn&#39;t exist... the sadness.</p>
      <Button link={"/"} label={"Return To Home"} />
    </section>
  </Layout>
)

export default NotFoundPage
