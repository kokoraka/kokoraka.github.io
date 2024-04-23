import * as React from "react"
import {
  RouteProps, Route,
  // Navigate, NavigateProps,
  // generatePath, useParams
} from "react-router-dom"

import Guest from "./layouts/Guest"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"

// import loadable from "@loadable/component"
// import { Spinner } from "@allied/react-web/Spinner"

// const Loader = <Spinner size="md" appendClassNames="m-4" labeled />
// const Page = loadable((props: { name: string }) => import(`./pages/${props.name}`), {
//   cacheKey: (props) => props.name,
//   fallback: Loader
// })

// const NavigateParams = ({ to, ...props }: NavigateProps) => {
//   const params = useParams()
//   return <Navigate {...props} to={generatePath(to.toString(), params)} />
// }

const guests: RouteProps[] = [
  { path: "/", element: <Home /> },
  { path: "*", element: <NotFound /> },
]

export const routes: RouteProps[] = [
  {
    path: "/",
    element: <Guest />,
    children: guests.map((route, i: number) => {
      return <Route {...route} key={`guest-item-${i}`} />
    })
  },
]
