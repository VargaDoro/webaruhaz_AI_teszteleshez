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

  
  console.log("lefutott a kosarMegjelenitTeszt");
}

kosarMejelenitTeszt();
