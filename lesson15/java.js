//1

//a

for (let i = 1; i < 10; i++) {
  console.log(i);
}

//b

console.log("...");

for (let i = 9; i >= 1; i--) {
  console.log(i);
}

console.log("...");
//c

for (let i = 5; i <= 15; i++) {
  console.log(i);
}

//lub

for (let i = 5; i < 16; i++) {
  console.log(i);
}
console.log("...");
//d

for (let i = 0; i > -11; i--) {
  console.log(i);
}
console.log("...");

//e

for (let i = 1; i < 21; i += 2) {
  console.log(i);
}

console.log("...");

//f

for (let i = 10; i > -11; i -= 4) {
  console.log(i);
}

console.log("...");

//g

for (let i = 1; i < 100; i *= 2) {
  console.log(i);
}

console.log("...");

//2

for (let i = 0; i < 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
console.log("...");

//b

for (let i = 0; i < 20; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

console.log("...");

//c

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(`Liczba parzysta ${i}`);
  } else {
    console.log(`Liczba nieparzysta`);
  }
}

console.log("...");

//d

for (let i = 0; i < 31; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} FizzBuzz`);
  } else if (i % 3 == 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 == 0) {
    console.log(`${i} Buzz`);
  } else {
    console.log(i);
  }
}

console.log("...");

//e

for (let i = 100; i >= 0; i -= 5) {
  if (i % 10 == 0) {
    console.log(`${i} - podzielna przez 10`);
  } else {
    console.log(i);
  }
}
console.log("...");

//3

//a

function petlaOd(liczba) {
  for (let i = 0; i <= liczba; i++) {
    console.log(i);
  }
}
petlaOd(10);

console.log("...");

//b

function petlaDo(liczba) {
  for (let i = liczba; i <= 15; i++) {
    console.log(i);
  }
}
petlaDo(10); // Nie wiem czy dobrze

console.log("...");

//c

function petlaIteracje(liczba) {
  for (let i = 0; i < 16; i += liczba) {
    console.log(i);
  }
}
petlaIteracje(5);

console.log("...");

//d

function petlaOdDo(liczba1, liczba2) {
  for (let i = liczba1; i <= liczba2; i++) {
    console.log(i);
  }
}
petlaOdDo(-10, 10);

console.log("...");

//e

function petlaTrzyArgumenty(liczba1, liczba2, liczba3) {
  for (let i = liczba1; i <= liczba2; i += liczba3) {
    console.log(i);
  }
}
petlaTrzyArgumenty(0, 10000, 2000);

console.log("...");

//4

//a

const liczby = [1, 2, 3, 4, 5];

for (i = 0; i < liczby.length; i++) {
  console.log(liczby[i]);
}

console.log("...");

//b

const name1 = ["Agata", "Beata", "Zosia", "Kinga", "Maria", "Paulina"];

for (i = 0; i < name1.length; i++) {
  console.log(`Cześć ${name1[i]}`);
}

console.log("...");

//c

const car = [
  {
    model: "BMW",
    kolor: "Złote",
  },
  {
    model: "Audi",
    kolor: "Grafitowe",
  },
  {
    model: "Opel",
    kolor: "Zielony",
  },
  {
    model: "VW",
    kolor: "Czarny",
  },
  {
    model: "Fiat",
    kolor: "Czerwony",
  },
];

for (let i = 0; i < car.length; i++) {
  console.log(`Przed Wami stoi ${car[i].kolor} ${car[i].model}`);
}

console.log("...");

//d

const tablica = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

console.log("...");

//e

const roznaTablicza = [1, true, "Łukasz", 2, false, "Agata", 3, "3", "true"];
for (let i = 0; i < roznaTablicza.length; i++) {
  if (typeof roznaTablicza[i] == "string") {
    console.log(roznaTablicza[i]);
  }
}

console.log("...");

//f

const roznaTablicza1 = [
  1,
  true,
  "Łukasz",
  2,
  false,
  "Agata",
  3,
  "3",
  "true",
  4,
  5,
  6,
  7,
  8,
  9,
  "1",
  "5",
  "9",
];
let nowaRoznaTablicza = [];
for (let i = 0; i < roznaTablicza1.length; i++) {
  if (typeof roznaTablicza1[i] == "number") {
    nowaRoznaTablicza.push(roznaTablicza1[i]);
    console.log(roznaTablicza1[i]);
  }
}
console.log("...");

console.log(`Nowa tablica ${nowaRoznaTablicza}`);

console.log("...");

console.log(nowaRoznaTablicza);

console.log("...");

//5

//a

const tablica1 = [1, 2, 3, 4, 5];

function tablicaSumuje(tablica1) {
  let sum = 0;
  for (let i = 0; i < tablica1.length; i++) {
    sum += tablica1[i];
  }
  console.log(sum);
}
console.log(tablica1);
tablicaSumuje(tablica1);

console.log("...");

//b

const tablica3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let parzyste1 = [];
let nieparzyste1 = [];

function liczby1(tablica4) {
  for (let i = 0; i < tablica4.length; i++) {
    if (tablica4[i] % 2 == 0) {
      parzyste1.push(tablica3[i]);
    } else {
      nieparzyste1.push(tablica3[i]);
    }
  }
  console.log(parzyste1);
  console.log("...");
  console.log(nieparzyste1);
  console.log("...");
  console.log(`parzyste ${parzyste1}`);
  console.log("...");
  console.log(`nieparzyste ${nieparzyste1}`);
}
liczby1(tablica3);

console.log("...");

//c

function stringg(string) {
  if (string.includes("y") == true) {
    console.log(`Jest!`);
  } else {
    console.log(`Nie ma`);
  }
}
stringg(`Dzisiaj chyba będe oglądał TV`);
stringg(`Dzisiaj nie ogladam TV`);

console.log("...");

//d

function multipleNumber(num) {
  let wynik = num;
  for (let i = num - 1; i > 0; i--) {
    wynik *= i;
  }
  console.log(wynik);
}
multipleNumber(1);
multipleNumber(2);
multipleNumber(3);
multipleNumber(4);
multipleNumber(5);
multipleNumber(6);

console.log("...");

//e

const arr1 = [1, 2, 3];

function parametrString(arr1, string) {
  typeof string == "string";
}
// POKONAŁ MNIE TEN PRZYKŁAD

//f

const impreza = [
  {
    name: "Agata",
    lastName: "Kowalska",
    hasCar: true,
    hasDrivingLicence: true,
  },
  {
    name: "Paweł",
    lastName: "Majak",
    hasCar: false,
    hasDrivingLicence: true,
  },
  {
    name: "Marcin",
    lastName: "Giertych",
    hasCar: false,
    hasDrivingLicence: false,
  },
  {
    name: "Zbifniew",
    lastName: "Stonoga",
    hasCar: true,
    hasDrivingLicence: false,
  },
];

function powrotZImprezy(kierowca) {
  for (let i = 0; i < impreza.length; i++) {
    const person = impreza[i];
    if (person.hasCar == true && person.hasDrivingLicence == true) {
      console.log(
        `${person.name} ma prawko i samochód wiec mam jak wrócić do domu`
      );
    } else if (person.hasCar == false && person.hasDrivingLicence == true) {
      console.log(
        `Dzisiaj ${person.name} ${person.lastName} może kierować tylko potrzebuje samochodu`
      );
    } else if (person.hasCar == false && person.hasDrivingLicence == false) {
      console.log(
        `Z dzisiajszej imprezy wracamy na piechote, ponieważ ${person.name} ${person.lastName} nie mają prawka ani samochodu`
      );
    } else {
      console.log(
        `Po co przychodzisz na impreze ${person.name} ${person.lastName} nie masz prawka i auta i w dodatku nie pijesz :)  `
      );
    }
  }
}
powrotZImprezy(impreza);

console.log("...");
