import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaStackExchange,
  FaStackOverflow,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/calmest",
  },
  {
    id: 2,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://www.github.com/calmest",
  },
  {
    id: 3,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/chukwuebuka-okafor-ayodele",
  },
  {
    id: 4,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com/iam__ebuka",
  },
  {
    id: 5,
    icon: <FaStackOverflow className="social-icon"></FaStackOverflow>,
    url: "https://stackoverflow.com/users/10671449/okafor-chukwuebuka",
  },
  {
    id: 6,
    icon: <FaStackExchange className="social-icon"></FaStackExchange>,
    url: "https://stackexchange.com/users/14776748/okafor-chukwuebuka",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
