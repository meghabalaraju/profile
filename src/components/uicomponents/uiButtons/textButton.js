import React from "react"
import { styled } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const PortfolioTextButton = styled(Button)({
  border: "none",
  color: "#DBDBDB",
  height: 38,
  padding: "0 20px",
  fontWeight: 500,
  fontSize: 18,
})

export default function TextButton({ children }) {
  return <PortfolioTextButton>{children}</PortfolioTextButton>
}
