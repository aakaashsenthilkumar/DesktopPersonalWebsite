import React, { useRef, useState, useEffect } from 'react';

export default function Window({ id, title, children, onClose, bringToFront, defaultPos, z }) {
  const ref = useRef();
  const [pos, setPos] = useState(defaultPos || { x: 120, y: 120 });
  const [size, setSize] = useState({ w: 520, h: 380 });
  const [drag, setDrag] = useState(false);
  const [resizing, setResizing] = useState(false);

  const off = useRef({ x: 0, y: 0 });
  const start = useRef({});

  const getTouch = (e) =>
    e.touches && e.touches.length > 0 ? e.touches[0] : null;

  useEffect(() => {
    const move = (e) => {
      let clientX = e.clientX;
      let clientY = e.clientY;

      // handle touch move
      const t = getTouch(e);
      if (t) {
        clientX = t.clientX;
        clientY = t.clientY;
      }

      if (drag) {
        setPos({
          x: clientX - off.current.x,
          y: clientY - off.current.y,
        });
      }

      if (resizing) {
        setSize({
          w: Math.max(300, start.current.w + (clientX - start.current.x)),
          h: Math.max(200, start.current.h + (clientY - start.current.y)),
        });
      }
    };

    const end = () => {
      setDrag(false);
      setResizing(false);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', end);

    window.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('touchend', end);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', end);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', end);
    };
  }, [drag, resizing]);

  return (
    <div
      className="window"
      style={{
        left: pos.x,
        top: pos.y,
        width: size.w,
        height: size.h,
        zIndex: z,
      }}
      onMouseDown={() => bringToFront(id)}
      onTouchStart={() => bringToFront(id)}
      ref={ref}
    >
      {/* DRAG HANDLE */}
      <div
        className="titlebar"
        onMouseDown={(e) => {
          setDrag(true);
          const r = ref.current.getBoundingClientRect();
          off.current = { x: e.clientX - r.left, y: e.clientY - r.top };
        }}
        onTouchStart={(e) => {
          const t = getTouch(e);
          if (!t) return;

          setDrag(true);
          const r = ref.current.getBoundingClientRect();
          off.current = { x: t.clientX - r.left, y: t.clientY - r.top };
        }}
      >
        {title}
        <div className="controls">
          <div className="control-btn control-min"></div>
          <div className="control-btn control-max"></div>
          <div className="control-btn control-close" onClick={onClose}></div>
        </div>
      </div>

      <div className="window-content">{children}</div>

      {/* RESIZE HANDLE */}
      <div
        className="resize-handle"
        onMouseDown={(e) => {
          e.stopPropagation();
          setResizing(true);
          start.current = {
            x: e.clientX,
            y: e.clientY,
            w: size.w,
            h: size.h,
          };
        }}
        onTouchStart={(e) => {
          const t = getTouch(e);
          if (!t) return;

          e.stopPropagation();
          setResizing(true);
          start.current = {
            x: t.clientX,
            y: t.clientY,
            w: size.w,
            h: size.h,
          };
        }}
      />
    </div>
  );
}
