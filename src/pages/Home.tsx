import * as React from "react"
import { useAutoPosition, useHashFragment } from "../hooks"
import { Container } from "../components/Container"
import { Meta } from "../components/Meta"

export default function Home(): React.JSX.Element {
  useAutoPosition()
  useHashFragment()

  return (
    <>
      <Meta>
        {{
          title: "Home",
          description: "Home"
        }}
      </Meta>
      <Container size="md">
        Home page
      </Container>
    </>
  )
}