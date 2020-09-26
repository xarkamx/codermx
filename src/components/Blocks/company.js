import React from "react"
import { ReactSVG } from "react-svg"
import { FullScreenBlock } from "./Blocks"
import { GridContainer, GridItem } from "./../Grid/Grid"
import "./scss/blocks.scss"
export function CompanyBlock({ url, title, img, face }) {
  return (
    <FullScreenBlock face={face} className="CompanyBlock">
      <GridContainer>
        <GridItem xs={6} style={{ order: face ? 1 : 3 }}>
          <h2 className="title">{title}</h2>
        </GridItem>
        <GridItem xs={2} style={{ order: 2 }}></GridItem>
        <GridItem xs={4} style={{ order: face ? 3 : 1 }}>
          <a href={url}>
            <img src={img} />
          </a>
        </GridItem>
      </GridContainer>
    </FullScreenBlock>
  )
}
