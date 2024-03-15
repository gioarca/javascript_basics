const h1 = document.createElement("h1");
h1.textContent = "Counter";

const p = document.createElement("p");
p.textContent =
  "Use the buttons below: (+) to increase, (-) to decrease and (R) to reset the number.";
p.setAttribute("id", "paragraph");

const counterDiv = document.createElement("div");
counterDiv.setAttribute("id", "counterDiv");

let result = document.createElement("label");
result.textContent = "0";
result.setAttribute("id", "result");

const buttonincrease = document.createElement("button-increase");
buttonincrease.textContent = "+";
buttonincrease.setAttribute("type", "button");
buttonincrease.setAttribute("class", "increase");

const buttonreset = document.createElement("button-reset");
buttonreset.textContent = "R";
buttonreset.setAttribute("type", "button");
buttonreset.setAttribute("class", "reset");

const buttondecrease = document.createElement("button-decrease");
buttondecrease.textContent = "-";
buttondecrease.setAttribute("type", "button");
buttondecrease.setAttribute("class", "decrease");

document.querySelector("#container").append(h1);
document.querySelector("#container").append(p);
document.querySelector("#container").append(counterDiv);
document.querySelector("#counterDiv").append(result);
document.querySelector("#counterDiv").append(buttonincrease);
document.querySelector("#counterDiv").append(buttonreset);
document.querySelector("#counterDiv").append(buttondecrease);

let btnincrease = document.querySelector(".increase");
let btndecrease = document.querySelector(".decrease");
let btnreset = document.querySelector(".reset");

let counter = 0;

btnincrease.addEventListener("click", function () {
  counter++;
  document.querySelector("#result").innerHTML = counter;
});

btnreset.addEventListener("click", function () {
  counter = 0;
  document.querySelector("#result").innerHTML = counter;
});

btndecrease.addEventListener("click", function () {
  counter--;
  document.querySelector("#result").innerHTML = counter;
});
