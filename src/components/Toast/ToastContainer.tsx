import * as React from "react"
import * as ReactDOM from "react-dom"
import { ToastContainer as Container } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

type ToastContainerProps = {
  portalId?: string
}

function createContainer(): React.JSX.Element {
  return (
    <>
      <Container position="top-center" />
    </>
  )
}

export function ToastContainer(props: ToastContainerProps): React.JSX.Element {
  const {
    portalId
  } = props

  if (!portalId) {
    return createContainer()
  }

  return (
    document.getElementById(portalId) ?
      ReactDOM.createPortal(createContainer(), document.getElementById(portalId)!)
      : createContainer()
  )
}
