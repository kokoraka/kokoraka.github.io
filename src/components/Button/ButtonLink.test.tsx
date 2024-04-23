import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import { ButtonLink } from "./ButtonLink"

describe("ButtonLink component", () => {
  describe("when buton is rendered", () => {
    it("should render the children", () => {
      render(
        <BrowserRouter>
          <ButtonLink to="/">Hello</ButtonLink>
        </BrowserRouter>
      )

      const text = screen.getByText("Hello", { exact: true })
      expect(text).toBeInTheDocument()
    })
  })
})
