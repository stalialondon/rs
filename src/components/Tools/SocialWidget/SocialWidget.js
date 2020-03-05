import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Facebook from "../../../images/Icons/Social/Facebook"
import Instagram from "../../../images/Icons/Social/Instagram"
import LinkedIn from "../../../images/Icons/Social/LinkedIn"
import Pinterest from "../../../images/Icons/Social/Pinterest"
import Tumblr from "../../../images/Icons/Social/Tumblr"
import Twitter from "../../../images/Icons/Social/Twitter"
import YouTube from "../../../images/Icons/Social/YouTube"
import S from "./SocialWidget.module.scss"

export default () => {

  const data = useStaticQuery(graphql`
    {
      allContentfulGeneral {
        edges {
          node {
            facebookLink
            linkedInLink
            tumblrLink
            twitterLink
            youTubeLink
            instagramLink
            pinterestLink  
          }
        }
      }
    }
  `)

  const {
    facebookLink,
    linkedInLink,
    tumblrLink,
    twitterLink,
    youTubeLink,
    instagramLink,
    pinterestLink } = data.allContentfulGeneral.edges[0].node

  return (
    <div className={S.socialwidget}>
      <a href={facebookLink} alt="">
        <Facebook />
      </a>
      <a href={instagramLink}
        alt="Instagram">
        <Instagram />
      </a>
      <a
        href={linkedInLink}
        alt="LinkedIn"
      >
        <LinkedIn />
      </a>
      <a href={pinterestLink}
        alt="Pinterest">
        <Pinterest />
      </a>
      <a href={tumblrLink}
        alt="Tumblr">
        <Tumblr />
      </a>
      <a href={twitterLink}
        alt="Twitter">
        <Twitter />
      </a>
      <a href={youTubeLink}
        alt="YouTube">
        <YouTube />
      </a>
    </div>
  )
}
