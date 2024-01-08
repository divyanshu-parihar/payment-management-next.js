'use client';
import { useState } from "react"

export default function page() {
  const [count,SetCount ] = useState(0);

    const handleBtn = ()=>{
        alert('Button clikc')
    }


  return (
    <div style={{
        height: '100vh',
        width: "100%",
        display:'flex',
        justifyContent:"center",
        alignItems: "center"
    }} >
        <button
         onClick={handleBtn}
         style={{
            padding:"20px",
            borderRadius:"10px",
            backgroundColor:'#f6d365',
            fontWeight:"bolder"
            
        }}>
            Click Me
        </button>


        <div className="currstatus">

        </div>
    </div>
  )
}
