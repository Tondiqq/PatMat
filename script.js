// odkazy na HTML objekty
const figurky = document.getElementById("figurky");
const pocetPat = document.getElementById("pocetPat");
const pocetMat = document.getElementById("pocetMat");

// kód vykreslení obrázků
const pat = "<img src='img/pat.png'>";
const mat = "<img src='img/mat.png'>";

let kodFigurek = "";
let i=0;
let figurka;
let pPat = 0;
let pMat = 0;
while (i<Math.random()*10) {
  i++;
  if (Math.random()<0.5) {
    figurka = pat;
    pPat++;
  }
  else{
    figurka = mat;
    pMat++;
  }
  kodFigurek += "<div>" + figurka + "</div>";
}
figurky.innerHTML = kodFigurek; // vloží kód řady obrázků, kterou požadujeme vykreslit
pocetPat.innerText = pPat;         // vypíše počet vykreslených figurek Pata (všech deset)
pocetMat.innerText = pMat;         // vypíše počet vykreslenách figurek Mata (žádný)

