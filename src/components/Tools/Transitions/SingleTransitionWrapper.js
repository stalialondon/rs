import React, { useState, useEffect } from "react"
import { Transition } from "react-transition-group"

const duration = 750

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

const SingleTransitionWrapper = Component => {
  const HOC = props => {
    const [fadeIn, setFadeIn] = useState(false)
    useEffect(() => {
      setFadeIn(true)
      window.scrollTo(0, 0)
    }, [])
    return (
      <Transition
        in={fadeIn}
        timeout={150}
      >
        {fadeIn => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[fadeIn],
            }}
          >
            <Component />
          </div>
        )}
      </Transition>
    )
  }

  return HOC
}

export default SingleTransitionWrapper
