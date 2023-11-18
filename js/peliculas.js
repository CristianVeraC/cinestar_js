
const getPeliculas=async()=>{
    const idx= new URLSearchParams(window.location.search).get('idx')
    
    const data = await fetch(`https://localhost/cinestar_sweb_php/peliculas/${idx}`);
    if(data.status = 200){
        const peliculas = await data.json()
        
        let html='<br/><h1>Cartelera</h1><br/>'
        peliculas.forEach(pelicula => {
            html +=
            `
				<div class="contenido-pelicula">
					<div class="datos-pelicula">
						<h2>${pelicula.Titulo}</h2><br/>
						<p>${pelicula.Sinopsis}</p>
						<br/>
                       	<div class="boton-pelicula"> 
                       		<a href="pelicula.html?id=${pelicula.id}" >
                       			<img src="img/varios/btn-mas-info.jpg" width="120" height="30" alt="Ver info"/>
                       		</a>
               			</div>
               			<div class="boton-pelicula"> 
               				<a href="https://www.youtube.com/v/${pelicula.Link}" target=_blank  onclick="return hs.htmlExpand(this, { objectType: 'iframe' } )" >
               					<img src="img/varios/btn-trailer.jpg" width="120" height="30" alt="Ver trailer"/>
               				</a>
                        </div> 
					</div>
					<img src="img/pelicula/${pelicula.id}.jpg" width="160" height="226"/><br/><br/>
				</div>

			</div>
            `
        });
        document.getElementById('contenido-interno').innerHTML=html
    }
    
}




getPeliculas()
