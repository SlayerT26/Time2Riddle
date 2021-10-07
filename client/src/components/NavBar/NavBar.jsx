import { Link } from "react-router-dom"
import React from "react"
import './NavBar.css'


function NavBar() {
  return (
    <>
      <nav className="NavBar">
        <div className="Nav-Image">
          <img src="https://i.imgur.com/3l4jp3Y.png" alt="ransom" width="1000px" />
        </div>
        <div className="Nav-Div">
          <Link to='/Riddles' id="RiddleLink">
            <h1 className='Nav-h1'>Riddle</h1>
          </Link>
          <Link to='/Create' id="CreateLink">
            <h1 className='Nav-h1'>Create</h1>
          </Link>
          <Link to='/Profile' id="ProfileLink">
            <h1 className='Nav-h1'>Profile</h1>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar