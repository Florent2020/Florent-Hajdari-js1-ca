const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US`;

async function movieDetails() {


    const image = document.querySelector(".details-image");
    const titleName = document.querySelector("h1");
    const vote = document.querySelector(".vote");
    const popularity = document.querySelector(".popularity");
    const release = document.querySelector(".release");
    const description = document.querySelector(".description");

    try {
        const response = await fetch(apiUrl);
        const movie = await response.json();

        document.title = movie.title;

        if (response.status === 404) {
            titleName.innerHTML = "An error occured";
            titleName.style.color = "red"

            return;
        }

        image.src = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`;
        titleName.innerHTML = movie.title;
        vote.innerHTML = movie.vote_average;
        popularity.innerHTML = movie.popularity;
        release.innerHTML = movie.release_date;
        description.innerHTML = movie.overview;


    } catch (error) {
        titleName.innerHTML = "An error occured";
        console.log(error);

    }

}

movieDetails();