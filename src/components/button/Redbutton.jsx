import React from 'react'

const Redbutton = (props) => {
  const { child } = props;
  return (
    <>
      <button className="btn btn-red ml-2">{child}</button>
    </>
  )
}

export default Redbutton
