const getCine=async()=>{
    const id=(new URLSearchParams(window.location.search)).get('id')

    const datacine= await fetch(`https://localhost/cinestar_sweb_php/peliculas/cartelera`);
    const datatarifa= await fetch(`https://webcinestar001.000webhostapp.com/cinestar_sweb_php/cines/tarifas/`);
    const datapeli= await fetch(`https://webcinestar001.000webhostapp.com/cinestar_sweb_php/cines/peliculas/`);

    
   
    if(datacine.status==200){
        const cineinfo=await datacine.json()
        const tarifas=await datatarifa.json()
        const peliculas=await datapeli.json()

        let html=` 
                <h2>${cineinfo.RazonSocial}</h2>
                <div class="cine-info">
                    <div class="cine-info datos">
                        <p>${cineinfo.Direccion} - ${cineinfo.Detalle}</p>
                        <p>Teléfono: ${cineinfo.Telefonos} anexo 865</p>
                        <br/>
                        <div class="tabla">
                            `
                            
                    tarifas.forEach(tarifa=>{
                        
                        html+=`
                            <div class="fila">
                                <div class="celda-titulo">${tarifa.DiasSemana}</div>
                                <div class="celda">${tarifa.Precio}</div>
                            </div>
                            `
                        });
                        
            
        html+=
                    `
                        </div>
                            <div class="aviso">
                                <p>A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de S/. 1.00 adicional al tarifario vigente, a los usuarios que compren sus entradas por el aplicativo de Cine Papaya para Cine Star Comas, Excelsior, Las Américas, Benavides, Breña, San Juan, UNI, Aviación, Sur, Porteño, Tumbes y Tacna.</p>
                            </div>
                        </div>
                        <img src="img/cine/${cineinfo.id}.2.jpg"/>
                        <br/><br/><h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4><br/>
                        <div class="cine-info peliculas">
                            <div class="tabla">
                                <div class="fila">
                                    <div class="celda-cabecera">Películas</div>
                                    <div class="celda-cabecera">Horarios</div>
                                </div> 
                                `

                    peliculas.forEach(pelicula=>{  
                              html+=`
                                <div class="fila" >
                                    <div class="celda-titulo">${pelicula.Titulo}</div>
                                    <div class="celda">${pelicula.Horarios}</div>
                                </div>
                                `
                            });
                            const filaPeliculas = document.querySelectorAll('.fila');

filaPeliculas.forEach((fila, index) => {
    if (index % 2 === 0) {
        fila.style.backgroundColor = 'white';
    } else {
        fila.style.backgroundColor = 'pastelyellow';
    }
});
        html+=`
                            </div>
                        </div>
                    </div>
                    <div>
                        <img style="float:left;" src="img/cine/${cineinfo.id}.3.jpg" alt="Imagen del cine"/>
                        <span class="tx_gris">Precios de los juegos: desde S/1.00 en todos los Cine Star.<br/>
                            Horario de atención de juegos es de 12:00 m hasta las 10:30 pm. 
                            <br/><br/>
                            Visitános y diviértete con nosotros. 
                            <br/><br/>
                            <b>CINESTAR</b>, siempre pensando en tí. 
                        </span>		
                    </div>
                    `
   
        document.getElementById('contenido-interno').innerHTML=html;
        
    }
}
getCine();