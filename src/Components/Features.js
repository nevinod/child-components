import React, { useState } from 'react'
import { FeatureItem } from './FeatureItem.js'
const features = [['1', 'Feature 1'], ['2', 'Feature 2'], ['3', 'Feature 3']]

export function Features() {
  return (
    <div>
      {features.map(feature => {
        return <FeatureItem key={feature[0]} num={feature[0]} title={feature[1]} />
      })}
    </div>
  )
}
