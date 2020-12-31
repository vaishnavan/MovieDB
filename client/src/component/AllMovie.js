import React, { Component } from 'react'
import './allmovie.css'

export class AllMovie extends Component {
    render() {
        return (
            <div>
                <div className="count">
                    <p>Movie Count : {this.props.movied.length}</p><br/><br/>
                </div>
                <div className="container movie_left">
                    {this.props.movied.reverse().map((e) => {
                        return (
                            <div className="movie_grid">
                                <img src={e.url} alt="no" width="200" height="250" />
                                <div class="overlay">
                                    <div class="text">{e.movieName}</div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        )
    }
}

export default AllMovie
