const $iconoBurguer = document.querySelector(".iconoBurguer"),
    $navPlanetas = document.querySelector(".navPlanetas"),
    $templateDos = document.querySelector(".templateDos").content,
    $fragment = document.createDocumentFragment(),
    $acaTemplateDos = document.querySelector(".acaTemplateDos"),
    $wikiEnlace = document.querySelectorAll(".wikiEnlace"),
    $informacion = document.querySelectorAll(".informacion"),
    $imagenes = document.querySelectorAll(".imagenes"),
    $enlacePlaneta = document.querySelectorAll(".enlacePlaneta"),
    $listaDato = document.querySelectorAll(".listaDato"),
    $listaDatoA = document.querySelectorAll(".enlaceMalo");
    //accederHoverListaDato = document.styleSheets[0].cssRules[43].cssRules[19]
    /*let nuevaListaMercurio = ".listaDato:hover { border: none; background-color: #DEF4FC; mix-blend-mode: normal; color: white; }";
    document.styleSheets[0].insertRule(nuevaListaMercurio, document.styleSheets[0].cssRules.length)
    console.log(document.styleSheets[0].cssRules)*/




document.addEventListener("click", e => {
    if (e.target.matches(".iconoBurguer")) return $navPlanetas.classList.toggle("active1")

    if(e.target.matches(".datoOverview")) {
        removerClase($wikiEnlace)
        removerClase($informacion)
        removerClase($imagenes)
        agregarClase($wikiEnlace, 0) 
        agregarClase($informacion, 0)
        agregarClase($imagenes, 0)

    }
    if(e.target.matches(".datoStructure")) {
        removerClase($wikiEnlace)
        removerClase($informacion)
        removerClase($imagenes)
        agregarClase($wikiEnlace, 1)
        agregarClase($informacion, 1) 
        agregarClase($imagenes, 1)
    }
    if(e.target.matches(".datoSurface")) {
        removerClase($wikiEnlace)
        removerClase($informacion)
        removerClase($imagenes)
        agregarClase($wikiEnlace, 2)
        agregarClase($informacion, 2) 
        agregarClase($imagenes, 2)
        agregarClase($imagenes, 3)
    }

    if(e.target.matches(".enlaceMalo")) {
        e.preventDefault();
    }

});

const traerDatos = async () => {
    try {
        let response = await fetch("./data.json");
        let data = await response.json();

        mostrarDatos(data);
    } catch (error) {
        console.log(error);
    }
}

document.addEventListener("DOMContentLoaded", traerDatos);




function mostrarDatos(datos) {
    
    datos.forEach((data) => {
        let url = location.pathname,
            indice = url.indexOf("."),
            nombre = url.substring(1, indice);
        console.log(nombre)
        if(nombre === data.name.toLowerCase()) {
            pintarDataJson(data);
            //ESTA ES LA MEJOR MANERA PERO ME FALTA MERCURIO QUE NO SE COMO TRAERLO SIN QUE DESPUES ME LO PINTE EN LAS OTRAS HOJAS HTML
        } else if("mercury" === data.name.toLowerCase()) {
            pintarDataJson(data);
        } 
            //ESTA ES LA MEJOR MANERA PERO ME FALTA MERCURIO QUE NO SE COMO TRAERLO SIN QUE DESPUES ME LO PINTE EN LAS OTRAS HOJAS HTML
        
        /*for (let i = 0; i < datos.length; i++) {
            if("Mercury" === datos[i].name) {
                pintarDataJson(datos, i);
                break
            } 
            if("Venus" === datos[i].name) {
                pintarDataJson(datos, i)
            } 
        }*/
     //TERMINA EL ARRAY
    $acaTemplateDos.appendChild($fragment)
    })
}

const borde = (nombre1) => {
    ponerClase(0, "419EBB", nombre1)
    ponerClase(1, "EDA249", nombre1)
    ponerClase(2, "6D2ED5", nombre1)
    ponerClase(3, "D14C32", nombre1)
    ponerClase(4, "D83A34", nombre1)
    ponerClase(5, "CD5120", nombre1)
    ponerClase(6, "1EC1A2", nombre1)
    ponerClase(7, "2D68F0", nombre1)
}

const pintarDataJson = (data) => {
    let $clone = document.importNode($templateDos, true);
    borde(data.name.toLowerCase())
    if("mercury" !== data.name.toLowerCase()) document.querySelector(".articleInfoEspecifica").style.display = "none"
    document.querySelector(".imagenPlaneta").src = data.images.planet;
    document.querySelector(".imagenPlaneta").alt = data.name;
    document.querySelector(".imagenPlanetaStructure").src = data.images.internal;
    document.querySelector(".imagenPlanetaStructure").alt = `Imagen de la estructura interna de ${data.name}`;
    document.querySelector(".imagenPlaneta2").src = data.images.planet;
    document.querySelector(".imagenPlanetaInternal").src = data.images.geology;
    document.querySelector(".imagenPlanetaInternal").alt = `Imagen de la geologia de ${data.name}`;
    document.querySelector(".nombrePlaneta").textContent = data.name;
    document.querySelector(".infoOverview").textContent = data.overview.content;
    document.querySelector(".infoStructure").textContent = data.structure.content;
    document.querySelector(".infoSurface").textContent = data.geology.content;
    document.querySelector(".wikipediaOverview").href = data.overview.source;
    document.querySelector(".wikipediaStructure").href = data.structure.source;
    document.querySelector(".wikipediaSurface").href = data.geology.source;
    $clone.querySelector(".TiempoRotacion").textContent = data.rotation;
    $clone.querySelector(".tiempoRevolucion").textContent = data.revolution;
    $clone.querySelector(".radius").textContent = data.radius;
    $clone.querySelector(".grados").textContent = data.temperature;
    $fragment.appendChild($clone);
    /*let $clone = document.importNode($templateDos, true);
    borde(data[i].name)
    document.querySelector(".imagenPlaneta").src = data[i].images.planet;
    document.querySelector(".imagenPlaneta").alt = data[i].name;
    document.querySelector(".imagenPlanetaStructure").src = data[i].images.internal;
    document.querySelector(".imagenPlanetaStructure").alt = `Imagen de la estructura interna de ${data[i].name}`;
    document.querySelector(".imagenPlaneta2").src = data[i].images.planet;
    document.querySelector(".imagenPlanetaInternal").src = data[i].images.geology;
    document.querySelector(".imagenPlanetaInternal").alt = `Imagen de la geologia de ${data[i].name}`;
    document.querySelector(".nombrePlaneta").textContent = data[i].name;
    document.querySelector(".infoOverview").textContent = data[i].overview.content;
    document.querySelector(".infoStructure").textContent = data[i].structure.content;
    document.querySelector(".infoSurface").textContent = data[i].geology.content;
    document.querySelector(".wikipediaOverview").href = data[i].overview.source;
    document.querySelector(".wikipediaStructure").href = data[i].structure.source;
    document.querySelector(".wikipediaSurface").href = data[i].geology.source;
    $clone.querySelector(".TiempoRotacion").textContent = data[i].rotation;
    $clone.querySelector(".tiempoRevolucion").textContent = data[i].revolution;
    $clone.querySelector(".radius").textContent = data[i].radius;
    $clone.querySelector(".grados").textContent = data[i].temperature;
    $fragment.appendChild($clone);*/
}

const ponerClase = (indice, clase, nombre) => {
    if($enlacePlaneta[indice].outerText.toLowerCase() === nombre) {
        let nuevaLista = `.listaDato:active { border: none; background-color: #${clase}; mix-blend-mode: normal; color: white; }`;
        document.styleSheets[0].insertRule(nuevaLista, document.styleSheets[0].cssRules.length)
    }
}

const removerClase = (array) => {
    for(let i = 0;i<array.length;i++) {
        array[i].classList.remove("active")
    }
}
const agregarClase = (array, indice) => {
    array[indice].classList.add("active")
}
