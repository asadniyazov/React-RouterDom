import React from 'react'
import "./Footer.scss"
function Footer() {
  return (
    <>
    <footer>
      <div class="icon">
        <div className="icon__div"><i class="fa-brands fa-twitter"></i></div>
        <div className="icon__div"><i class="fa-brands fa-facebook-f"></i></div>
        <div className="icon__div"><i class="fa-brands fa-github"></i></div>
      </div>

      
      <div className="footer__p"><p>Copyright © Your Website 2023</p></div>
    </footer>
    </>
  )
}

export default Footer