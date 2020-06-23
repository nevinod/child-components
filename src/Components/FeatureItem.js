import React, { useState } from 'react'
const features = [['1', 'Feature 1'], ['2', 'Feature 2'], ['3', 'Feature 3']]

export function FeatureItem(props) {
  return (
    <div>
      <div>{props.num}</div>
      <div>{props.title}</div>
      <hr />
    </div>
  )
}
