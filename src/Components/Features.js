import React, { useState, useEffect } from 'react'
import { FeatureItem } from './FeatureItem.js'

const URL = 'https://jsonplaceholder.typicode.com/posts'

function Features() {
  const [post, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setPosts(data)
  }

  return (
    <div>{JSON.stringify(posts)}</div>
  )

  // return (
  //   <div>
  //     {features.map(feature => (
  //       <FeatureItem key={feature[0]} num={feature[0]} title={feature[1]} />
  //     ))}
  //   </div>
  // )
}

export default Features
