import React from 'react'
import MovieForm from './component/MovieForm'
import Axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MovieDisplay from './component/MovieDisplay'
import VideoForm from './component/VideoForm'
import AllMovie from './component/AllMovie'
import SearchBar from './component/SearchBar'
import './App.css'



class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      movData: [],
      songs: [],
      search: ''
    }
  }



  create = (movieData) => {
    Axios.post('http://localhost:5000/', movieData)
      .then(res => {
        console.log(res)
      })
  }

  songs = (songData) => {
    Axios.post('http://localhost:5000/movieVideo', songData)
      .then(res => {
        console.log(res)
      })
  }

  componentDidMount() {
    this.getall();
    this.songall();
  }


  getall() {
    Axios.get('http://localhost:5000/allmovie')
      .then(res => {
        this.setState({ movData: res.data })
        console.log(this.state.movData)
      })
  }

  songall() {
    Axios.get('http://localhost:5000/allmovievideo')
      .then(res => {
        
        this.setState({ songs: res.data })
        console.log(this.state.songs)
      })
  }

  handleInput = e => {
    // console.log(e.target.value)
    this.setState({ search: e.target.value })
  }




  render() {
    let filtered = this.state.movData.filter(searchdata => {
      return searchdata.language.toLowerCase().includes(this.state.search.toLowerCase())
    })
    const { songs } = this.state;
    return (
      <>
        <Router>
          <Route exact path="/">
            <MovieDisplay movied={filtered} videoSong={songs} />
          </Route>
          <Route path="/movieForm">
            <MovieForm getData={this.create} />
          </Route>
          <Route path="/videoForm">
            <VideoForm videoData={this.songs} />
          </Route>
          <Route path="/allmovie">
            <SearchBar handleInput={this.handleInput} /><br /><br />
            <AllMovie movied={filtered} />
          </Route>
        </Router>
      </>
    )
  }
}

export default App;