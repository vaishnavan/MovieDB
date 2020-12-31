import React, { Component } from 'react'
import Banner from './Banner'
import Footer from './Footer'
import './moviedisplay.css'
import { Link } from 'react-router-dom'


function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


class MovieDisplay extends Component {




    render() {
        const shuffledPosts = shuffleArray(this.props.videoSong);
        return (
            <div className="moviedisplay">

                {/* banner */}
                <Banner />

                {/* latest songs */}
                <div className="all_movie">
                    <Link to="/allmovie">
                        <h4>All Movies</h4>
                    </Link>
                </div><br/><br/>
                <h3>Latest Video Songs</h3>
                <div className="container ind">
                    {shuffledPosts.map((e) => {
                        return (
                            <div className="player_ind">
                                <iframe title="video" width="400" height="205" src={e.videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                                <p style={{ color: "white" }} >{e.title}</p>
                            </div>
                        )
                    })}
                </div>


                {/* movie details */}
                <h3>Top Tamil movies</h3>
                <div className="container ind">

                    {this.props.movied.reverse().map((e) => e.language === "Tamil" ?
                        <div className="player_ind">
                            <img src={e.url} alt="no" width="250px" height="300px" />
                            <p className="lang_name">{e.movieName} <span>({e.language})</span> </p>
                            <p className="rate">Movie Rating: {e.rating}%</p>
                        </div>
                        :
                        ""
                    )}
                </div>
                <h3>Top Kannada movies</h3>
                <div className="container ind">

                    {this.props.movied.reverse().map((e) => e.language === "Kannada" ?
                        <div className="player_ind">
                            <img src={e.url} alt="no" width="250px" height="300px" />
                            <p className="lang_name">{e.movieName} <span>({e.language})</span> </p>
                            <p className="rate">Movie Rating: {e.rating}%</p>
                        </div>
                        :
                        ""
                    )}
                </div>
                <h3>Top Telugu movies</h3>
                <div className="container ind">

                    {this.props.movied.reverse().map((e) => e.language === "Telugu" ?
                        <div className="player_ind">
                            <img src={e.url} alt="no" width="250px" height="300px" />
                            <p className="lang_name">{e.movieName} <span>({e.language})</span> </p>
                            <p className="rate">Movie Rating: {e.rating}%</p>
                        </div>
                        :
                        ""
                    )}
                </div>
                <h3>Top Hindi movies</h3>
                <div className="container ind">

                    {this.props.movied.reverse().map((e) => e.language === "Hindi" ?
                        <div className="player_ind">
                            <img src={e.url} alt="no" width="250px" height="300px" />
                            <p className="lang_name">{e.movieName} <span>({e.language})</span> </p>
                            <p className="rate">Movie Rating: {e.rating}%</p>
                        </div>
                        :
                        ""
                    )}
                </div>

                <h3>Top English movies</h3>
                <div className="container ind">

                    {this.props.movied.reverse().map((e) => e.language === "English" ?
                        <div className="player_ind">
                            <img src={e.url} alt="no" width="250px" height="300px" />
                            <p className="lang_name">{e.movieName} <span>({e.language})</span> </p>
                            <p className="rate">Movie Rating: {e.rating}%</p>
                        </div>
                        :
                        ""
                    )}
                </div>

                {/* Footer */}
                <Footer />


            </div>
        )
    }
}

export default MovieDisplay
