// React import
import React from 'react'
// App imports
import { PageCardProps } from './types'

const PageCard: React.FC<PageCardProps> = ({ title, thumbnail: Thumbnail, description }) => {
  return (
    <div className="card bg-base-100 w-full h-96 shadow-sm cursor-pointer ">
      <figure>
        <img
          src={Thumbnail}
          alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default PageCard
