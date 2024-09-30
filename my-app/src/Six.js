import React, { useEffect, useState } from 'react'

export default function Six() {
  const [data, setData] = useState(null);

  const api = https://dummyjson.com/image;
  useEffect(()=>{
    fetch('https://dummyjson.com/image').then((Response)=>Response.json())
    .then((json)=>setData(json))
  },[])
  return (
    <div>
      <h1>Title: {data.title}</h1>
      <h3>Body: {data.body}</h3>
    </div>
  )
}
