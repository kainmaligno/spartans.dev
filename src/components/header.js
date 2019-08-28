import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'
//assets
import spartan from '../images/spartan.png'

const Landing = styled.header`
height:100vh;
width:100%;
background-color:#020202;
margin-bottom:2%;
background-image:url(${spartan});
background-size:contain;
background-repeat: no-repeat;
background-attachment:scroll;
background-position:center center;
position:relative;

`;

const Hero = styled.div`
background-size:cover;
background-attachment:scroll;
background-position:center center;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:relative;

`;

const Header = ({ siteTitle }) => (
  <Landing>
   
      {/* <img width='100%' height="100vh" src={spartan} title="spartans" alt="big-logo"/> */}
  </Landing>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
