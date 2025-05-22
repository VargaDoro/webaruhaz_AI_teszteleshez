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
  modell.removeKosarItem(termek.id);
  const kosarbanlevotermek = modell.getKosarLista();
  console.assert(
    modell.getKosarLista().length === 0,
    "Hiba: a termék nem került eltávolításra"
  );
  console.log("removeKosarItemTeszt() lefutott");
}
removeKosarItemTeszt();

function increaseQuantityTeszt() {
  const modell = new Model();
  const termek = {
    id: 0,
    nev: "Termék 1",
    ar: 1000,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
  };
  modell.addKosar(termek);
  modell.increaseQuantity(termek.id);
  const kosarbanlevotermek = modell.getKosarLista()[0];
  console.assert(
    kosarbanlevotermek.mennyiseg === 2,
    `Hiba: a mennyiség nem nőtt! Jelenlegi érték: ${kosarbanlevotermek.mennyiseg}`
  );
  console.assert(
    modell.getKosarLista().length === 1,
    "Hiba: a kosárban duplikálódott a termék!"
  );
  console.log("increaseQuantityTeszt() lefutott");
}
increaseQuantityTeszt()

function decreaseQuantityTeszt() {
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
  modell.decreaseQuantity(termek.id);
  const kosar = modell.getKosarLista();
  console.assert(
    kosar.length === 1,
    "Hiba: a termék eltávolításra került, pedig csak csökkennie kellett volna!"
  );
  console.assert(
    kosar[0].mennyiseg === 1,
    `Hiba: a mennyiség nem csökkent 1-re! (${kosar[0].mennyiseg})`
  );
  modell.decreaseQuantity(termek.id);
  console.assert(
    modell.getKosarLista().length === 0,
    "Hiba: a termék nem került eltávolításra, amikor a mennyiség 1 volt!"
  );
  console.log("decreaseQuantityTeszt() lefutott");
}

decreaseQuantityTeszt()