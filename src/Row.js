import React, { useEffect, useState } from 'react';
import axios from './network';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseUrl = 'https://image.tmdb.org/t/p/original/';
const opts = {
    height: "390px",
    width: "100%",
    playVars: {
        autoplay: true
    }
};

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        axios.get(fetchUrl).then(response => {
            setMovies(response.data.results);
            console.log(response);
        }).catch(err => {
            console.error(err);
        });
    }, [fetchUrl]);

    const handleTrailer = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {
                    movies.map(movie => (
                        <img
                            className={`row_poster ${isLargeRow && 'row_poster_large'}`}
                            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                            onClick={() => handleTrailer(movie)}
                            key={movie.id} />
                        )
                    )
                }
            </div>
            { trailerUrl !== '' ? <Youtube videoId="" opts={opts}></Youtube> : null }
        </div>
    );
}

export default Row;