import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Hi I'm Ayni</strong> 👋
        <br />
        a Full-stack Developer
        <br />
        based in Boston, MA
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
