import React from "react"
import { Link } from "gatsby"
import "../components/layout.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi Spartans</h1>
    <p>Welcome to your site Spartans</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
    <div>
      <ul>
        {" "}
        <h1>Algunos de Nuestros Ejemplos</h1>
        <li>
          <a
            className="links"
            href="https://loving-jackson-46845a.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alpha brands
          </a>
        </li>
        <li>
          <a
            className="links"
            href="https://www.heksecoven.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hekse Coven{" "}
          </a>
        </li>
        <li>
          <a
            className="links"
            href="http://peaceful-sinoussi-e5a1a5.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scire
          </a>
        </li>
        <li>
          <a
            className="links"
            href="https://stupefied-carson-3d8b1f.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Festival de brujas
          </a>
        </li>
        <li>
          <a
            className="links"
            href="https://xenodochial-mclean-a33e5d.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Simple Catalogo
          </a>
        </li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
