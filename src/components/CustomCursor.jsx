import React, { useEffect, useState } from "react";

// global state
import { useGlobalStateContext } from "../context/globalContext";

// component
import { Cursor } from "../styles/globalStyles";

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const { cursorType } = useGlobalStateContext();

  const handleMouseMove = (event) => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Cursor
        className={`${(mousePosition.y !== 0 && cursorType) || ""}`}
        style={{
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
        }}
      >
        <p className="cursor-text">Link Not Available Yet</p>
      </Cursor>
    </>
  );
}

export default CustomCursor;
