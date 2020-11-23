import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p><b>Senior Web Developer </b>with six years of experience in HTML, CSS, JavaScript based frameworks.
Developed many web projects for business purpose chatting applications, e-commerce systems. </p>
                    <p>My areas of
expertise are JavaScript (React.js, Angular JS, Node.js), Redux, HTML, CSS, MongoDB and AWS. </p>

<p>The following is a snapshot of my broader technical skills,</p>

<p>- Designed and developed web applications using HTML5, CSS3, React.js and AngularJS.</p>

<p>- Developed web projects for business purpose chatting applications, e-commerce systems.</p>

<p>- Very good knowledge in building tools like Gulp and Webpack.</p>

<p>- Agile project management.</p>

<p>- Very good knowledge in continuous versioning systems like GIT and SVN.</p>

<p>- Basic knowledge in backend technologies like Node.js and MongoDB, Java.</p>

<p>- Good knowledge in AWS.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">My Projects</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Ecommerce Website </h3>
                    <p>A mobile web site for a top eCommerce company, single-page application (SPA) based on React.js </p>
   <p> Built with React.js and Angular in the front-end and Node.js and MongoDB in the backend.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>E-Learning Website</h3>
                    <p>E-learning website to digitalize and incorporate social tasks into classes. </p>
                    <p>Built with React.js and Node.js and handled features like Flux, Hooks, Context and Redux.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>WEB PARSER</h3>
                    <p>Developed a Java library for a chat application.</p>
                    <p>Library provides an API that accepts a website URL and generates user readable HTML
content by parsing the website's meta data.</p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
