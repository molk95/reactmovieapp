import React from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import Loading from "./loading"


export default class MovieList extends React.Component {
  state = {
    visible: false,
    loading: true
  };

  addOne = event => {
    this.setState({
      visible: true
    });
  };
  close = event => {
    this.setState({
      visible: false
    });
  };
componentDidMount (){
  setTimeout(()=> this.setState({
    loading:false
  }),2000)
}
  
  render() {
    return (
      <div>
         {this.state.loading ? <Loading/> :
     
        <div 
        className="movie-list" >
          
         
          {this.props.list.map(el => (
            <MovieCard movie={el} />
          ))}
          <AddMovie onAdd={this.addOne} />
       
        <div className="modal"
          
          style={{ display: this.state.visible ? "flex" : "none" }}
        >
          <div className="add-movie-form">
            <div className="menu-nav">
              <h4>Please Enter Movie Information</h4>
              <input
                type="button"
                onClick={this.close}
                value="X"
              />
            </div>
            <div className="add-movie-form">
              <div className="new-movie-title">
                <span>Title:</span>
                <input
                  placeholder="Type Movie Title..."
                  className="new-movie-title-input"
                  type="text"
                  name="title"
                  onChange={this.props.change}
                />
              </div>
              <div className="new-movie-url">
                <span>Image:</span>
                <input
                  placeholder="Type/Copy URL Please..."
                  className="new-movie-url-input"
                  type="text"
                  name="picture"
                  onChange={this.props.change}
                />
              </div>
              <div className="new-movie-year">
                <span>Year:</span>
                <input
                  placeholder="Type The Movie Date...."
                  className="new-movie-year-input"
                  type="text"
                  name="date"
                  onChange={this.props.change}
                />
              </div>
              <div className="new-movie-rating">
                <span>Rating:</span>
                <input
                  className="new-movie-rating-input"
                  placeholder="How Many Stars...?"
                  type="text"
                  name="rating"
                  onChange={this.props.change}
                  value={this.props.rating}
                />

                <input
                  className="btn"
                  type="button"
                  onClick={() => {
                    if (this.props.rating.match(/[0-5]/g)) {
                  
                      this.close();
                    } else return alert("Please enter a valid rating");
                  }}
                  value="OK"
                />
              </div>
            </div>
          </div>
        </div>
        </div>}
        </div>
    );
  }
}
