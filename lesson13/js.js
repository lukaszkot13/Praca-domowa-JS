//1)
//a)

function car(marka, model, rakProdukcji) {
  return `To jest ${marka} jego model to ${model} został wyprodukowany ${rakProdukcji}`;
}
console.log(car("Merdedes", "E", 2018));
console.log(car("Audi", "S5", 2019));
console.log(car("Opel", "Astra", 2011));

//b)
console.log("........");

function car1(obj) {
  return `To jest ${obj.marka1} jego model to ${obj.model1} został wyprodukowany ${obj.rakProdukcji1}`;
}

const samochod = {
  marka1: "Audi",
  rakProdukcji1: 2020,
  model1: "A8",
};

const samochod1 = {
  marka1: "BMW",
  rakProdukcji1: 2000,
  model1: "E90",
};

const samochod2 = {
  model1: "500",
  rakProdukcji1: 2021,
  marka1: "Fiat",
};

console.log(samochod);
console.log(car1(samochod));
console.log(samochod1);
console.log(car1(samochod1));
console.log(samochod2);
console.log(car1(samochod2));

//2
console.log("........");

function car1(obj) {
  return `To jest ${obj.marka1} jego model to ${obj.model1} został wyprodukowany ${obj.rakProdukcji1}`;
}

const auto = {
  marka1: "Audi",
  rakProdukcji1: 2020,
  model1: "A8",
};

const auto1 = {
  marka1: "BMW",
  rakProdukcji1: 2000,
  model1: "E90",
};

const auto2 = {
  model1: "500",
  rakProdukcji1: 2021,
  marka1: "Fiat",
};

const { model1, marka1, rakProdukcji1 } = auto;

console.log(auto);
console.log(car1(auto));
console.log(auto1);
console.log(car1(auto1));
console.log(auto2);
console.log(car1(auto2));

console.log(model1);
console.log(rakProdukcji1);

//3

console.log("........");

function car2(obj1) {
  return `To jest ${marka2} jego model to ${model2} został wyprodukowany ${rakProdukcji2}`;
}

const auto3 = {
  marka2: "Polonez",
  rakProdukcji2: 1999,
  model2: "Caro",
};
const { model2, marka2, rakProdukcji2 } = auto3;

console.log(car2(auto3));

//4

let x = 10;
console.log(x);
console.log(x++); // to działa, że w następnej linijce kodu dopiero dodaje 1
console.log(x);

console.log("........");

let y = 10;
console.log(y);
console.log(++y); // w tej samej linijce dodaje już 1
console.log(y);

//5

// function kosz()  {
//   function rzutZaDwaPunkty {

//   }
// }
