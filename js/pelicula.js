const getPelicula = async () => {
    const id = new URLSearchParams(window.location.search).get('id');
    const response = await fetch(`https://localhost/cinestar_sweb_php/peliculas/cartelera`);

    if (response.status === 200) {
        const data = await response.json();

        data.forEach(pelicula => {
            let html = `
                <br/><h1>Cartelera</h1><br/>
                <div class="contenido-pelicula">
                    <div class="datos-pelicula">
                        <h2>${pelicula.Titulo}</h2>
                        <p>${pelicula.Sinopsis}</p>
                        <br/>
                        <div class="tabla">
                            <div class="fila">
                                <div class="celda-titulo">Título Original :</div>
                                <div class="celda">${pelicula.Titulo}</div>
                            </div>
                            <div class="fila">
                                <div class="celda-titulo">Estreno :</div>
                                <div class="celda">${pelicula.Estreno}</div>
                            </div>
                            <div class="fila">
                                <div class="celda-titulo">Género :</div>
                                <div class="celda">${pelicula.Generos}</div>
                            </div>
                            <div class="fila">
                                <div class="celda-titulo">Director :</div>
                                <div class="celda">${pelicula.Director}</div>
                            </div>
                            <div class="fila">
                                <div class="celda-titulo">Reparto :</div>
                                <div class="celda">${pelicula.Reparto}</div>
                            </div>
                        </div>
                    </div>
                    <img src="img/pelicula/${pelicula.id}.jpg" width="160" height="226"><br/><br/>
                </div>
                <div class="pelicula-video">
                    <iframe src="https://www.youtube.com/v/${pelicula.link}" allowfullscreen="true" width="580" height="400"></iframe>
                </div>
            `

            document.getElementById('contenido-pelicula').innerHTML = html;
        });
    }
};

getPelicula();
