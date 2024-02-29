import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="gallery" id='gallery'>
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <h1><b>Photo Gallery</b></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="box" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <div className="travel" style={{ display: 'flex', flexDirection: 'column', width: '32.5%' }}>
                                                <img src="images/scenic_hike.jpg" alt="scenic hike" style={{ maxWidth: '100%', paddingBottom: '15px' }} />
                                                <img src="images/scenic_path.JPG" alt="scenic path" style={{ maxWidth: '100%', paddingBottom: '15px' }} />
                                                <img src="images/new_york.JPG" alt="New York" style={{ maxWidth: '100%', paddingBottom: '15px' }} />
                                            </div>
                                            <div class="travel" style={{ display: 'flex', flexDirection: 'column', width: '32.5%' }}>
                                                <img src="images/nc_waterfall.jpg" alt="NC waterfall" style={{ maxWidth: '100%', paddingBottom: '15px' }} />
                                                <img src="images/va_waterfall.jpg" alt="VA waterfall" style={{ maxWidth: '100%', paddingBottom: '15px' }} />
                                                <img src="images/punta_cana.JPG" alt="Punta Cana" style={{ maxWidth: '100%', paddingBottom: '15px' }} />
                                            </div>
                                            <div class="travel" style={{ display: 'flex', flexDirection: 'column', width: '32.5%' }}>
                                                <img src="images/maine.jpg" alt="Maine" style={{ maxWidth: '100%', paddingBottom: '15px' }} />
                                                <img src="images/barcelona.JPG" alt="Barcelona" style={{ maxWidth: '100%', paddingBottom: '15px' }} />
                                                <img src="images/paris.JPG" alt="Paris" style={{ maxWidth: '100%', paddingBottom: '15px' }} />
                                            </div>
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