import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./moviesLike";
class Movie extends Component {
  state = {
    movies: getMovies()
  };

  componentDidMount() {
    this.setState({
      movies: this.state.movies.map(movie => {
        movie.like = false;
        return movie;
      })
    });
  }
  deleteMovie = movie => {
    this.setState({
      movies: this.state.movies.filter(elements => {
        return elements._id !== movie._id;
      })
    });
  };

  handleLike = movie => {
    console.log(movie);
    this.setState({
      movies: this.state.movies.map(elements => {
        if (elements._id === movie._id) {
          elements.like = !elements.like;
        }
        return elements;
      })
    });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <h2> there is no movies </h2>;
    else
      return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th>Like</th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map(movie => (
                <tr key={movie._id}>
                  <th>{movie.title}</th>
                  <th>{movie.genre.name}</th>
                  <th>{movie.numberInStock}</th>
                  <th>{movie.numberInStock}</th>
                  <th>
                    <Like movie={movie} onLike={this.handleLike} />
                  </th>
                  <th>
                    <button onClick={() => this.deleteMovie(movie)}>
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default Movie;
