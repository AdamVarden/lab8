import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
class MovieItem extends React.Component {
 render(){
    return (
    //   <div className="App">
    //     <h4>{this.props.movie.Title}</h4>
    //     <p>{this.props.movie.Year}</p>
    //     <img src={this.props.movie.Poster}></img>
    //   </div>

<Card>
<Card.Header>{this.props.movie.title}</Card.Header>
<Card.Body>
  <blockquote className="blockquote mb-0">

  <img src={this.props.movie.poster}></img>

    <footer className="blockquote-footer">
     {this.props.movie.year}
    </footer>
  </blockquote>
</Card.Body>
</Card>
    );
  }
}
export default MovieItem;
