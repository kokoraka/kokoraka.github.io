import * as React from "react"
import { render, screen } from "@testing-library/react"
import { Container } from "./Container"

describe("Container component", () => {
  describe("when container is rendered", () => {
    it("should render the children", () => {
      render(
        <Container>
          Content
        </Container>
      )

      const content = screen.getByText("Content", { exact: true })
      expect(content).toBeInTheDocument()
    })
  })
})
