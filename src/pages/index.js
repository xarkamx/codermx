import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../assets/fonts/fonts.css"
import { Logo } from "../components/Logo/logo"
import webarriba from "../assets/images/webarriba.png"
import webgdl from "../assets/images/webgdl.png"
import { CompanyBlock } from "./../components/Blocks/company"
import { FullScreenBlock } from "../components/Blocks/Blocks"
export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="home" />
      <FullScreenBlock>
        <Logo />
        <h1>My WordPress Blog</h1>
        <h4>Posts</h4>
      </FullScreenBlock>
      <CompanyBlock img={webarriba} face={1} title={"Webarriba"}></CompanyBlock>
      <CompanyBlock img={webgdl} face={0} title={"web-gdl"}></CompanyBlock>
      <CompanyBlock
        img={webgdl}
        face={1}
        title={"Solid Servicios"}
      ></CompanyBlock>
    </Layout>
  )
}

/**
 *  {data.allWordpressPost.edges.map(({ node }) => (
        <div>
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.content }} />
        </div>
      ))}
 */
export const query = graphql`
  {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          content
        }
      }
    }
  }
`
