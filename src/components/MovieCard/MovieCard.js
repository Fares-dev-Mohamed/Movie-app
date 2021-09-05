import React from 'react';

import Rate from '../Rate';


const MovieCard = ({
  movie: { name, date, rating, image, type, description },
}) => {
  return (
    <div className="card">
      <div className="card-1">
        <img src={image} alt="poster" />
      </div>
      <div className="card-2">
        <h1>{name}</h1>
        <div >
          <ul>
            <h4>{date}</h4>
            <h4>||</h4>
            <h4>{type}</h4>
          </ul>
        </div>
        <div className="card-2-rating">
          <Rate rating={rating} />
        </div>
        <div className="card-2-description">
          <p>{description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default MovieCard;