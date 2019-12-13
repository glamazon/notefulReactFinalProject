import React from 'react'

export default function Error(props) {
  if (props.message) {
    return (
      <div className="error">{props.message}</div>
    )
  }
  return <></>
}