const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US";

async function getMovies() {

    try {
        const response = await fetch(apiUrl);
        const movies = await response.json();
        const result = document.querySelector(".results");

        var newHTML = "";
        const imagePath = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";

        for (let i = 0; i < movies.results.length; i++) {

            newHTML += `<div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="card">
                                <img class="image" src="${imagePath}${movies.results[i].poster_path}" alt="${movies.results[i].title}" />
                                <div class="details">
                                    <h4 class="name">${movies.results[i].title}</h4>
                                    <p><b>Vote average: </b>${movies.results[i].vote_average}</p>
                                    <p><b>Popularity:</b> ${movies.results[i].popularity}</p>
                                    <p><b>Release date:</b> ${movies.results[i].release_date}</p>
                                    <a class="btn btn-primary" href="details.html?id=${movies.results[i].id}">Details</a>
                                </div>
                            </div>
                        </div>`;
        }

        result.innerHTML = newHTML;

    } catch (error) {
        console.log(error);
    }

}

getMovies();