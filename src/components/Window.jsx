import React, {useRef,useState,useEffect} from 'react'

export default function Window({id,title,children,onClose,bringToFront,defaultPos, z}){
  const ref = useRef()
  const [pos,setPos]=useState(defaultPos||{x:120,y:120})
  const [size,setSize]=useState({w:520,h:380})
  const [drag,setDrag]=useState(false)
  const [resizing,setResizing]=useState(false)
  const off=useRef({x:0,y:0})
  const start=useRef({})

  useEffect(()=>{
    const mv=e=>{
      if(drag){
        setPos({x:e.clientX-off.current.x,y:e.clientY-off.current.y})
      }
      if(resizing){
        setSize({
          w:Math.max(300,start.current.w+(e.clientX-start.current.x)),
          h:Math.max(200,start.current.h+(e.clientY-start.current.y))
        })
      }
    }
    const up=()=>{setDrag(false);setResizing(false)}
    window.addEventListener('mousemove',mv)
    window.addEventListener('mouseup',up)
    return()=>{window.removeEventListener('mousemove',mv);window.removeEventListener('mouseup',up)}
  },[drag,resizing])

  return(
    <div
      className="window"
      style={{
        left: pos.x,
        top: pos.y,
        width: size.w,
        height: size.h,
        zIndex: z
      }}
      onMouseDown={() => bringToFront(id)}
      ref={ref}
    >
      <div className="titlebar" onMouseDown={e=>{
        setDrag(true)
        const r=ref.current.getBoundingClientRect()
        off.current={x:e.clientX-r.left,y:e.clientY-r.top}
      }}>
        {title}
        <div className="controls">
          <div className="control-btn control-min"></div>
          <div className="control-btn control-max"></div>
          <div className="control-btn control-close" onClick={onClose}></div>
        </div>
      </div>
      <div className="window-content">{children}</div>
      <div className="resize-handle" onMouseDown={e=>{
        e.stopPropagation()
        setResizing(true)
        start.current={x:e.clientX,y:e.clientY,w:size.w,h:size.h}
      }}/>
    </div>
  )
}
