import React from "react"
import { styled } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const PortflioButton = styled(Button)({
  background: "linear-gradient(45deg, #06A96B 30%, #06A96B 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(70, 59, 73, .3)",
  color: "#F0F0F0",
  height: 38,
  padding: "0 20px",
  fontWeight: 500,
  fontSize: 18,
})

export default function ContainedBtn({ children }) {
  return <PortflioButton>{children}</PortflioButton>
}
