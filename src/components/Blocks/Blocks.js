import React from "react"
import { Scissor } from "../shapes"
export function FullScreenBlock({ children, style, className, ...rest }) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
        ...style,
      }}
      className={`fullScreenBlock ${className}`}
    >
      {children}
      <Scissor {...rest}></Scissor>
    </div>
  )
}
