import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const MovieDetail = ({ movie, setPage }) => {
  if (!movie) return null; // If no movie is selected, return null

  return (
    <Container className="mt-5">
      <Card>
        <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>
            <strong>Release Year:</strong> {movie.Year}
          </Card.Text>
          <Card.Text>
            <strong>Plot:</strong> {movie.Plot}
          </Card.Text>
          <Button variant="danger" onClick={() => setPage('home')}>
            Back to Search
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MovieDetail;
