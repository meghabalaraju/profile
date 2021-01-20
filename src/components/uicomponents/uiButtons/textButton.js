import React from "react"
import { styled } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const PortfolioTextButton = styled(Button)({
  color: "#DBDBDB",
  height: 38,
  padding: "0 20px",
  fontWeight: 500,
  fontSize: 18,
  borderRadius: 0,
})

export default function TextButton({ children, className = {} }) {
  return (
    <PortfolioTextButton className={className}>{children}</PortfolioTextButton>
  )
}
