/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            backgroundColor: "#020202",
            color: "#CF3D28",
          }}
        >
          <main>{children}</main>
          <footer style={{ backgroundColor: "#020202", color: "#CF3D28" }}>
            <div>
              <h1>Hola estamos trabajando para la pagina </h1>
              <div>
                <ul style={{ color: "#CF3D28" }}>
                  <li>
                    Si quieres contactar con nosotros puedes acudir al{" "}
                    <a
                      className="links"
                      href="tel:5586824354"
                      title="Contacto Spartans dev"
                    >
                      <p>503-2528-8600</p>
                    </a>
                  </li>
                  <li>
                    O vistita mi pagina Personal
                    <br />
                    <a
                      className="links"
                      href="https://www.salemm.dev"
                      title=" Salvador Emmanuel Juarez Granados"
                      target="_blank"
                    >
                      {" "}
                      Salvador Emmanuel Juarez Granados
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            © {new Date().getFullYear()},Construimos con
            {` `}
            <a className="links" href="https://www.gatsbyjs.org">
              Gatsby
            </a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
