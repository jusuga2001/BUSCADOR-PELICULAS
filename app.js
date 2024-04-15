const buscadorPeliculas = document.querySelector('.input');
buscadorPeliculas.addEventListener('input', filterMovie);

function filterMovie(){
    let peli = buscadorPeliculas.value;
    console.log(peli);
    let url = `https://www.omdbapi.com/?apikey=f70139b8&s=${peli}`;
    fetch(url)
    .then(rpta =>{
        console.log(rpta);
        return rpta.json();
    })
    .then(datosPelis =>{
        showHtmlMovies(datosPelis.Search);
    })
}

function showHtmlMovies(peliculas){
    const contenido = document.querySelector('.contenedor');
    let html = "";
    peliculas.forEach((pelicula) => {
        const {Poster, Year, Title, Type} = pelicula;
        html +=`
        <img src="${Poster}">
        <h1>${Title}</h1>
        <p>${Year}</p>
        <p>${Type}</p>
        `
    });
    contenido.innerHTML = html;
}