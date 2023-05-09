/*****************************************************************************/
/*** Visualización/modificación/borrado de los atributos de un objeto JSON ***/
/*****************************************************************************/

/* Declaracion del objeto JSON "planetaJSON" */
var planetaJSON =
{
    "nombre": "Tierra",
    "numero": 3,
    "radio": 5371,
    "tieneAnillos": false,
    "habitable": true,
    "continentes": /* este atributo es a su vez un objeto*/
    {
        "continente1": "Asia",
        "continente2": "Amèrika",
        "continente3": "Afrija",
        "continente4": "Antártida",
        "continente5": "Europa",
    }
};


/* Visualización de algunos atributos declarando, previamente, las correspondientes variables */
var nomPla = planetaJSON["nombre"];
var numPla = planetaJSON["numero"];
var radPla = planetaJSON.radio;
var habPla = planetaJSON["habitable"];

document.getElementById("nomPla").innerHTML = nomPla;
document.getElementById("radPla").innerHTML = radPla;

if(habPla)
{
    document.getElementById("habPla").innerHTML = "Sí";
}
else 
{
    document.getElementById("habPla").innerHTML = "No"; /* RELLENA DINAMICAMENTE EL HTML */
}


/* Visualización de algunos atributos sin declarar variables */
document.getElementById("numPla").innerHTML = planetaJSON.numero;


/* Modificación de uno de sus atributos */
planetaJSON.radio = 6371;
document.getElementById("radPla").innerHTML = planetaJSON.radio;

/* Modificacion de algunos de los atributos del objeto continente */
planetaJSON.continentes.continente2 = "América";
planetaJSON.continentes["continente3"] = "África";

/* iterar sobre continentes para mostrarlos en la tabla */
var x;
for (x in planetaJSON.continentes)
{
    
    if(x == "continente5")
    {
        document.getElementById("conPla").innerHTML +=planetaJSON.continentes[x];
    }
    else 
    {
        document.getElementById("conPla").innerHTML +=planetaJSON.continentes[x] + ", ";
    }

}

/* Borrado de uno de sus atributos */
delete planetaJSON.continentes.continente2;
/* en la consola de la extension para desarrolladores se puede ver que continentes ya ha perdido ese valor */

/** Como getElementById ya tiene algo guardado tenemos que vaciarlo para actualizarlo: */
document.getElementById("conPla").innerHTML = "";
for (x in planetaJSON.continentes)
{
    document.getElementById("conPla").innerHTML += planetaJSON.continentes[x] + ", ";
}



/***********************************************************************/
/*** utilización de la funciones "JSON.stringify()" y "JSON.parse()" ***/
/***********************************************************************/

/* Declaración del objeto JS "planetaJS" */
var planetaJS =
{
    nombre: "Tierra",
    numero: 3,
    radio: 6371,
    tieneAnillos: false,
    habitable: true
};

/* ESTO ES LO QUE USAMOS EN EL PROYECTO */
/* conversion del objeto JS en un String JSON */
var stringJSON = JSON.stringify(planetaJS);
console.log(stringJSON);
/* esto es lo mismo: console.log(JSON.stringify(planetaJS)); */


/* Conversion del string JSON en un objeto JS */
var objetoJS = JSON.parse(stringJSON);
console.log(objetoJS);


const usuario = document.getElementById("usuario").value;