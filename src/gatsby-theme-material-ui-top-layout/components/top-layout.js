import React from "react"
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout"

export default function TopLayout({ children, theme }) {
  return (
    <ThemeTopLayout theme={theme} style={{ maxHeight: "100vh" }}>
      {children}
    </ThemeTopLayout>
  )
}
