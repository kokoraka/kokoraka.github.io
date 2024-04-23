import * as React from "react"

type DocumentConfig = {
  title?: string
}

type Document = {
  title: string
}

export function useDocument (config: DocumentConfig): [Document, React.Dispatch<React.SetStateAction<Document>>] {
  const { title } = config

  const [document, setDocument] = React.useState<Document>({
    title: title || ""
  })

  React.useEffect(() => {
    window.document.title = document.title
  }, [document])

  return [document, setDocument]
}
