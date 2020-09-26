import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../assets/fonts/fonts.css"
import { FullScreenBlock } from "../components/Blocks"
import { Logo } from "../components/Logo/logo"
export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="home" />
      <FullScreenBlock>
        <Logo />
        <h1>My WordPress Blog</h1>
        <h4>Posts</h4>
        <div
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 44% 49%, 100% 100%, 0 100%, 0% 50%)",
          }}
        >
          aqui
        </div>
      </FullScreenBlock>
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
