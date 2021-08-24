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
    datos.forEach(data => {
        let url = location.pathname,
            indice = url.indexOf("."),
            nombre = url.substring(6, indice);

        let $clone = document.importNode($templateDos, true);
        if (nombre === data.name.toLowerCase() || "mercury" === data.name.toLowerCase()) {
            borde(data.name.toLowerCase())
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
        }
    }) //TERMINA EL ARRAY
    $acaTemplateDos.appendChild($fragment)
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
