import React from 'react'

export default function Four() {
    const items = ['mohini', 'shyam', 'sundar', 'kalindi', 'sona'];
  return (
    <div>
        <ul>
            {items.map((items,index)=>{
                return <li key={index}>{items}</li>
            })}
        </ul>
    </div>
  )
}
