import React from "react"
import { Link } from "gatsby"
import S from "./PrimaryButton.module.scss"

const PrimaryButton = props => {
  return (
    <Link to={`${props.link}`} className={`${S.button} ${props.customClassName}`}>
      {props.label}
    </Link>
  )
}


PrimaryButton.defaultProps = {
  link: `/`,
  label: `Button`,
  customClassName:""
}

export default PrimaryButton