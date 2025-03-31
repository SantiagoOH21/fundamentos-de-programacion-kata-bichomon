console.log(document.title);

//Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

const title1 = document.getElementById("gen-1");
title1.innerText = "Generasión 1 Pokimon";

//Cambia el color de fondo de la primera generación de Pokimon.
const changeBacColor = document.querySelectorAll(
  ".infocard-list.infocard-list-pkmn-lg"
);
changeBacColor[0].style.background = "lightgray";

//Imprime por consola la URL de la página.
const urlPokemon = document.URL;
console.log("Esta es la URL de la página", urlPokemon);

// Imprime por consola el dominio de la página.
const domainPokemon = document.domain;
console.log("Este es el dominio de la página", domainPokemon);

//Imprime todos los nodos de imagen.
const allPics = document.getElementsByTagName("img");
console.log(allPics);

//Sustituye el atributo "src" de todas las imágenes
document
  .querySelectorAll(".img-fixed.img-sprite")
  .forEach(
    (img) => (img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif")
  );

//Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
document
  .querySelectorAll(".infocard-lg-data.text-muted .itype.flying")
  .forEach(
    (card) =>
      (card.closest(".infocard-lg-data.text-muted").style.background =
        "lightblue")
  );

// Otra forma de cambiar el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
// document.querySelectorAll(".infocard-lg-data.text-muted").forEach((card) => {
//   if (card.innerHTML.includes("itype flying")) {
//     card.style.background = "lightblue";
//   }
// });
