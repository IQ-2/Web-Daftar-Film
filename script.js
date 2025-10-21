const API_KEY = "a540123aca03a0e0fa62d1367165c5e2";

const API_POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

function tampilMovie(movies){
    const gridMovie = document.getElementById('movie-grid');
    movies.forEach((movie) => {
        const{title, poster_path, vote_average, release_date} = movie;

        //console.log(poster_path);

        // Buat elemen baru untuk card movie/film

        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const IMG_BASE_URL = `https://image.tmdb.org/t/p/w500`;

        const posterURL = IMG_BASE_URL + poster_path ;

        movieCard.innerHTML =`
        <img src="${posterURL}"></img>
        <div class="movie-card-info">
        <h3>${title}</h3>
        <span>Rating : ${vote_average}</span>
        <p>Tahun : ${release_date}</p>
        </div>
        `;

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
     tampilMovie(data.results);
    }
    //console.log(data);

  } catch (error) {
    console.error('Terjadi Kesalahan : ', error);
  }
}

ambilDataMovie(API_POPULAR_URL);
