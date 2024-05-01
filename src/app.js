/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "Mi perro",
    "Un murciélago",
    "Un gato",
    "Una multitud",
    "Una iguana"
  ];
  let action = ["orinó", "rompió", "se comió", "rayó", "destruyó"];
  let what = [
    "mi tarea",
    "las teclas de mi laptop",
    "mi carro",
    "las llaves de mi casa",
    "la puerta de mi casa"
  ];
  let when = [
    "hace cinco minutos",
    "hace ratico",
    "justo cuando me llamaste",
    "mientras yo estaba comiendo",
    "esta mañana"
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)];

  let randomAction = action[Math.floor(Math.random() * action.length)];

  let randomWhat = what[Math.floor(Math.random() * what.length)];

  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excusa = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

  document.getElementById("excusa").innerHTML = excusa;
};
