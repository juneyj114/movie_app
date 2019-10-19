import React from 'react';
import PropType from 'prop-types';
import "./Movie.css"

function Movie({ year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="genres">
                {genres.map((genre, index) => <li key = {index} className = "movie_genre">{genre}</li>)}
                </ul>
                <p className="movie_summary">{summary.slice(0, 150)}...</p>
            </div>
        </div>
    )
}

Movie.PropType = {
    id: PropType.number.isRequired,
    year: PropType.number.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired
};

export default Movie;