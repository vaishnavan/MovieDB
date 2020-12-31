import React from 'react'

class VideoForm extends React.Component{

    constructor(){
        super()

        this.state ={
            title:'',
            videoUrl:''
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
        const songData ={
            title:this.state.title,
            videoUrl:this.state.videoUrl
        }
        this.props.videoData(songData)
        
    }

    render()
    {
        return(
            <>
            <div className="container movie_container">
                    <form onSubmit={this.handleSubmit} autoComplete="off">
                        <div className="form-group">
                            <label >Title</label>
                            <input type="text" className="form-control"  name="title" onChange={this.handleChange} />
                            
                        </div>
                        <div className="form-group">
                            <label >VideoURL</label>
                            <input type="text" className="form-control" name="videoUrl" onChange={this.handleChange}  />
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
                
            </>
        )
    }
}

export default VideoForm