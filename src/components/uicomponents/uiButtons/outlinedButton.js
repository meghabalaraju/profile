import React from "react"
import { makeStyles, styled } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"

const PortfolioOutlinedButton = styled(Button)({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "#06A96B",
  borderRadius: 3,
  color: "#06A96B",
  height: 38,
  padding: "0 20px",
  fontWeight: 500,
  fontSize: 18,
})
const useStyles = makeStyles({
  aLink: {
    color: "#06A96B",
    textDecoration: "none",
  },
  active: {
    color: "#06A96B",
    textDecoration: "none",
  },
})

export default function OutlinedButton({ children, to }) {
  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: classes.active } : {}
  }

  const classes = useStyles()
  return (
    <PortfolioOutlinedButton>
      <Link to={to} getProps={isActive} className={classes.aLink}>
        {children}
      </Link>
    </PortfolioOutlinedButton>
  )
}
