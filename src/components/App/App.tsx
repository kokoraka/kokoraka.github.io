import * as React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ReactGA from "react-ga4"
import { ThemeProvider } from "../../components/Theme"
import { MetaProvider } from "../../components/Meta"
import { routes } from "../../routes"
import "./App.css"

ReactGA.send({ hitType: "pageview", page: window.location.pathname })

const meta = {
  titleTemplate: "Raka Site | %s",
  titleFallback: "Raka Site",
  descriptionFallback: "Raka Site",
  keywordsFallback: "raka, suryaardi, widjaja, software, development, engineer, web, site, project, consultant, portofolio",
  typeFallback: "website",
  urlFallback: window.location.href,
  imageFallback: `${process.env.REACT_APP_PUBLIC_URL}/image/meta.png`,
  markupSchemaFallback: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Raka Site",
    "image": "https://kokoraka.github.io/image/meta.png",
    "@id": "https://kokoraka.github.io/",
    "url": "https://kokoraka.github.io/",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "00:00"
    },
    "sameAs": [
      "https://www.facebook.com/Raka.S.W/",
      "https://www.linkedin.com/in/raka-suryaardi-widjaja/",
    ]
  },
  twitterSchemaFallback: {
    "card": "summary_large_image",
  }
}
export default function App(): React.JSX.Element {
  return (
    <ThemeProvider theme="consultant">
      <MetaProvider meta={meta}>
        <Router>
          <Routes>
            {
              routes.map((route, i) => {
                return <Route {...route} key={`route-item-${i}`} />
              })
            }
          </Routes>
        </Router>
      </MetaProvider>
    </ThemeProvider>
  )
}