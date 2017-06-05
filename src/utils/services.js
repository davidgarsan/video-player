/* global fetch */
import Browser from '../utils/browser';
import { Medias, DEFAULT_MOVIE_ID } from '../utils/medias';

const API_KEY = 'fd2b56202699185fae03cb9ec402ab8b';

function getMovieData(movieId) {
  const id = movieId || DEFAULT_MOVIE_ID;
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  }).catch(() => {
    // console.error(`There has been a problem with your fetch operation: ${error.message}`);
  });
}

function getMedia(movieId) {
  const id = `movie_${movieId || DEFAULT_MOVIE_ID}`;
  // Maybe native API would be more appropriate to check HLS support:
  // document.querySelector('video').canPlayType('application/vnd.apple.mpegURL')
  return Browser.isSafari ? Medias[id].hls : Medias[id].dash;
}

export {
  getMovieData,
  getMedia,
};
