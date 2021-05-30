//1
//a)

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 2, 3));
//b)

function triangle(a, h) {
  x = (a * h) / 2;
  return (
    "Pole trójkąta to " +
    x +
    ", " +
    "czli ma on " +
    a +
    " długości podstawy i " +
    h +
    " wysokości"
  );
}

console.log(triangle(5, 10));

//c)

function drivingLicense(a, b) {
  return a - b + " tyle lat mam prawo jazdy";
}

console.log(drivingLicense(30, 18));

//d)

function fuelUsage(combustion, route) {
  return (
    (combustion * route) / 100 +
    " tyle spalił mi samochód paliwa, po przejechaniu " +
    route +
    " km"
  );
}

console.log(fuelUsage(11.5, 365));

//e)

function person(a, b, c) {
  return a + " ma " + b + " lata i " + c + " dzieci";
}

console.log(person("Ala", 23, 2));

//2

//a)

const tab = [1, 2, 3, 4];
function getTab(tab) {
  return tab;
}
console.log(tab);

//b)

const tab1 = [1, 2, 3];
function getTab1(tab1) {
  return tab1;
}
console.log(tab1[1]);

//c)

const namber = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
function returns(namber) {
  const arrayLength = namber.length;
  const theThirdElement = namber[2];
  return (
    "przekazana tablica ma " +
    arrayLength +
    " elementów, a element nr 3 jest " +
    theThirdElement
  );
}

console.log(returns(namber));

//d)

const tab2 = [];
function newItem(element) {
  const newTab2 = tab2.push(element);
  return newTab2;
}

newItem(1);
newItem(100);
newItem("Nowa tablica");
console.log(tab2);

//e)

const obj = {
  name: "Jan",
  surname: "Kowalski",
  age: 33,
};

function getName() {
  const imie = obj.name;
  return imie;
}
console.log(getName());

//f)

function dataOfThePerson() {
  const imie = "Adam";
  const nazwisko = "Mickiewicz";
  const wiek = 50;
  const wzrost = 175;
  return `imie ${imie} i nazwisko ${nazwisko} ma ${wiek} lat i ${wzrost} cm wzrostu`;
}
console.log(dataOfThePerson());

//g)

const obj1 = {
  age: 10,
};
function newAge(obj1, age) {
  obj1.age = age;
  return obj1.age;
}
newAge(obj1, 15);
console.log(obj1.age);

//3

//a)

const girl = {
  name1: "Agata",
  age: 17,
  drivingLicense: true,
};
console.log(girl);

if (girl.age < 18) {
  console.log("Nie ma prawa jazdy");
} else if (girl.age >= 18 && girl.drivingLicense == true) {
  console.log("Możesz śmiało jeździć");
} else {
  console.log("Nie ma prawa jazdy");
}

//b)

const shop = {
  dealer: "Kup",
};
console.log(shop);

if (shop.dealer == "Kup") {
  console.log("Widze, że zrobisz zakupy");
} else if (shop.dealer == "Sprzedaj") {
  console.log("Możesz tutaj swobodnie sprzedawać");
} else {
  console.log(
    "Nie wybrałeś żadnej z dostępnych opcji - wpisz Kup lub Sprzedaj"
  );
}

//c)

const nambers = {
  namber: -1,
};

console.log(nambers);

if (nambers.namber < 0) {
  console.log("Liczba jest ujemna");
} else if (nambers.namber > 0) {
  console.log("Liczba jest dodatania");
} else {
  console.log("Liczba jest równa 0");
}

//d)

const request = {
  namber: 5,
};

if (request.namber % 3 == 0 && request.namber % 5 == 0) {
  console.log("FizzBuzz");
} else if (request.namber % 3 == 0) {
  console.log("Fizz");
} else if (request.namber % 5 == 0) {
  console.log("Buzz");
}

//e)

const child = {
  age: 15,
  parentalConsent: true,
};

if (child.age < 15 && child.parentalConsent == true) {
  console.log("Możesz oglądać ten film");
} else if (child.age < 15 && child.parentalConsent == false) {
  console.log("Nie możesz oglądać tego filmu");
} else if (child.age >= 15) {
  console.log("Masz odpowiedni wiek na ten film");
}

// function consent(age, parentalConsent) {
//     return age >= 15 ? parentalConsent ? 'mozesz ogladac'
// }

//  TUTAJ POLEGŁEM PONIEWAŻ NIE WIEM JAK ZASTOSOWAĆ  ternary operatora

//f)

const answer = {
  word: false,
};
if (answer.word == true) {
  console.log("tak");
} else if (answer.word == false) {
  console.log("nie");
}

//g)

const even = {
  namber: -3,
};
console.log(even);
if (even.namber % 2 == 0) {
  console.log("Ta liczba jest parzysta");
} else {
  console.log("to nie jest parzysta liczba");
}

//4

//a)

const car = {
  model: "a5",
  marka: "Audi",
  rokProdukcji: 2022,
  isCabrio: false,
};
console.log(car);

if (car.rokProdukcji > 2021) {
  console.log("Auto jest dopiero produkowane");
} else if (car.rokProdukcji <= 2021) {
  console.log(car.marka, car.model, `Czy to auto jest Cabrio ? `, car.isCabrio);
}

//b)

const arr = [1, 2, 3, 1, 2, 3];
console.log(arr);

if (arr == 0) {
  console.log("pusta tablica");
} else {
  console.log("tablica ma " + arr.length + " elementów");
}

//c)

const person11 = {
  name: "Agata",
  surname: "Kowalska",
  age: 25,
  czyLubiCzytaćKsiążki: true,
  maTv: true,
};
const book = {
  tytuł: "Harry Potter",
  rodzaj: "fantazy",
  ilośćStron: 300,
};
if (person11.czyLubiCzytaćKsiążki == true) {
  console.log(
    "Cześć " +
      person11.name +
      " polecam Ci przeczytać " +
      book.tytuł +
      " książkę, ma tylko " +
      book.ilośćStron +
      " stron"
  );
} else if (person11.czyLubiCzytaćKsiążki == false && person11.maTv == true) {
  console.log("idź oglądać TV");
} else if (person11.czyLubiCzytaćKsiążki == false && person11.maTv == false) {
  console.log("Możesz spędzić czas na dworze");
}

// DLA MNIE NAJGORSZE BYŁO 2 ZADANIE (BĘDE MUSIAŁ WIĘCEJ POŚWIĘCIC CZASU)
