import * as React from "react"
import { Container } from "../components/Container"
import { ButtonLink } from "../components/Button"
import { Meta } from "../components/Meta"

export default function NotFound(): React.JSX.Element {
  return (
    <>
      <Meta>
        {{
          title: "404 Page not found"
        }}
      </Meta>
      <Container size="md">
        <div className="h-screen flex flex-col justify-center items-center">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="text-center">
              <h1 className="font-bold text-lg">
                Page not found
              </h1>
              <p>
                The page you're looking for is not available. <br />
                Please make sure you're following the correct link.
              </p>
            </div>

            <ButtonLink to="/">
              Back to Home
            </ButtonLink>
          </div>
        </div>
      </Container>
    </>
  )
}
