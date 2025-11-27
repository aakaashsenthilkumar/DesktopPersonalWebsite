import React from 'react'
export default function Terminal(){
  const lines=[
    "Ubuntu Terminal Mock",
    "",
    "User: Aakaash",
    "Node: 20.x",
    ""
  ]
  return <div style={{fontFamily:'monospace',whiteSpace:'pre-line'}}>{lines.join('\n')}</div>
}
