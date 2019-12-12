import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import SEO from "../components/seo"

const Overlay = styled.div`
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  width: 100%;
  height: 100%;
`

const Center = styled.div`
  margin: 0;
  color: white
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
`

const VSpace = styled.div`
  padding: 1.5rem;
`

const Subtitle = styled.h2`
  font-size: 1.5rem;
`

const GitHubUser = styled.div`
  font-size: 2rem;
  font-weight: bold;
`

const FrontPage = () => {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <Image
        fluid={data.headerImage.childImageSharp.fluid}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <Overlay />
      <Center>
        <Subtitle>Hello, my name is</Subtitle>
        <Title>Jukka Aho</Title>
        <GitHubUser>@ahojukka5</GitHubUser>
        <VSpace />
        <Subtitle onClick={() => console.log("fea-analysis")}>
          Engineer
        </Subtitle>
        <Subtitle onClick={() => console.log("programming")}>
          Programmer
        </Subtitle>
        <Subtitle onClick={() => console.log("data-science")}>
          Data scientist
        </Subtitle>
        <Subtitle onClick={() => console.log("web-development")}>
          Web developer
        </Subtitle>
        <Subtitle onClick={() => console.log("researcher")}>
          Researcher
        </Subtitle>
      </Center>
    </div>
  )
}

const IndexPage = () => (
  <>
    <SEO title="Jukka Aho" />
    <header></header>
    <main>
      <FrontPage />
    </main>
    <footer>© {new Date().getFullYear()} Jukka Aho</footer>
  </>
)

export default IndexPage
