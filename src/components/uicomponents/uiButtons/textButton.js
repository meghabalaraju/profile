import React from "react"
import { makeStyles, styled } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"

const PortfolioTextButton = styled(Button)({
  color: "#DBDBDB",
  height: 38,
  padding: "0 20px",
  fontWeight: 500,
  fontSize: 18,
  borderRadius: 0,
})

const useStyles = makeStyles({
  aLink: {
    color: "#DBDBDB",
    textDecoration: "none",
  },
  active: {
    color: "#06A96B",
    textDecoration: "none",
  },
})

export default function TextButton({ children, className = {}, to, location }) {
  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: classes.active } : {}
  }
  const classes = useStyles()
  return (
    <PortfolioTextButton className={className}>
      <Link to={to} getProps={isActive} className={classes.aLink}>
        {children}
      </Link>
    </PortfolioTextButton>
  )
}
