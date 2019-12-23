import React, { Component, Suspense  } from "react";
import MovieList from "./MovieList";
import SearchMovie from "./SearchMovie";
import RatingFilter from "./RatingFilter";

const movies = [
  {
    id: "yourname",
    title: "Your Name.",
    date: "2016",
    picture: "http://fr.web.img2.acsta.net/pictures/16/12/12/13/49/295774.jpg",
    rating: 5
  },
  {
    id: "levoyage",
    title: "Le Voyage de Chihiro",
    date: "2001",
    picture:
      "https://www.glenat.com/sites/default/files/images/livres/couv/9782344029572-001-T.jpeg",
    rating: 4
  },

  {
    id: "chihir",
    title: "Silent Voice",
    date: "2017",
    picture:
      "https://is2-ssl.mzstatic.com/image/thumb/Video123/v4/3e/86/3a/3e863a8b-b38c-097e-34a8-f9ccccdb7c8e/IT104990_artwork.jpg/268x0w.jpg",
    rating: 5
  },
  { id: "whatever", title: "Whatever", rating: 3,picture:"https://img.reelgood.com/content/movie/a76205c0-d140-435c-a765-436e41f5194f/poster-780.jpg", date: 1999 },
  {
    id: "homelone",
    title: "Home Alone",
    picture: "https://static.fnac-static.com/multimedia/0/Images/BE/NR/46/81/67/6783302/1540-1/tsp20150423094309/HOME-ALONE-1-MAMAN-J-AI-RATE-L-AVION-1-BILINGUE.jpg",
    rating: 1,
    date: 2000
  },
  {
    id: "homeAlone",
    title: "Home Alone 2",
    picture: "https://is2-ssl.mzstatic.com/image/thumb/Video128/v4/f8/2b/7e/f82b7e33-008c-a3f4-f1ec-15119f1762f6/contsched.eswthldk.lsr/268x0w.jpg",
    rating: 2,
    date: 2001
  }
];

export default class MovieContainer extends React.Component {
  state = {
    movieadded: movies,
    picture: "",
    title: "",
    date: "",
    rating: "",
    searchText: "",
    stars: 0,
    loading: true
  };

  changeInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  newMovie = () => {
    this.setState({
      movieadded: [
        ...this.state.movieadded,
        {
          picture: this.state.picture,
          title: this.state.title,
          date: this.state.date,
          rating: this.state.rating
        }
      ]
    });
  };
  searchMovie = event => {
    this.setState({
      searchText: event.target.value
    });
  };
  rater = clicked => {
    this.setState({
      stars: clicked
    });
  };
  
  render() {
    return (
      <div className="movie-app">
        <div className="movie-app-header">
          <SearchMovie search={this.searchMovie} />

          <RatingFilter rate={this.state.stars} starClicked={this.rater} />
        </div>

        <main className="movie-app-main">
          <MovieList
            list={this.state.movieadded
              .filter(movie => movie.rating >= this.state.stars)
              .filter(el =>
                el.title
                  .toLowerCase()
                  .includes(this.state.searchText.toLowerCase())
              )}
            change={this.changeInput}
            new={this.newMovie}
            rating={this.state.rating}
          />
        </main>
      </div>
    );
  }
}
