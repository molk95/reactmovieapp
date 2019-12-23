import React from 'react'

const RatingFilter = ({ rate, starClicked }) => {
    return (
        <div className="rating-filter">
        <div > <span className="new-rating-filter"> <span className="rating-filter-text">Minimum rating</span> </span>
        
            {Array.from({ length: 5 }, (star, i) => (
                <span  onClick={() => { starClicked(i + 1) }}>
                    {i < rate ? "★" : "☆"}
                </span> 
                
            ))} 
            
        </div>
        </div>
    );
};

export default RatingFilter;

// import React from 'react'

// const SearchRating = ({rate, starClicked = () => {} }) => {
//     let stars = []
//     for(let i = 0; i < 5; i++) {
//         if(i < rate) {
//             stars.push(<span onClick={()=> starClicked(i+1)} key={i}>★</span>)
//         }
//         else {
//             stars.push(<span onClick={()=> starClicked(i+1)} key={i}>☆</span>)
//         }
//     }
//     return (
//         <div>{stars}</div>
//     )
// }

// export default Rating

