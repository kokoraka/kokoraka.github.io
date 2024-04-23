import * as React from "react"
import { hydrate, render } from "react-dom"
import { reportWebVitals } from "./scripts/WebVitals"
import { initGoogleAnalytics } from "./scripts/GoogleAnalytics"
import App from "./components/App/App"

function main () {
  const rootElement = document.getElementById("root")
  if (!rootElement) {
    return
  }
  
  const indexElement = <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
  
  if (rootElement.hasChildNodes()) {
    hydrate(indexElement, rootElement)
  } else {
    render(indexElement, rootElement)
  }
  
  initGoogleAnalytics({
    gaId: process.env.REACT_APP_GOOGLE_ANALYTICS_ID
  })
  reportWebVitals()

}

main()