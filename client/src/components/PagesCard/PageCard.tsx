// React import
import React from 'react'
// Third party import
import { Link } from 'react-router'
// App imports
import { PageCardProps } from './types'

const PageCard: React.FC<PageCardProps> = ({ title, thumbnail: Thumbnail, description, path }) => {
  return (
    <Link to={path}>
      <div className="card bg-base-100 w-full h-96 shadow-sm cursor-pointer ">
        <figure className="w-96 h-96 overflow-hidden">
          <img
            src={Thumbnail}
            alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default PageCard
