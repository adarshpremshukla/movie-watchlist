import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Watchlist = ({ watchlist, setWatchlist, setPage, logout }) => {
  const removeFromWatchlist = (movieID) => {
    setWatchlist((prevWatchlist) => prevWatchlist.filter(movie => movie.imdbID !== movieID));
  };

  return (
    <Container fluid>
      <Row className="mt-5">
        <Col md={3} className="p-4 justify-content-center">
          <h2 className="text-danger m-4">My Lists</h2>
          <ul className="list-unstyled gap-3 d-flex justify-content-center">
            <li className="my-3">
              <Button variant="outline-danger" block onClick={() => setPage('home')}>Home</Button>
            </li>
            {/* <li className="my-3">
              <Button variant="outline-danger" block onClick={logout}>Logout</Button>
            </li> */}
             <li className="my-3">
              <Button variant="btn btn-danger" block onClick={() => setPage('myLists')}>My Lists</Button>
            </li>
          </ul>
        </Col>

        <Col md={9}>
          <h2 className="text-danger d-flex justify-content-center mb-4">My Watchlist</h2>
          <Row>
            {watchlist.length > 0 ? (
              watchlist.map((movie) => (
                <Col md={4} lg={3} className="mb-4" key={movie.imdbID}>
                  <Card className="h-100">
                    <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
                    <Card.Body>
                      <Card.Title>{movie.Title}</Card.Title>
                      <Card.Text>{movie.Year}</Card.Text>
                      <Button variant="outline-danger" block onClick={() => removeFromWatchlist(movie.imdbID)}>
                        Remove from Watchlist
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p className="d-flex justify-content-center">Your watchlist is empty.</p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Watchlist;
