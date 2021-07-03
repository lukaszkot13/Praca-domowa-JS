const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1

function wszystkieElementy(accu, aktualnaWartosc) {
  console.log("akumulator", accu);
  return accu + aktualnaWartosc;
}

const newArray = array.reduce(wszystkieElementy);

console.log(newArray);

//2

function filtrParzyste(item) {
  return item % 2 === 0;
}

function wszystkieParzyste(accu, aktualnaWartosc) {
  console.log("Parzyste", accu);
  return accu + aktualnaWartosc;
}

const newArrayParzyste = array.filter(filtrParzyste).reduce(wszystkieParzyste);

console.log(newArrayParzyste);

//3

function suma(accu, aktualnaWartosc) {
  console.log("akumulator", accu);
  return accu + aktualnaWartosc;
}

const sumaZPlusem = array.reduce(suma, 10);

console.log(sumaZPlusem);

//4// Napisz czym będzie accumulator jak nie podamy initialValue,
// a czym będzie jak podamy initialValue

// Akumulatorem jak nie podamy initialValue będzie pierwszy element Tablicy
// a jak podamy initialValue to on stanie sie akumulatorem

//5// Jeśli podamy initialValue w tablicy to jaki index
// będzie miał prawdziwy pierwszy element naszej tablicy ?

// Wydaje mi sie ze jeżeli podamy initialValue to on będzie pierwszym elementem

//6

function summ(arr) {
  let sum = 0;
  for (const val of arr) {
    sum += val;
  }
  return sum;
}

const someArray = [11, 3, 5, 31, 31, 54, 23, 14];

//7

function wiekszyOd(item) {
  return item > 50;
}

const newSomeArray = someArray.some(wiekszyOd);

console.log(newSomeArray);

//8

function wszystkieWieksze(item) {
  return item > 2;
}

const newSomeArray1 = someArray.every(wszystkieWieksze);

console.log(newSomeArray1);

//9

// W SOME jakikolwiek element naszej tablicy musi spełniać warunek tak jak w
// zadaniu 7
// W EVERY wszystkie elementy tablicy muszą spełniać warunek tak jak w zadaniu 8

// 10

function podzielnePrzez(item) {
  if (item % 7 === 0) {
    console.log(`W tablicy ${someArray} znajdja sie liczny podzielne przez 7 `);
  } else {
    console.log(`W tablicy ${someArray} nie ma liczb podzielnych przez 7`);
  }
}

const liczbyPodzielne = someArray.some(podzielnePrzez);

console.log(liczbyPodzielne);

//nie wiem dlaczego tak sie wyswietla
// W tablicy 11,3,5,31,31,54,23,14 nie ma liczb podzielnych przez 7
// W tablicy 11,3,5,31,31,54,23,14 nie ma liczb podzielnych przez 7
// W tablicy 11,3,5,31,31,54,23,14 nie ma liczb podzielnych przez 7
// W tablicy 11,3,5,31,31,54,23,14 nie ma liczb podzielnych przez 7
// W tablicy 11,3,5,31,31,54,23,14 nie ma liczb podzielnych przez 7
// W tablicy 11,3,5,31,31,54,23,14 nie ma liczb podzielnych przez 7
// W tablicy 11,3,5,31,31,54,23,14 nie ma liczb podzielnych przez 7
// W tablicy 11,3,5,31,31,54,23,14 znajdja sie liczny podzielne przez 7
// false
// prosze o wyjaśnienie byłem pewny ze to bedzie dobrze

const dzielimy = () => {
  if (podzielnePrzez) {
    console.log(`W tablicy znajdja sie liczny podzielne przez 7 `);
  } else {
    console.log(`W tablicy nie ma liczb podzielnych przez 7`);
  }
};

dzielimy();

// 11  I  12

//    ZROBIĆ !!

// tego zadanie nie wiedziałem jak zrobić
console.log(`zadanie 11`);
const arr11 = [101, 102, 103, 104];

const wiekszyOd100 = arr11.some((namber) => namber > 100);
const wiekszyOd100_1 = some((namber) => namber > 100);

function some(fn) {
  for (let i = 0; i < arr11.length; i++) {
    const number = arr11[i];
    if (fn(number)) {
      return true;
    }
  }
  return false;
}

console.log(wiekszyOd100);
console.log(wiekszyOd100_1);

//12

console.log(`zadanie 12`);

function every2(fn) {
  for (let i = 0; i < this.length; i++) {
    const number = this[i];
    if (!fn(number)) {
      return false;
    }
  }
  return true;
}

Array.prototype.every2 = every2;

const wiekszyOd100_2 = arr11.every((number) => number > 100);
const wiekszyOd100_3 = arr11.every2((number) => number > 100);

console.log(wiekszyOd100_2);
console.log(wiekszyOd100_3);

// reduce

function reduce2(fn, initialValue) {
  for (let i = 0; i < this.length; i++) {}
}
function sumuj(suma, number) {
  return suma + number;
}
const sum11 = arr11.reduce(sumuj, 0);
// const sum = arr11.reduce((sum, number) => sum + number, 0);

console.log(sum11);
//13

const tablica = [1, 2, 3, 4, 5, "string", "imie", "nazwisko"];

function tylkoStringi(item) {
  return typeof item === "number";
}

function sum(prev, next) {
  return prev + next;
}

const nowaTablica = tablica.filter(tylkoStringi).reduce(sum);

console.log(nowaTablica);

//14

function suma1(accu, aktualnaWartosc) {
  console.log("akumulator", accu);
  return accu - aktualnaWartosc;
}

const sumaZPlusem1 = array.reduce(suma1, 10);

console.log(sumaZPlusem1);

//15
console.log("...");
const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function szukaj(array4, value) {
  return array4.some(function (element) {
    return element === value;
  });
}

console.log(szukaj(array4, "5"));
console.log(szukaj(array4, 5));

// Czy da sie ten przykład zrobic uzywając dwóch funkcji oddzielnych
// bo jakos zgłupiałem

//16

const obiektSamochodów = function (model, yearOfProduction, color) {
  this.model = model;
  this.yearOfProduction = yearOfProduction;
  this.color = color;
  this.drive = () => console.log("Jedziemy");
};

const BMW = new obiektSamochodów("35d", 2009, "Gold");
const Mercedes = new obiektSamochodów("c200", 2001, "Silver");

console.log(BMW);
console.log(Mercedes);

// 17

// W oparciu o konstruktor tworzy nowy obiekt

//19

obiektSamochodów.prototype.tankFuel = function () {
  console.log("tankowanie");
};

console.log(BMW.tankFuel());

obiektSamochodów.prototype.stop = function () {
  console.log("Zatrzymaj sie");
};

console.log(Mercedes.stop());

// Słabo z tym sie czuje !! najgorzej z prototypami
