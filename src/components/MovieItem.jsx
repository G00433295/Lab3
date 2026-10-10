// Import the Card component from React Bootstrap
import Card from 'react-bootstrap/Card';
// MovieItem function displays information about a movie
// using the movie data passed in through props.
export default function MovieItem(props) {
    // Returns the movie details and card layout to display
    return (
        <div>
            {/* Displays the movie title and year */}
            <h3>{props.mymovie.Title}</h3>
            <p>{props.mymovie.Year}</p>
            {/* Displays the movie poster image */}
            <img src={props.mymovie.Poster}></img>
            {/* Creates a Bootstrap card for the movie */}
            <Card style={{ width: '200px', height: '200px' }}>
                {/* Displays the movie poster at the top of the card */}
                <Card.Img variant="top" src={props.mymovie.Poster} />
                <Card.Body>
                    {/* Displays the movie title inside the card */}
                    <Card.Title>{props.mymovie.Title}</Card.Title>
                    {/* Displays the movie release year inside the card */}
                    <Card.Text>
                        {props.mymovie.Year}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
