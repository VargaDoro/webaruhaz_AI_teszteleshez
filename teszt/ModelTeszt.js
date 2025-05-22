import Model from "../PUBLIC/Model.js";

function addKosarTeszt_AzAdottTermekMegNemSzerepelAKosarban() {
  /* addKosar(termek): Ellenőrizd, hogy
    a termék hozzáadódik-e a kosárhoz, és ha már létezik, növeli-e a mennyiséget. */
  /* Példányosítani kell a modelt, meg kell hívni a model metodusát, meg kell nézni mi lett a kosár tartalma */
  const modell = new Model();
  const termek = {
    id: 0,
    nev: "Termék 1",
    ar: 1000,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
  };
  modell.addKosar(termek);
  termek.mennyiseg = 1;
  const kosarbanlevotermek = modell.getKosarLista()[0];
  console.assert(
    JSON.stringify(termek) === JSON.stringify(kosarbanlevotermek),
    termek,
    kosarbanlevotermek,
    "hiba az addKosarTeszt_AzAdottTermekMegNemSzerepelAKosarban"
  );
  console.log("addKosarTeszt_AzAdottTermekMegNemSzerepelAKosarban lefutott");
}

addKosarTeszt_AzAdottTermekMegNemSzerepelAKosarban();

function addKosarTeszt_AzAdottTermekMarSzerepelAKosarban() {
  const modell = new Model();
  const termek = {
    id: 0,
    nev: "Termék 1",
    ar: 1000,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
  };
  modell.addKosar(termek);
  modell.addKosar(termek);
  termek.mennyiseg = 2;
  const kosarbanlevotermek = modell.getKosarLista()[0];
  console.assert(modell.getKosarLista().length === 1, "a kosárba többször is");
  console.assert(
    JSON.stringify(termek) === JSON.stringify(kosarbanlevotermek),
    termek,
    kosarbanlevotermek,
    "hiba az addKosarTeszt_AzAdottTermekMarSzerepelAKosarban"
  );
  console.log("addKosarTeszt_AzAdottTermekMarSzerepelAKosarban lefutott");
}

addKosarTeszt_AzAdottTermekMarSzerepelAKosarban();

function removeKosarItemTeszt() {
  /* removeKosarItem(id): Ellenőrizd, hogy a megfelelő termék eltávolításra kerül-e a kosárból. */
  const modell = new Model();
  const termek = {
    id: 0,
    nev: "Termék 1",
    ar: 1000,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
  };
  modell.addKosar(termek);
  termek.mennyiseg = 1;
  modell.removeKosarItem(termek.id)
  const kosarbanlevotermek = modell.getKosarLista();
  console.assert(modell.getKosarLista().length === 0, "Hiba: a termék nem került eltávolításra")
  console.log("removeKosarItemTeszt lefutott")
}

removeKosarItemTeszt()