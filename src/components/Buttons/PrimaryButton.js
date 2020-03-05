import React from "react"
import S from "./PrimaryButton.module.scss"

const PrimaryButton = props => {
  return (
    <button
      onClick={() => {
        if (props.onClick) {
          props.onClick()
        }
      }}
      className={`${S.button} ${props.customClassName}`}
    >
      {props.label}
    </button>
  )
}
PrimaryButton.defaultProps = {
  label: `Button`,
  customClassName: S.button,
}
export default PrimaryButton
