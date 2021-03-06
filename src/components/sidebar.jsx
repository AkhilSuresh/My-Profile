import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Akhil Suresh</a></h1>
              <span className="email"><i className="icon-mail"></i> akhilsuresh888@gmail.com</span>
              <span className="email"><i className="icon-phone"></i> +49 1781901607</span>
              <br />
              <span>Rosenheimer Landstraße 41, Ottobrunn </span>
              <span> 85521, Munich</span>
              <br />
            </div>
            <br />
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>

                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
              <br />
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/akhil-suresh-31a634a1/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/AkhilSuresh" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://www.facebook.com/akhil.suresh.18/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.instagram.com/_akhils_/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
