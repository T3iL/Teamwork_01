fetch("http swapi.dev/api/planets/1/")
    .then(response => response.json())
    .then(response => {
        console.log(response);
    })