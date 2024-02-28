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
                                            <h1><b>Who Am I?</b></h1>
                                            <p>I am a senior at Virginia Tech, majoring in Computer Science and minoring in Mathematics.
                                                I am excited about the prospect of expressing my skills, knowledge, and passion in the vast field of computer science.
                                            </p>
                                            <p>Throughout my academic journey, I have been captivated by the intricate world of software development. 
                                                My coursework has provided me with a solid foundation in programming languages, algorithms, and data structures. 
                                                The combination of my education and hands-on projects has not only deepened my technical proficiency but also cultivated my ability to solve complex problems creatively.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
