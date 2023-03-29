import React, { useState } from 'react'
import MyModel from './ShowModel'

export default function Model() {
    const [showModel,setShowModel]=useState(false)
    const closeModel=()=>setShowModel(false)
    
  return (
    <div>
        <button className="model-btn" onClick={()=>setShowModel(true)}>Open Model</button>
        {showModel && <MyModel closeModel={closeModel} />}
    </div>
  )
}
