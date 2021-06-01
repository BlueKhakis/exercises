const load_movies = () => {

    // make an AJAX call to the API endpoint
    fetch('http://www.cbp-exercises.test/day27-ajax-databases/ajax/api/movies.php')
        .then( // when the promise of a response is fulfilled
            (response) => {

                // from response get a promise of data parsed from JSON
                return response.json();
            }
        )
        .then( // when the promise of data is fulfilled
            (data_from_json) => {

                const list = document.getElementById('list');

                data_from_json.forEach(movie_name => {
                    list.innerHTML += `<li>${movie_name}</li>`;
                })
            }
        )
}


const load_movies_short = () => {
    fetch('http://www.cbp-exercises.test/day27-ajax-databases/ajax/api/movies.php')
        .then(r => r.json())
        .then(data => {

                const list = document.getElementById('list');

                data.forEach(movie_name => {
                    list.innerHTML += `<li>${movie_name}</li>`;
                })
            }
        )
}


const load_movies_async = async () => {

    //               await fetch promise's fulfillment
    const response = await fetch('http://www.cbp-exercises.test/day27-ajax-databases/ajax/api/movies.php')

    //                     await response.json() promise's fulfillment
    const data_from_json = await response.json();

    const list = document.getElementById('list');

    data_from_json.forEach(movie_name => {
        list.innerHTML += `<li>${movie_name}</li>`;
    })
}

document.getElementById('button').addEventListener('click', load_movies_async)