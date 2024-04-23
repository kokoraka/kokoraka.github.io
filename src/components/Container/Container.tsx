import * as React from "react"
import { ContainerSize, ContainerSizeProps, ContainerStyle } from "./Resource"

type ContainerProps = {
  children?: React.ReactNode
  size?: ContainerSizeProps
  appendClassNames?: string
  style?: React.CSSProperties
  onClick?: () => void
}

const styleBuilder = new ContainerStyle()

export function Container(props: ContainerProps): React.JSX.Element {
  const {
    size = ContainerSize.MEDIUM,
  } = props

  const handleClick = () => {
    props.onClick && props.onClick()
  }

  const styleClassNames = styleBuilder
    .setSize(size)
    .appendClassNames(props.appendClassNames)
    .build()

  return (
    <div onClick={handleClick}
      className={styleClassNames}
      style={props.style}>
      {props.children}
    </div>
  )
}
