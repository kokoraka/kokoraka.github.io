import * as React from "react"
import { useLocation } from "react-router-dom"

export function useHashFragment() {
  const location = useLocation()
  const lastHash = React.useRef("")

  // listen to location change using useEffect with location as dependency
  // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
  React.useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1) // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        const element = document.getElementById(lastHash.current)
        if (!element) {
          return
        }
        
        element.scrollIntoView({ 
          behavior: "smooth", 
          block: "start"
        })
        lastHash.current = ""
      }, 100)
    }
  }, [location])
}

export function useAutoPosition () {
  React.useEffect(() => {
    window.scrollTo({
      top: 0, 
      behavior: "smooth"
    })
  }, [])
}
