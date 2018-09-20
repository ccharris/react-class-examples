import React from 'react'

const Car = props => {
  return(
    <div>
      <p>{props.make}</p>
      <p>{props.model}</p>
      <p>{props.color}</p>
    </div>
  )
}

export default Car