import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import { Link } from "./Link"

describe("Link component", () => {
  describe("when link is rendered", () => {
    it("should render the link", () => {
      render(
        <BrowserRouter>
          <Link to="/my-link">
            My Link
          </Link>
        </BrowserRouter>
      )

      const text = screen.getByText("My Link", { exact: true })
      expect(text).toBeInTheDocument()
    })
  })
})
