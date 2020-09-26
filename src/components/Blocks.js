import React from "react"
import { Scissor } from "./shapes"
import { GridContainer, GridItem } from "./Grid/Grid"
export function FullScreenBlock({ children }) {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Scissor></Scissor>
      {children}
    </div>
  )
}
