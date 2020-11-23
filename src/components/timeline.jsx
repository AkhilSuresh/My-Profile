import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Highlights</span>
                <h2 className="colorlib-heading animate-box">TIMELINE</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>LEAD ENGINEER, QBURST TECHNOLOGIES <span>2014-present</span></h2>
                        <p>- Leading the development, testing and deployment of the web applications. </p>
                        <p>- Improving existing, and developing new e-commerce products and applications. </p>
                        <p>- Creating custom AngularJS components for internal framework. </p>
                        <p>- Developing responsive prototypes based on business requirements using HTML5, CSS3, JavaScript.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>FREELANCE DEVELOPER, UPWORK<span> 2017-2019</span></h2>
                        
                        <p>- Actively worked with an agile team for developing new user-facing features using React.js.</p>
                        <p>- Built reusable components and front-end libraries.</p>
                        <p>- Familiarized with Restful API.</p>
                        <p>- Maintained active conversation with the client to ensure that the work met their needs.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>BACHELOR OF TECHNOLOGY, ELECTRONICS AND COMMUNICATION <span>2010-2014</span></h2>
                        <p>I have completed my bachelors degree in Electronics and Communication Engineering with CGPA 7.87.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
