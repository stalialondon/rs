import React from "react";
import S from "./Footer.scss";

const Footer = (props) => {
  
  const style = {
    background: "rgb(32, 32, 32)",
    color: 'white',
    // textAlign: 'center',
    padding: '1em',
    }
  
    
  return(
        
  <footer style={style}>
    © {new Date().getFullYear()},
    {` `}
    {props.siteName}
  </footer>

)
  }
export default Footer