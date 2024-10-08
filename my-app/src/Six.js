//Create a component that fetchs data from an API  and display it.
import React, { useEffect, useState } from 'react'

export default function Six() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // use another api for fetch image and show title and body and you can show multiple data that you want to fetch.
    // https://dummyjson.com/image/SIZE/?text=TEXT&fontSize=FONT_SIZE
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.blob()) // Convert response to blob
      .then(blob => {
        console.log('Fetched image blob:', blob);
      })
    // Blob {size: SIZE, type: 'image/png'}
    return (
      <div>
        <h1>Title: {data.title}</h1>
        <h3>Body: {data.body}</h3>
      </div>
    )
  }
)}
