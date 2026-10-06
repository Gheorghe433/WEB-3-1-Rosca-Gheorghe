
let fructe = ["Măr", "Pară", "Banana", "Portocală", "Kiwi"];
console.log("Lista:", fructe);
console.log("Primul:", fructe[0]);
console.log("Ultimul:", fructe[fructe.length - 1]);
console.log("Număr de elemente:", fructe.length);


let orase = ["Chișinău", "Bălți", "Cahul"];
orase.push("Orhei");
orase.unshift("Soroca");
orase.pop();
orase.shift();
console.log("Lista finală de orașe:", orase);

document.getElementById("ex12").textContent =
  "Fructe: " + fructe.join(", ") +
  "\nPrimul: " + fructe[0] +
  "\nUltimul: " + fructe[fructe.length - 1] +
  "\nNumăr de elemente: " + fructe.length +
  "\nOrașe (final): " + orase.join(", ");


let produse = ["Pâine", "Lapte", "Ouă"];
const listaEl = document.getElementById("lista");
const produsEl = document.getElementById("produs");

function afiseazaLista() {
  if (produse.length === 0) {
    listaEl.innerHTML = '<span class="warn">Lista este goală!</span>';
  } else {
    listaEl.textContent = produse.join(", ");
  }
}

function citesteProdus() {
  const v = produsEl.value.trim();
  produsEl.value = "";
  return v;
}

function adaugaSfarsit() {
  const p = citesteProdus();
  if (p) { produse.push(p); }
  afiseazaLista();
}

function adaugaInceput() {
  const p = citesteProdus();
  if (p) { produse.unshift(p); }
  afiseazaLista();
}

function stergePrimul() { produse.shift(); afiseazaLista(); }
function stergeUltimul() { produse.pop(); afiseazaLista(); }

afiseazaLista();


let elevi = [
  { nume: "Popescu Ana", varsta: 17, nota: 9 },
  { nume: "Rusu Mihai", varsta: 18, nota: 8 },
  { nume: "Ciobanu Maria", varsta: 17, nota: 10 }
];

const catalogEl = document.getElementById("catalog");
const rezEl = document.getElementById("rezultat");

function afiseazaElevi() {
  catalogEl.innerHTML = "";
  document.getElementById("numar").textContent = "Număr de elevi: " + elevi.length;

  if (elevi.length === 0) {
    catalogEl.innerHTML = '<span class="warn">Catalogul este gol!</span>';
    return;
  }

  elevi.forEach(function (e, i) {
    const d = document.createElement("div");
    d.className = "elev";
    d.innerHTML = "<strong>" + (i + 1) + ". </strong><strong></strong>" +
      "<br>Vârsta: " + e.varsta + "<br>Nota: " + e.nota;
    d.children[1].textContent = e.nume;
    catalogEl.appendChild(d);
  });
}

function adaugaElev() {
  const nume = document.getElementById("nume").value.trim();
  const varsta = parseInt(document.getElementById("varsta").value);
  const nota = parseFloat(document.getElementById("nota").value);

  if (!nume || isNaN(varsta) || isNaN(nota)) {
    rezEl.textContent = "Completează corect Nume, Vârsta și Nota.";
    return;
  }

  let elevNou = { nume: nume, varsta: varsta, nota: nota };
  elevi.push(elevNou);

  ["nume", "varsta", "nota"].forEach(id => document.getElementById(id).value = "");
  rezEl.textContent = "Elev adăugat: " + nume;
  afiseazaElevi();
}

function gasesteElev(nume) {
  const n = nume.trim().toLowerCase();
  return elevi.find(e => e.nume.toLowerCase() === n);
}

function stergeElev() {
  const nume = document.getElementById("numeSterge").value;
  const gasit = gasesteElev(nume);

  if (!gasit) {
    rezEl.textContent = "Elevul nu a fost găsit!";
    return;
  }

  elevi.splice(elevi.indexOf(gasit), 1);
  document.getElementById("numeSterge").value = "";
  rezEl.textContent = "Elev șters: " + gasit.nume;
  afiseazaElevi();
}

function cautaElev() {
  const gasit = gasesteElev(document.getElementById("numeCauta").value);
  rezEl.textContent = gasit
    ? "Elev găsit!\nNume: " + gasit.nume + "\nVârsta: " + gasit.varsta + "\nNota: " + gasit.nota
    : "Elevul nu a fost găsit!";
}

afiseazaElevi();