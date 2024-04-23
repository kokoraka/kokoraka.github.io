import * as React from "react"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "./Context"

describe("Context component", () => {
  describe("when provider is rendered", () => {
    it("should render the children", () => {
      render(
        <ThemeProvider>Text</ThemeProvider>
      )
  
      const text = screen.getByText("Text", { exact: true })
      expect(text).toBeInTheDocument()
    })
  })
})
