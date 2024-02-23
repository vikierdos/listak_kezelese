

export function listakiir(LISTA) {
    var index = 0;
    while (index < LISTA.length) {
        console.log(`${LISTA[index].nev} ${LISTA[index].tel} `);
        index++;
    }
}

export function listaOsszeallit(LISTA){
    let txt  ="<ul>"
    for (let index = 0; index < LISTA.length; index++) {
        txt += `<li>${LISTA[index].nev} ${LISTA[index].tel}</li>`;
    }
    txt += "</ul>";
    console.log(txt);
    return txt;
}

export function kartyaOsszeallit(LISTA){
    let txt = ""
    for (let index = 0; index < LISTA.length; index++) {
        txt += `<div class="szemely"><h3>${LISTA[index].nev}</h3> <p>telefonszám: ${LISTA[index].tel}</p> <p>barát: ${LISTA[index].barat}</p> <p>kor: ${LISTA[index].kor}</p></div>`;
    }
    console.log(txt);
    return txt;
}