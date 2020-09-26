import React from "react"
export function Scissor() {
  return (
    <div
      style={{
        filter: "drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))",
      }}
    >
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 65% 50%, 100% 100%, 0 100%, 0% 50%)",
          height: "100vh",
          width: "50vw",
          backgroundColor: "var(--darkColor)",
          position: "absolute",
        }}
      >
        aqui
      </div>
    </div>
  )
}
