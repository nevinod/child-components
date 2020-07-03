import React, { useState, useEffect } from 'react'
import { FeatureItem } from './FeatureItem.js'

const URL = 'https://jsonplaceholder.typicode.com/posts'

export function Features() {


  useEffect(() => {

  }, [])

  const fetchPosts = async () => {

  }

  return (
    <div>{JSON.stringify()}</div>
  )

  // return (
  //   <div>
  //     {features.map(feature => (
  //       <FeatureItem key={feature[0]} num={feature[0]} title={feature[1]} />
  //     ))}
  //   </div>
  // )
}
