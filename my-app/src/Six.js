import React, { useEffect, useState } from 'react'

export default function Six() {
  const [data, setData] = useState(null);

  useEffect(() => {
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
