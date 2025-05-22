import Kosar from "./Kosar.js";
import Termekek from "./Termekek.js";
//ez+
let eventListenersRegistered = false;

class Controller {
  constructor(szuloElem, oldal, modell) {
    this.model = modell;
    this.szuloElem = szuloElem;
    oldal === "kosar" ? this.initKosar() : this.initTermekek();
    //ez+
    if (!eventListenersRegistered) {
      this.initEventListeners();
      eventListenersRegistered = true;
    }
    //atraktam konstruktorba a szures és rendezést mivel azt minden elemre akarom használni nemcsak egysze
    window.addEventListener("rendezes", (event) => {
      const { irany } = event.detail;
      this.model.rendezTermekLista(irany);
      this.termekek.init(this.model.getTermekLista());
    });

    window.addEventListener("szures", (event) => {
      const { keresesoKifejezes } = event.detail;
      const szurtLista = this.model.szuresTermekLista(keresesoKifejezes);
      this.initTermekek(szurtLista);
    });

    this.kosarDBElem = document.querySelector("#kosarDb");
    this.kosarDbKiir();
  }
  kosarDbKiir() {
    this.kosarDBElem.innerHTML = this.model.getKosarDarabszam();
    this.kosarDBElem.classList.add("badge", "bg-primary", "rounded-pill");
  }
  initKosar() {
    const kosarLista = this.model.getKosarLista();
    // Ha már van kosár példány, csak frissítjük
    if (this.kosar) {
      this.kosar.megjelenit(kosarLista);
    } else {
      this.kosar = new Kosar(kosarLista, this.szuloElem);
    }
    this.kosarDbKiir();
  }
  initTermekek(lista = null) {
    // Megjelenít egy animált gif karikát a terméklista frissítése előtt
    const loadingSpinner = document.createElement("div");
    loadingSpinner.innerHTML =
      '<img src="./kepek/loading.gif" alt="Betöltés..." style="display: block; margin: 0 auto;">';
    this.szuloElem.innerHTML = ""; // Törli a meglévő tartalmat
    this.szuloElem.appendChild(loadingSpinner);

    // Frissíti a terméklistát
    setTimeout(() => {
      this.termekek = new Termekek(
        this.szuloElem,
        lista || this.model.getTermekLista()
      );
      loadingSpinner.remove(); // Eltávolítja az animált gif karikát
    }, 300); // Szimulált késleltetés a jobb felhasználói élmény érdekében
  }
  initEventListeners() {
    window.addEventListener("kosarbaTesz", (event) => {
      const { id } = event.detail;
      const termek = this.model.getTermekLista().find((t) => t.id === id);
      if (termek) {
        this.model.addKosar(termek);
        this.kosarDbKiir();
      } else {
        console.error("Termék nem található:", id);
      }
    });
    
    window.addEventListener("novel", (event) => {
      const id = event.detail;
      this.model.increaseQuantity(id);
      this.initKosar(); // új hívás
    });

    window.addEventListener("csokkent", (event) => {
      const id = event.detail;
      this.model.decreaseQuantity(id);
      this.initKosar();
    });

    window.addEventListener("torles", (event) => {
      const id = event.detail;
      this.model.removeKosarItem(id);
      this.initKosar();
    });
  }
}

export default Controller;
