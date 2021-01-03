import React from 'react'
import { Link } from 'react-router-dom'
import articlesPath from "./path";

const Articles = () => (
  <div>
    <h1> Articles </h1>

    <Link to={`${articlesPath}/23`}>
      The Article
    </Link>
  </div>
)

export default Articles
export const path = articlesPath
