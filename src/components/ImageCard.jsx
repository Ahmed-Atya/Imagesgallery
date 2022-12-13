import React from 'react'

const ImageCard = ({image}) => {
  const tags = image.tags.split(',');
  return (
    <div className="card mb-5 pb-4">
      <img src={image.webformatURL} alt="" className="w-full"/>
      <div className="px-8 py-4">
        <h3 className="text-bold h2 mb-2 m-2 fs-5 text-captalize">
          <span className='fw-bold text-warning  '>Photo by</span> <span className='fw-normal fs-6 text-gray m-3'>{image.user}</span>
        </h3>
        <ul className='list-unstyled p-3'>
          <li>
            <strong className='fs-4' >Views: </strong>
            <span className='text-success fw-bold fs-5'>{image.views}</span>
          </li>
          <li>
            <strong className='fs-4'>Downloads: </strong>
            <span className='text-info fw-bold fs-5'> {image.downloads}</span>
          </li>
          <li>
            <strong className='fs-4'>Downloads: </strong>
            <span className='text-primary fw-bold fs-5'> {image.likes}</span>
          </li>
        </ul>
      </div>
      <div className="px-3 py-6 d-inline-flex gap-1">
        {tags.map((tag, index) => (
          <span key={index} className="badge bg-secondary">
          #{tag}
        </span>
        ))}
      </div>
    </div>
  )
}

export default ImageCard
