import React from "react";
import {toast, ToastContainer} from "react-toastify";
import Logo from "./Logo";
import Menu from "./Menu";

export default function NavPanel() {

  const showWarning = () => {
    toast.warn("Эта функциональность в данный момент недоступна");
  }

  return (
      <div className="nav-panel">
        <div className="container">
          <div className="nav-panel__components">
            <Logo/>
            <Menu/>
            <ToastContainer/>
          </div>
        </div>
      </div>
  )
}
