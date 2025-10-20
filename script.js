const API_KEY = "547559af62bde1dbc910d4dc539d895c";

const API_POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

function tampilMovie(movies){
    const gridMovie = document.getElementById('movie-grid');
    movies.forEach(movie => {
        const{title, poster_path, vote_average, release_date} = movie;

        // Buat elemen baru untuk card movie/film

        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const posterUrl = 'https://image.tmdb.org/t/p/w500';
        movieCard.innerHTML='<img src = "${poterUrl}"></img>';

        gridMovie.appendChild(movieCard);
    });

}

async function ambilDataMovie(url) {
  try {
    const response = await fetch(url);
    //console.log(response);
    if(!response.ok){
        throw new Error('Terjadi kendala jaringan');
    }

    const data = await response.json();
    if(data.results.length > 0){
        tampilMovie(data.result);
    }
    //console.log(data);

  } catch (error) {
    console.error('Terjadi Kesalahan : ', error);
  }
}

ambilDataMovie(API_POPULAR_URL);
