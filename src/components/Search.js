import axios from "axios";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Alert,
} from "react-bootstrap";

const Search = ({
  user,
  watchlist,
  setWatchlist,
  setPage,
  setSearchedMovies,
  searchedMovies,
}) => {
  const [query, setQuery] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const searchMovies = async () => {
    try {
      const apiKey = "41d7f21e"; 
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`
      );
      if (response.data.Search) {
        setSearchedMovies(response.data.Search);
      } else {
        setSearchedMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  const addToWatchlist = (movie) => {
    const exists = watchlist.find((item) => item.imdbID === movie.imdbID);
    if (!exists) {
      setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      alert("Movie is already in the watchlist!");
    }
  };

  return (
    <Container fluid>
      <Row className="mt-5">
        <Col md={3} className=" p-4 justify-content-center">
          <h2 className="text-danger m-4">Watchlists</h2>
          <ul className="list-unstyled gap-3 d-flex justify-content-center">
            <li className="my-3">
              <Button
                variant="btn btn-danger"
                block
                onClick={() => setPage("home")}
              >
                Home
              </Button>
            </li>
            <li className="my-3">
              <Button
                variant="outline-danger"
                block
                onClick={() => setPage("myLists")}
              >
                My Lists
              </Button>
            </li>
          </ul>
        </Col>

        <Col md={9}>
          <h2 className="text-danger mb-4">Welcome to Watchlists</h2>
          <p className="d-flex justify-content-center">Browse movies, add them to watchlists, and share with friends.</p>
          <p className="d-flex justify-content-center">Just click the "Add to Watchlist" to add a movie in the list.</p>

          <Form className="d-flex mb-2  p-4">
            <Form.Control
              type="text"
              placeholder="Search for movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button className="ms-2" variant="danger" onClick={searchMovies}>
              Search
            </Button>
          </Form>

          {showAlert && (
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              Movie has been added to your watchlist!
            </Alert>
          )}

          <Row>
            {searchedMovies.length > 0 ? (
              searchedMovies.map((movie) => (
                <Col md={4} lg={3} className="mb-4" key={movie.imdbID}>
                  <Card className="h-100">
                    <Card.Img
                      variant="top"
                      src={movie.Poster}
                      alt={movie.Title}
                      className="img-fluid"
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="flex-grow-1">
                        {movie.Title}
                      </Card.Title>
                      <Button
                        variant="outline-success"
                        onClick={() => addToWatchlist(movie)}
                      >
                        Add to Watchlist
                      </Button>
                      {/* Show movie details below the poster */}
                      <div className="mt-2">
                        <p>
                          <strong>Release Year:</strong> {movie.Year}
                        </p>
                        <p>
                          <strong>Plot Summary:</strong>{" "}
                          {movie.Plot || "No plot available."}
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p className="d-flex justify-content-center">No movies found.</p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
