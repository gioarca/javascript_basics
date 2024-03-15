const h1 = document.createElement('h1');
h1.textContent = "Counter";

const p = document.createElement('p');
p.textContent = "This is a small excerise to see how javascript works. Use the buttons below to increase (+) and decrease (-) the number inside the counter."
p.setAttribute('id', 'element-insert');
p.setAttribute('class', 'text-normal padding');

const p1 = document.createElement('p');
p1.textContent = "Counter: ";
p1.setAttribute('id', 'Counter');
p1.setAttribute('class', 'Counter');

let result = document.createElement('label');
result.textContent = "0";
result.setAttribute('id', 'result');

const buttonincrease = document.createElement('button-increase');
buttonincrease.textContent = "+";
buttonincrease.setAttribute('type', 'button');
buttonincrease.setAttribute('class', 'increase');

const buttonreset = document.createElement('button-reset');
buttonincrease.textContent = "R";
buttonincrease.setAttribute('type', 'button');
buttonincrease.setAttribute('class', 'reset');

const buttondecrease = document.createElement('button-decrease');
buttondecrease.textContent = "-";
buttondecrease.setAttribute('type', 'button');
buttondecrease.setAttribute('class', 'decrease');

document.querySelector('#container').append(h1);
document.querySelector('#container').append(p);
document.querySelector('#container').append(p1);
document.querySelector('#container').append(result);
document.querySelector('#container').append(buttonincrease);
document.querySelector('#container').append(buttonreset);
document.querySelector('#container').append(buttondecrease);


let btnincrease = document.querySelector(".increase")
let btndecrease = document.querySelector(".decrease")

let counter = 0

btnincrease.addEventListener('click', function() {
    counter++
    document.querySelector("#result").innerHTML = counter
  })

btndecrease.addEventListener('click', function() {
    counter--
    document.querySelector("#result").innerHTML = counter
  }) 

btnreset.addEventListener('click', function() {
    counter = 0;
    document.querySelector("#result").innerHTML = counter
  })  
