import React,{useState} from 'react'

export default function Three() {
    const [input, setInput] = useState('');
  return (
    <div>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <p> user Input: {input}</p>
    </div>
    
  )
}
