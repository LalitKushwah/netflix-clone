import { useEffect, useState } from "react";
import axios from './network';
import requests from './Request';
import './Banner.css';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

const Banner = () => {
    
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(requests.fetchNetflixOriginals)
        .then(response => {
            const randomIndex = Math.floor(Math.random() * response.data.results.length - 1);
            setMovie(response.data.results[randomIndex]);
        })
        .catch(err => {
            console.error(err);
        });
    }, []);

    console.log('Movie', movie);

    return (
        <header 
            className="banner"
            style={{
                backgroundSize: 'top',
                backgroundImage: `url(${IMAGE_PATH}${movie?.backdrop_path})`,
                backgroundPosition: 'center center'
            }}>
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='movie_description'>
                    {movie?.overview}
                </h1>
            </div>
            <div className='fade_bottom'></div>
        </header>
    )
}

export default Banner;