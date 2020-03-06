import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Styles from "./Hero.module.scss"

const Hero = props => {
  const {
    id,
    title,
    subtitle,
    buttonText,
    buttonTextColor,
    buttonBackgroundColor,
    heroLink,
    textColor,
    textBackgroundColor,
    textVerticalPosition,
    textHorizontalPosition,
    imageId,
    image,
    imageDescription,
  } = props

  let topPosition = null
  let bottomPosition = null
  let leftPosition = null
  let rightPosition = null
  let translateY = null
  let translateX = null

  if (textHorizontalPosition === "left") {
    leftPosition = "1em"
    rightPosition = "unset"
    translateX = "0%"
  } else if (textHorizontalPosition === "right") {
    rightPosition = "1em"
    leftPosition = "unset"
    translateX = "0%"
  } else {
    translateX = "-50%"
    // if position set to center. Do nothing as the css defaults to center.
  }

  if (textVerticalPosition === "top") {
    topPosition = "1em"
    bottomPosition = "unset"
    translateY = "0%"
  } else if (textVerticalPosition === "bottom") {
    topPosition = "unset"
    bottomPosition = "1em"
    translateY = "0%"
  } else {
    translateY = "-50%"
    // if position set to middle. Do nothing as the css defaults to middle.
  }

  return (
    <section key={id} className={Styles.hero}>
      <Img key={imageId} className={Styles.image} fluid={image} alt={imageDescription} />

      <div
        className={Styles.textcontainer}
        style={{
          color: `${textColor}`,
          backgroundColor: `${textBackgroundColor}`,
          top: `${topPosition}`,
          left: `${leftPosition}`,
          right: `${rightPosition}`,
          bottom: `${bottomPosition}`,
          transform: `translateX(${translateX}) translateY(${translateY})`,
        }}
      >
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <Link to={heroLink}>
          <button
            className={Styles.herobutton}
            style={{
              color: `${buttonTextColor}`,
              backgroundColor: `${buttonBackgroundColor}`,
            }}
          >
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  )
}

Hero.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonBackgroundColor: PropTypes.string,
  heroLink: PropTypes.string,
  textColor: PropTypes.string,
  textBackgroundColor: PropTypes.string,
  textVerticalPosition: PropTypes.string,
  textHorizontalPosition: PropTypes.string,
  imageId: PropTypes.string,
  image: PropTypes.object,
  imageDescription: PropTypes.string,
}

Hero.defaultProps = {
  title: `Title`,
  subtitle: `Subtitle`,
}

export default Hero
