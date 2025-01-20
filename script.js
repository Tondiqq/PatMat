// odkazy na HTML objekty
const figurky = document.getElementById("figurky");
const pocetPat = document.getElementById("pocetPat");
const pocetMat = document.getElementById("pocetMat");

// kód vykreslení obrázků
const pat = "<img src='img/pat.png'>";
const mat = "<img src='img/mat.png'>";

let kodFigurek = "";
let i=0;
while (i<5) {
  i++;
  kodFigurek += "<div>" + pat + mat + "</div>";
  kodFigurek += "<div>" + mat + pat + "</div>";
}
figurky.innerHTML = kodFigurek; // vloží kód řady obrázků, kterou požadujeme vykreslit
pocetPat.innerText = i*2;         // vypíše počet vykreslených figurek Pata (všech deset)
pocetMat.innerText = i*2;         // vypíše počet vykreslenách figurek Mata (žádný)

