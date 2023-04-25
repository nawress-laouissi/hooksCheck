import React from 'react'
import { Button, Card } from 'react-bootstrap'

function MovieCard({movie}) {
  return (
    <div style={{display:"inline-block",justifyContent:"space-between", padding:"25px"}}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterURL} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <Button variant="primary">{movie.rating}</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard