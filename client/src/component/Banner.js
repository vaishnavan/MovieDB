import React, { Component } from 'react'
import './banner.css'

class Banner extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://images.wallpapersden.com/image/download/aladdin-2019-movie-banner-8k_a2plaGqUmZqaraWkpJRnamtlrWZpaWU.jpg" className="d-block w-100" alt="no" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.pinimg.com/originals/6a/05/cd/6a05cd3a8c00852a123922c1a87c0aa4.jpg" className="d-block w-100" alt="no" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://apnafilms.com/wp-content/uploads/2016/10/neerjanam-telugu-film-posters-3.jpg" className="d-block w-100" alt="no" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
        )
    }
}

export default Banner
