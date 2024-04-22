import React from 'react'
import style from "./Navbar.module.css"
import { useSelector } from 'react-redux'
export default function Navbar() {
  // with api
  // const name = useSelector((state)=>state?.user?.userInfo?.name)
  // without api
  const name = useSelector((state)=>state.user.name)
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Lamia App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contant</a>
        </li>
      </ul>
      <div className="navbarRight">
          <img
            className= {style.avatar}
            src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <span className={style.navbarName}>{name}</span>
        </div>
    </div>
   </div>
  </nav>

    </div>
  )
}
