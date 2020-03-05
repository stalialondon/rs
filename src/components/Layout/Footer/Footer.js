import React from "react";
import styles from "./Footer.module.scss";
import SocialWidget from "../../Tools/SocialWidget/SocialWidget";

const Footer = (props) => {

  return (

    <footer className={styles.footer}>
      <div className={styles.copyright}>© {new Date().getFullYear()},
        {` `}
        {props.siteName}
      </div>
      <SocialWidget />
    </footer>

  )
}
export default Footer