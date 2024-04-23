import ReactGA from "react-ga4"

type GoogleAnalyticsOption = {
  gaId?: string
  loadDelay?: number
}

export function initGoogleAnalytics(opts?: GoogleAnalyticsOption) {
  const {
    gaId = "",
    loadDelay = 3500
  } = opts || {}

  if (!gaId) {
    return
  }

  function onEvent(event: Event) {
    initGTM(gaId)
    event.currentTarget?.removeEventListener(event.type, onEvent)
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => { initGTM(gaId) }, loadDelay)
  })
  document.addEventListener("scroll", onEvent);
  document.addEventListener("mousemove", onEvent);
  document.addEventListener("touchstart", onEvent);
}

function initGTM(gaId: string) {
  ReactGA.initialize(gaId)
}
