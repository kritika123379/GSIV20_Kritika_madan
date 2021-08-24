import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieThumb.css';

const MovieThumb = ({ image, movieId, movieName, clickable }) => {
  console.log('movie thumb props',image,movieId,movieName)
return(
  <div className="rmdb-moviethumb">
    {/* You can send props via the Links "to" object. Here we create our own "movieName" */}
    {clickable ?
    <>
      <Link to={{ pathname: `/${movieId}`,  movieName: `${movieName}`}}>
        <img className="clickable" src={image} alt="moviethumb" />
      </Link>
      <p>{movieName}</p>
      </>
      :
      <>
      <img src={image} alt="moviethumb" />
      <b>{movieName}</b>
      </>
    }
  </div>
)
  }
MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string,
  clickable: PropTypes.bool
}

export default MovieThumb;