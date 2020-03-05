import React from "react"
import Facebook from "../../../images/Icons/Social/Facebook"
import Instagram from "../../../images/Icons/Social/Instagram"
import LinkedIn from "../../../images/Icons/Social/LinkedIn"
import Pinterest from "../../../images/Icons/Social/Pinterest"
import Tumblr from "../../../images/Icons/Social/Tumblr"
import Twitter from "../../../images/Icons/Social/Twitter"
import YouTube from "../../../images/Icons/Social/YouTube"
import S from "./SocialWidget.module.scss"

export default () => (
  <div className={S.socialwidget}>
    <a href="https://www.facebook.com/" alt="">
      <Facebook />
    </a>
    <a href="https://www.instagram.com/staliajewellerylondon/" alt="Instagram">
      <Instagram />
    </a>
    <a
      href="https://www.linkedin.com/in/rebecca-savva-54933580/?originalSubdomain=uk"
      alt="LinkedIn"
    >
      <LinkedIn />
    </a>
    <a href="https://www.pinterest.co.uk/" alt="Pinterest">
      <Pinterest />
    </a>
    <a href="https://www.tumblr.com/" alt="Tumblr">
      <Tumblr />
    </a>
    <a href="https://twitter.com/" alt="Twitter">
      <Twitter />
    </a>
    <a href="https://www.youtube.com/" alt="YouTube">
      <YouTube />
    </a>
  </div>
)
