import React from "react"
import { Header } from "./Header"
import Crea from "../../assets/Crea.svg"

export const Hero = () => (
  <div className="hero">
    <div className="container ">
      <Header />
      <main>
        <div>
          <h1> State Of Dev In Morocco 2020 </h1>
          <p>
            Take part in the survey and let the us know what the web developer’s
            job really looks like in Morocco
          </p>
          <button className="primary"> Take Part In The Survey </button>
        </div>
        <Crea />
      </main>
    </div>
  </div>
)