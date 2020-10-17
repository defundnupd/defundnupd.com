/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { SocialIcon } from "react-social-icons"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            instagram
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {/* {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )} */}
      {author?.name && (
        <p>
          {/* Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://instagram.com/${social?.instagram || ``}`}>
            You should follow them on instagram
          </a> */}
          We are students at Northeastern University who are committed to
          defunding and abolishing the Northeastern University Police
          Department, reinvesting those funds to support our community, and
          taking anti-racist action.
        </p>
      )}
      <br></br>
      <div className="social">
          <SocialIcon
            network="email"
            url="mailto:defundnupd@gmail.com"
            bgColor="black"
          />
          <SocialIcon
            network="instagram"
            url="http://instagram.com/defundnupd"
            bgColor="black"
          />
      </div>
    </div>
  )
}

export default Bio
