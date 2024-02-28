import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h1><b>Timeline</b></h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon">
                        <img src="images/vt_logo.png" alt="VT Icon" width="70" height="35" style={{ marginTop: '25px' }}/>
                      </div>
                      <div className="timeline-label">
                        <h2 style={{margin: '0 0 10px 0'}}>B.S. in Computer Science at Virginia Tech</h2>
                        <span>2021 — 2024</span>
                        <p></p>
                        <p>Throughout my time at Virginia Tech, I believe that I have achieved and experienced great things.
                          From jumping to "Enter Sandman" at Lane Stadium during football games, to spending countless hours on CS projects, I am truly grateful for everything that I have been through.
                          I have taken a diverse set of classes, spanning across multiple disciplines which has allowed me to improve my trans-disciplinary knowledge. Some of my favorite classes include
                          Introduction to Aritifical Intelligence, Introduction to GUI Programming, Cryptography, Morality and Justice, and Life in the Built Environment. 
                          I was also a part of the Alpha Sigma Phi Fraternity, where I cultivated friendships and contributed to various philanthropic initiatives within the community.
                          I have made lifelong friends and memories, and I know that I will always feel at home at Virginia Tech.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon i">
                        <img src="images/altamira_logo.jpg" alt="Altamira Icon" width="77" height="75" style={{ marginTop: '3px' }}/>
                      </div>
                      <div className="timeline-label">
                        <h2 style={{margin: '0 0 10px 0'}}>Software Engineer Intern at Altamira Technologies Corporation</h2>
                        <span>May 2023 — August 2023</span>
                        <p></p>
                        <p>Interning at Altamira Technologies Corporation was one of the most rewarding, yet challenging experiences that I have ever had.
                          The internship surpassed all expectations, leaving me with newfound knowledge, invaluable skills, and a solid foundation as I prepare to embark on my professional journey.
                          Every day presented a new opportunity to learn, innovate, and adapt to obstacles that emerged. As a result, I have become a more well-rounded individual, who can navigate through anything that is thrown at me.
                          Beyond my technical growth, this internship gifted me with incredible mentors and peers, whose guidance and support propelled me forward. 
                          I am extremely grateful for this opportunity and am excited to apply what I have learned to my future endeavors.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon i">
                      <img src="images/altamira_logo.jpg" alt="Altamira Icon" width="77" height="75" style={{ marginTop: '3px' }}/>
                      </div>
                      <div className="timeline-label">
                        <h2 style={{margin: '0 0 10px 0'}}>Full-time Software Engineer at Altamira Technologies Corporation</h2>
                        <span>Starting June 2024</span>
                        <p></p>
                        <p>As a full-time software engineer at Altamira Technologies Corporation, I will work collaboratively with other engineers to provide innovative solutions to the U.S. National Security community.
                          My role and responsibilities will include the following:
                          <ul>
                              <li>Produce software based on desired functionality provided by users and analysts</li>
                              <li>Interpret mission needs and requirements to produce user-friendly software systems</li>
                              <li>Leverage continuous integration to create sustainable and maintainable software</li>
                              <li>Interact with teammates and users through whiteboard sessions and/or design documents to establish circular feedback</li>
                          </ul>
                        </p>
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
