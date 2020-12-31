import React, { Component } from 'react'
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer_back">
                    <div className="container">
                        <h2 className="text-center">Movie Database</h2>
                        <div className="row">

                            <div className="col-md-4">

                                <ul>
                                    <li>New Movies</li>
                                    <li>BlockBuster Movies</li>
                                    <li>Love Movies</li>
                                    <li>Action Movies</li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li>Fantasy Movies</li>
                                    <li>Crime Thilller movies</li>
                                    <li>Animation & adventure Movies</li>
                                    <li>Horror Movies</li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li>New Movies</li>
                                    <li>BlockBuster Movies</li>
                                    <li>Love Movies</li>
                                    <li>Action Movies</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <h4 className="text-center">CopyRights@movie2020</h4>
                </div>

            </div>
        )
    }
}

export default Footer
