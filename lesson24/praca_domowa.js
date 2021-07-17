// Praca domowa

//Zadnie 2 i 3

// fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => response.json())
//   .then((response) => console.log(response.results))
//   .catch((error) => {
//     console.log(`Ups coś poszło nie tak!`, error);
//   });

// Zadanie 4

// const pobierzImiona = async () => {
//   const response = await fetch("https://rickandmortyapi.com/api/character");
//   const data = await response.json();
//   console.log(data.results).catch((error) => {
//     console.log(`Ups coś poszło nie tak! `);
//   });
// };

// pobierzImiona();

// Zadanie 4

// const jednaPostac = async () => {
//   const response = await fetch("https://rickandmortyapi.com/api/character/2");
//   const data = await response.json();
//   console.log(data);
// };

// jednaPostac();

// Zadanie projekt
// Wersja podstawoaw

//a

let page = 1;
let info = null;

async function strona() {
  async function tablicaPostaci() {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const response = await data.json();
    return response;
  }

  const $buttonPrev = document.getElementById("prev");
  const $buttonNext = document.getElementById("next");
  const $buttonAlter = document.getElementById("alter");

  $buttonAlter.addEventListener("click", async (el) => {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const json = await data.json();
    const $lista = document.getElementById("lista");
    $lista.innerHTML = "";
    json.results
      .splice(6, 1)
      .forEach((character) => stworzKartePostaci(character));
  });

  $buttonPrev.addEventListener("click", async (el) => {
    if (info.prev === null) {
      alert("Jesteś na 1 stronie");
      return;
    }
    page--;

    // el.target.innerHTML = "Przechodzisz na poprzednią";

    const characters = await tablicaPostaci();
    info = characters.info;
    const $ilosc = document.getElementById("lista");
    $ilosc.innerHTML = "";

    characters.results.forEach(stworzKartePostaci);
  });

  $buttonNext.addEventListener("click", async (el) => {
    if (info.next === null) {
      alert("Jesteś na ostatniej stronie");
      return;
    }
    page++;

    const characters = await tablicaPostaci();
    info = characters.info;
    const $ilosc = document.getElementById("lista");
    $ilosc.innerHTML = "";

    characters.results.forEach(stworzKartePostaci);

    const data = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
  });

  const characters = await tablicaPostaci();
  info = characters.info;
  const $ilosc = document.getElementById("ilosc");
  $ilosc.innerHTML = characters.info.count;
  const $aktualnaStrona = document.getElementById("aktualnaStrona");
  $aktualnaStrona.innerHTML = console.log("char", characters);

  const $page = document.getElementById("aktualnaStrona");
  $page.innerHTML = 1;

  const $allPage = document.getElementById("wszystkie");
  $allPage.innerHTML = characters.info.pages;

  //b

  const pierwsze10Postaci = async () => {
    const data = await fetch("https://rickandmortyapi.com/api/character");
    const json = await data.json();
    const pierwsze10 = await json.results.splice(0, 10);
    console.log(pierwsze10);
  };

  pierwsze10Postaci();

  const moje = async () => {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const response = await data.json();
    return response;
  };

  moje();

  function stworzKartePostaci(data) {
    const $card = document.createElement("div");
    $card.classList = "card";

    const $img = document.createElement("img");
    $img.src = data.image;
    $img.alt = data.name;

    $card.appendChild($img);

    const $container = document.createElement("div");
    $container.classList = "container";

    const $name = document.createElement("h4");
    $name.innerHTML = data.name;

    const $type = document.createElement("p");
    $type.innerHTML = data.type;

    $container.appendChild($name);
    $container.appendChild($type);
    $card.appendChild($container);

    const $lista = document.getElementById("lista");
    $lista.appendChild($card);
  }

  characters.results.forEach(stworzKartePostaci);
}

strona();
