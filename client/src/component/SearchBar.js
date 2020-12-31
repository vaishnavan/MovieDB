import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Searchbox extends Component {





    render() {
        return (
            <div className="search">
                <Link to="/" >
                    <h4>Back</h4>
                </Link>

                <div className="container">
                    <div className="row">
                        <div className="col search_input">
                            <input type="search" placeholder="search by languange..." onChange={this.props.handleInput} />


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Searchbox
