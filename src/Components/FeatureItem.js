import React, { useState } from 'react'

export function FeatureItem(props) {
  return (
    <div>
      <div>{props.num}</div>
      <div>{props.title}</div>
      <hr />
    </div>
  )
}
