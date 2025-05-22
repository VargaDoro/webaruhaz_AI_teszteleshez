import Kosar from "../PUBLIC/Kosar.js";
/* kosra osztály annyi táblázat sort jelenit-e meg ahány eleme van a lsitánknak?
    az oldalon a kosárban lévő terméknév helyesen jelenik-e meg? */

function kosarMejelenitTeszt() {
  const szELem = document.createElement("div");
  const tesztLista = [
    {
      id: 0,
      nev: "Termék 1",
      ar: 1000,
      kep: "./kepek/placeholder.jpg",
      leiras: "Ez egy példa termék leírása.",
      mennyiseg: 2,
    },
    {
      id: 1,
      nev: "Termék 2",
      ar: 1300,
      kep: "./kepek/placeholder.jpg",
      leiras: "Ez egy példa termék leírása.",
      mennyiseg: 1,
    },
  ];
  const kosar = new Kosar(tesztLista, szELem);
  const sorLista = szELem.querySelectorAll("tr");
  console.log(sorLista);
  console.assert(
    sorLista.length === tesztLista.length + 1,
    "Hiba, nem stimmel a tr tagek száma"
  );

  /* az első igazi nem fejléces td tagjében jó név szerepel-e */

  const tdNev = szELem.querySelector(
    "table tbody tr:nth-child(1) td:nth-child(2)"
  );
  console.log(tdNev, tdNev.innerHTML);
  console.assert(
    tdNev.innerHTML === tesztLista[0].nev,
    "Hiba: nem megfelelő név jelenik meg"
  );

  //első
  const tdElem = szELem.querySelector("tr:nth-child(1) td:nth-child(4)");
  const tdMennyisegSzoveg = [...tdElem.childNodes] //A [...] szintaxissal átalakítjuk ezt a NodeList-et rendes tömbbé, hogy könnyen lehessen rá filter, map stb. műveleteket végezni.
    .filter((node) => node.nodeType === Node.TEXT_NODE) //node szöveg, például az a 2, ami a két gomb között van
    .map((node) => node.textContent.trim()) //kiolvassa a szöveget 
    .filter((text) => text.length > 0)[0];
  console.log("Első termék mennyisége:", tdMennyisegSzoveg);
  console.assert(
    tdMennyisegSzoveg == tesztLista[0].mennyiseg,
    "Hiba: az első termék mennyisége nem jelenik meg helyesen"
  );

  // Második termék mennyisége
  const tdElem2 = szELem.querySelector("tr:nth-child(2) td:nth-child(4)");
  
  const tdMennyisegSzoveg2 = [...tdElem2.childNodes] //A [...] szintaxissal átalakítjuk ezt a NodeList-et rendes tömbbé, hogy könnyen lehessen rá filter, map stb. műveleteket végezni.
    .filter((node) => node.nodeType === Node.TEXT_NODE) //node szöveg, például az a 2, ami a két gomb között van
    .map((node) => node.textContent.trim()) //kiolvassa a szöveget 
    .filter((text) => text.length > 0)[0];
  console.log("Másodiktermék mennyisége:", tdMennyisegSzoveg2);
  console.assert(
    tdMennyisegSzoveg2 == tesztLista[1].mennyiseg,
    "Hiba: a második termék mennyisége nem jelenik meg helyesen"
  );

// Gombokat keresünk az első terméknél (első sor, a tr-n belül)
const trElso = szELem.querySelector("table tbody tr:nth-child(1)");
// Ellenőrizzük, hogy a "novel" gomb létezik, van "data-id" attribútuma és helyes osztálya
const novelGomb = trElso.querySelector("button.novel");
console.log(novelGomb)
console.assert(novelGomb, "Hiba: Növelés gomb nem található az első terméknél");
console.assert(
  novelGomb.dataset.id === "0",
  `Hiba: Növelés gomb data-id értéke nem 0, hanem: ${novelGomb.dataset.id}`
);

  console.log("lefutott a kosarMegjelenitTeszt");
}

kosarMejelenitTeszt();
