import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'
//assets
import spartan from '../images/spartan.png'
import rain from '../images/Rain.png'

const Landing = styled.div`
background-image:url(${spartan});
padding: 195px 0;
background-position: center center;
width: 400px;
height: 500px;
margin:0 auto;
background-size: cover;
`;
const Raining = styled.div`
position: fixed;
top: 0;
left:0;
width: 100%;
height: 100%;
background-image: url(${rain});
background-size: cover;
background-position: top;
z-index: 100;
opacity: 0.1;
animation: raining linear infinite 0.2s;
`;
const Rain2 = styled.div`
animation: raining linear infinite 2s;
`;
const Shadow = styled.span`
position: fixed;
border-radius: 10000px;
height: 10000px;
width: 10000px;
background-attachment: fixed;
background-size: 200% 200%;
background-position: -50% -50%;
box-shadow: 0 0 5000px 4500px #000 inset, 0 0 5000px 5000px #000;
margin-top:-5000px;
margin-left:-5000px;
z-index: 1000;
animation: shadow 1s 1 ;
`;
const Thunder = styled.span`
position: fixed;
background: #fff;
height: 100%;
width: 100%;
z-index: 1500;
opacity: 0;
top:0;
left:0;
animation: thunder 10s infinite;
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
  <div>
  <Landing/><Raining/><Rain2/><Shadow/><Thunder/>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
