import React from "react"
import { styled } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const PortfolioOutlinedButton = styled(Button)({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "#06A96B",
  borderRadius: 3,
  color: "#DBDBDB",
  height: 38,
  padding: "0 20px",
  fontWeight: 500,
  fontSize: 18,
})

export default function OutlinedButton({ children }) {
  return <PortfolioOutlinedButton>{children}</PortfolioOutlinedButton>
}
