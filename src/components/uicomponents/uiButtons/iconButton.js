import React from "react"
import IconButton from "@material-ui/core/IconButton"
import { Link, styled } from "@material-ui/core"

export default function PortIconButton({ children, className, href, target }) {
  const PortfolioIconButton = styled(IconButton)({
    backgroundColor: "#1D1D1D",
    color: "#DBDBDB",
    fontSize: "1.4rem",
    padding: "10px",

    "&:hover": {
      color: "rgba(6, 169, 107, 1)",
    },
  })
  return (
    <Link href={href} target={target} rel="noopener">
      <PortfolioIconButton className={className}>
        {children}
      </PortfolioIconButton>
    </Link>
  )
}
