import Kosar from "../PUBLIC/Kosar.js";

/* kosar osztály tesztelése:
   - A megjelenített <tr> sorok száma helyes
   - A termék nevei helyesen jelennek meg
   - A mennyiség helyesen jelenik meg a megfelelő cellákban
*/

function kosarMegjelenitTeszt() {
  const szElem = document.createElement("div");
  const tesztLista = [
    {
      id: 0,
      nev: "Termék 1",
      ar: 1000,
      kep: "./kepek/placeholder.jpg",
      leiras: "Ez egy példa termék leírása.",
      mennyiseg: 3,
    },
    {
      id: 1,
      nev: "Termék 2",
      ar: 1300,
      kep: "./kepek/placeholder.jpg",
      leiras: "Ez egy példa termék leírása.",
      mennyiseg: 5,
    },
  ];

  // Kosár példány létrehozása
  const kosar = new Kosar(tesztLista, szElem);

  // 1. Teszt: <tr> sorok száma (fejléc + elemek)
  const sorLista = szElem.querySelectorAll("tr");
  console.assert(
    sorLista.length === tesztLista.length + 1,
    `Hiba: ${sorLista.length} sor van, de ${tesztLista.length + 1} kellett volna!`
  );

  // 2. Teszt: első termék neve
  const tdNev1 = szElem.querySelector("table tbody tr:nth-child(1) td:nth-child(2)");
  console.assert(
    tdNev1.innerHTML === tesztLista[0].nev,
    `Hiba: az első termék neve '${tdNev1.innerHTML}', elvárt: '${tesztLista[0].nev}'`
  );

  // 3. Teszt: mennyiségek megjelenése
  const tdMennyiseg1 = szElem.querySelector("table tbody tr:nth-child(1) td:nth-child(4)");
  const tdMennyiseg2 = szElem.querySelector("table tbody tr:nth-child(2) td:nth-child(4)");

  console.assert(
    tdMennyiseg1.textContent.includes(tesztLista[0].mennyiseg.toString()),
    `Hiba: első termék mennyisége hibás (${tdMennyiseg1.textContent})`
  );
  console.assert(
    tdMennyiseg2.textContent.includes(tesztLista[1].mennyiseg.toString()),
    `Hiba: második termék mennyisége hibás (${tdMennyiseg2.textContent})`
  );

  console.log("kosarMegjelenitTeszt() lefutott");
}

kosarMegjelenitTeszt();
