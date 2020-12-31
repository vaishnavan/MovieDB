import React, { Component } from 'react'
import './movieform.css'

class MovieForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             movieName:'',
             url:'',
             language:'',
             rating:null
        }
    }

    handleChange = (e) =>{
        const {name,value} = e.target

        this.setState({
            [name]:value
        })
    }

    handleSubmit = (e) =>{
        // e.preventDefault();
        const movieData = {
            movieName:this.state.movieName,
            url:this.state.url,
            language:this.state.language,
            rating:this.state.rating
        }
        this.props.getData(movieData)
    }
    




    render() {
        return (
            <div className="movieform">
                <div className="container movie_container">
                    <form onSubmit={this.handleSubmit} autoComplete="off">
                        <div className="form-group">
                            <label >Movie Name</label>
                            <input type="text" className="form-control" name="movieName" onChange={this.handleChange}  />
                            
                        </div>
                        <div className="form-group">
                            <label >URL</label>
                            <input type="text" className="form-control" name="url" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label >Language</label>
                            <input type="text" className="form-control" name="language" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label >Rating</label>
                            <input type="number" className="form-control" name="rating" onChange={this.handleChange} />
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default MovieForm
