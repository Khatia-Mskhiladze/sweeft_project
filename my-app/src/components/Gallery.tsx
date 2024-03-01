import React from 'react'
// any???????

const Gallery = ({data}: any) => {
  return (
    <div>
        <img src={data.urls.small} alt={data.description}></img>
        <p>{data.description || data.alt_description}</p>
    </div>
  )
}

export default Gallery;