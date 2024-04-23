import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe("Button component", () => {
  describe("when buton is rendered", () => {
    it("should render the children", () => {
      render(<Button>Hello</Button>)

      const text = screen.getByText("Hello", { exact: true })
      expect(text).toBeInTheDocument()
    })
  })
})
