//1

//a
const osoba = {
  imie: "Jan",
  nazwisko: "Kowalski",
  wiek: 45,
  miasto: "Opole Lubeleksie",
};

for (property in osoba) {
  console.log(`${property}: ${osoba[property]}`);
}
console.log("...");
//b

const tablica = [1, 2, 3, 4, 5];

for (tabliczna in tablica) {
  console.log(tabliczna);

  console.log(tablica[tabliczna]);
}
console.log("....");

//2

//a

for (zadanie2 of tablica) {
  console.log(zadanie2);
}
console.log("....");

//b

const wyswietlStringa = "Hellow World";

for (stringg of wyswietlStringa) {
  console.log(stringg);
}

//3

//a
let a = -5;
while (a <= 5) {
  console.log(a);
  a++;
}

console.log("....");

//b

let b = -5;
do {
  console.log(b);
  b++;
} while (b <= 5);

console.log("....");

//4

//a

const array = [1, 2, 3, 4, 5];

function razyDwa(array) {
  return array * 2;
}

const newArray = array.map(razyDwa);

console.log("array", array);
console.log("newArray", newArray);

console.log("....");

//b

const imiona = ["Agata", "Ola", "Paulina", "Basia"];

function przywitanie(imionaa) {
  return `Cześć ${imionaa}`;
}

const newImiona = imiona.map(przywitanie);

console.log("imiona", imiona);
console.log(newImiona);

console.log("....");

//5

//a

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function nieparzyste(liczby) {
  return liczby % 2 == 0;
}

const newArray1 = array1.filter(nieparzyste);

console.log("array1", array1);
console.log("newArray1", newArray1);
console.log("...");
//b

function wiekszeOd(piec) {
  return piec > 5;
}

const newArray2 = array1.filter(wiekszeOd);

console.log("array1", array1);

console.log("newArray2", newArray2);
console.log("...");
//c

const persons = [
  {
    name: "Jan",
    lastname: "Kowalski",
    gender: "men",
  },
  {
    name: "Zofia",
    lastname: "Kowalska",
    gender: "women",
  },
  {
    name: "Basia",
    lastname: "Jabłońska",
    gender: "women",
  },
  {
    name: "Adam",
    lastname: "Mickiewicz",
    gender: "men",
  },
];

function tylkoKobiety(kobieta) {
  console.log("wszyscy", persons);
  if (kobieta.gender == "women") {
    return true;
  }
  return false;
}

const wyswietlTylkoKobiety = persons.filter(tylkoKobiety);

console.log(`Tylko kobiety`, wyswietlTylkoKobiety);
console.log("...");
//6

console.log(array1);
array1.forEach(function (zmniejszone) {
  zmniejszone = zmniejszone - 1;
  console.log(zmniejszone);
});
console.log("...");
//7

//a

const str = ["d", "a", "s", "f"];

console.log(str.sort());
console.log("...");
//b

const array3 = [9, 2, 1, 6, 5, 4, 7, 8, 3];
console.log(array3);

const newArray3 = array3.sort(function (a, b) {
  return a - b;
});

console.log(newArray3);
console.log("...");
//c

const newArray4 = array3.sort(function (a, b) {
  return b - a;
});
console.log(newArray4);
console.log("...");
//8

const array8 = [9, 2, 1, 6, 5, 4, 7, 8, 3];

const newArray88 = array8.map(powiekszajaca).filter(filtrujaca).sort(sortujaca);

console.log(array8);
console.log("...");
console.log(newArray88);

function powiekszajaca(powiekszony) {
  return powiekszony + 5;
}

// const newArray8 = array8.map(powiekszajaca);
// console.log(newArray8);

function filtrujaca(filtr) {
  if (filtr > 10) {
    return true;
  }
}

// const newArray88 = newArray8.filter(filtrujaca);

// console.log(newArray88);

function sortujaca(a, b) {
  return b - a;
}

// const wynik = newArray88.sort(sortujaca);

// console.log(wynik);

// W tym zadaniu sprawdzałem sobie po każdej funkcji czy wszystko działa
// zwiększyłem element o 5 zeby było wiecej elementów
