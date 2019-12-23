import React, { Component } from 'react';
import './MovieCard.css'
import Rating from './Rating';

 const MovieCard = ({movie={}}) => {
     const  {
         
          title = "",
        date = "",
        picture = "https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png",
        rating = 0
    }=movie
    
        return (
        <div class="movie-card" >
           <div className="movie-rating"><Rating movieRating={rating}/></div>
            <div className="movie-image"
            style={{
              backgroundImage: `URL('${picture}')`
          }}>
               </div>
            <div className="movie-description">{title} - {date} </div>  
        </div>
    )
  
}
export default MovieCard;


