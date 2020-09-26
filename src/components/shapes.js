import React from "react"
export function Scissor({ face = 0 }) {
  let shape = "0 0, 100% 0, 65% 50%, 100% 100%, 0 100%, 0% 50%"
  let shadow = "12px 0px 8px"
  if (face) {
    shape = "0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 35% 50%"
    shadow = "-12px 0px 8px"
  }
  return (
    <div
      style={{
        filter: `drop-shadow(${shadow} #444)`,
        position: "absolute",
        right: face ? "0" : "50vw",
        top: "0",
      }}
    >
      <div
        style={{
          clipPath: `polygon(${shape})`,
          height: "100vh",
          width: "50vw",
          backgroundColor: "var(--darkColor)",
        }}
      ></div>
    </div>
  )
}
