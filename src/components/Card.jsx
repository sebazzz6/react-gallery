import React from 'react'

const Gallery = (props) => {
  return (
    <div className="card">
      <img src={props.src} alt={props.alt} />
      <h3>{props.name}</h3><br />
      <p><strong>Generation:</strong> {props.generation}</p>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>History:</strong> {props.history}</p>
    </div>
  )
}

export default Gallery
