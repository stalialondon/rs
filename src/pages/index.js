import React from "react"
import BlogMenu from "../components/blog/BlogMenu"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"

const IndexPage = ({ data }) => {
  const {
    id: heroId,
    title: heroTitle,
    subtitle: heroSubtitle,
    buttonText: heroButtonText,
    buttonTextColor: heroButtonTextColor,
    buttonBackgroundColor: heroButtonBackgroundColor,
    heroLink,
    textColor: heroTextColor,
    textBackgroundColor: heroTextBackgroundColor,
    textVerticalPosition: heroTextVerticalPosition,
    textHorizontalPosition: heroTextHorizontalPosition,
    image: {
      id: heroImageId,
      fluid: heroImage,
      description: heroImageDescription,
    },
  } = data.allContentfulHero.edges[0].node

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        id={heroId}
        title={heroTitle}
        subtitle={heroSubtitle}
        buttonText={heroButtonText}
        buttonTextColor={heroButtonTextColor}
        buttonBackgroundColor={heroButtonBackgroundColor}
        heroLink={heroLink}
        textColor={heroTextColor}
        textBackgroundColor={heroTextBackgroundColor}
        textVerticalPosition={heroTextVerticalPosition}
        textHorizontalPosition={heroTextHorizontalPosition}
        imageId={heroImageId}
        image={heroImage}
        imageDescription={heroImageDescription}
      />
      <BlogMenu />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulHero {
      edges {
        node {
          id
          title
          subtitle
          buttonText
          buttonTextColor
          buttonBackgroundColor
          heroLink
          textColor
          textBackgroundColor
          textVerticalPosition
          textHorizontalPosition
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
            id
            description
          }
        }
      }
    }
  }
`

export default IndexPage
