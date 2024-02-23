import { SZEMELYLISTA } from "./adat.js";
import { listakiir } from "./fuggvenyek.js";
import { listaOsszeallit } from "./fuggvenyek.js";
import { kartyaOsszeallit } from "./fuggvenyek.js";

console.log(SZEMELYLISTA);

/* Írd ki a második ember nevét és telefonszámát */

console.log(`${SZEMELYLISTA[1].nev} ${SZEMELYLISTA[1].tel} `);

listakiir(SZEMELYLISTA);

/* HTML elemek elérése (DOM elérése) */
/* megfogom a div#lista elemet */
// const LISTAELEM = document.getElementById("lista");
const LISTAELEM = document.querySelector("#lista");
console.log(LISTAELEM);
const KARTYAELEM = document.querySelector("#cardcontainer");
/* módosítom a tartalmát */
LISTAELEM.innerHTML = "<h3>Címlista</h3>";
LISTAELEM.innerHTML += listaOsszeallit(SZEMELYLISTA);
KARTYAELEM.innerHTML = "<h3>Kártya</h3>";
KARTYAELEM.innerHTML += kartyaOsszeallit(SZEMELYLISTA);

