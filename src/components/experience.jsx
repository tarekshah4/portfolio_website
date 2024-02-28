import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="experience">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <h1><b>Work Experience</b></h1>
                                        <h3>Software Engineer Intern at Altamira Technologies Corporation</h3>
                                        <p>During my internship at Altamira Technologies Corporation, I contributed to a data processing project involving approximately 300 GB of financial data.
                                            The dataset intially took about 3 months to process; therefore, my team and I were tasked with significantly improving the processing time of the dataset.
                                            Additionally, we were tasked with properly visualizing the data to allow data analysts to identify potential fraudulent activities involving businesses or individuals.
                                            My team and I were able to condense and establish connections within the dataset, and we improved the processing time from taking 3 months to taking less than 1 day.
                                            I played a pivotal role in optimizing data processing workflows by utilizing multithreading techniques, implementing Apache Spark, and orchestrating deployments through Kubernetes.
                                            Additionally, I adeptly managed the extensive dataset using Elasticsearch and leveraged the Neo4j graph database management system for data visualization.
                                            Collaborating closely with my peers and colleagues, I contributed to a positive team dynamic, driving us to achieve project milestones and objectives efficiently.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-4">
                                    <div className="desc">
                                        <h3>Data Processing</h3>
                                        <p>Managed and queried vast datasets with ease using Elasticsearch and Kibana</p>
                                        <img src="images/Elasticsearch_Kibana.png" alt="Elasticsearch Icon" width="225" height="75" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <div className="desc">
                                        <h3>Container Orchestration</h3>
                                        <p>Orchestrated seamless deployments with Kubernetes and Docker Compose</p>
                                        <img src="images/Docker_K8s.png" alt="Docker Icon" width="175" height="75" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <div className="desc">
                                        <h3>Data Visualization</h3>
                                        <p>Utilized RabbitMQ to efficiently feed data into the Neo4j graph database for data visualization</p>
                                        <img src="images/RabbitMQ_to_Neo4j.jpg" alt="Neo4j Icon" width="175" height="75" />
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
