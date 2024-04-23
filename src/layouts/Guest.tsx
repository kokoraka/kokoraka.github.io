import * as React from "react"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "../components/Toast"

export default function Guest(): React.JSX.Element {
  return (
    <div className="font-roboto">
      <ToastContainer />
      <div className="min-h-screen">
        <Outlet />
      </div>
    </div>
  )
}