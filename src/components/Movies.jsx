// Import the MovieItem component to display individual movies
import MovieItem from "./MovieItem";

// Movies function displays a list of movies passed in through props
export default function Movies(props) {

  // Uses map() to loop through the movies array
  // and create a MovieItem component for each movie
  return props.movies.map(
    (movie) => {

        // Passes the current movie's data to MovieItem
        // and uses imdbID as a unique key for React
        return <MovieItem mymovie={movie} key={movie.imdbID}></MovieItem>
    }
      
  )
}
