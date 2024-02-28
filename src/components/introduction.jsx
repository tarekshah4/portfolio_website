import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: 'url(images/me_intro.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! <br />I'm Tarek Shah</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1QLK-1g3qj5ulM6uAaYjKwCqTEO2D0WbE0BZEOjfAwVo/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: 'white', borderColor: 'white' }}>View Resume<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/virginia_tech.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h2><b>I study at<br /> Virginia Tech</b></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/venice.JPG)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h2 style={{marginTop: '-280px', marginLeft: '0px', color: 'black'}}><b>I enjoy traveling</b></h2>
                          {/* <p><a className="btn btn-primary btn-learn" href="/gallery.html" target="_blank" rel="noopener noreferrer" style={{ color: 'black', borderColor: 'black', marginTop: '-30px', marginLeft: '5px'}}>View Gallery <i className="icon-camera"/></a></p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
