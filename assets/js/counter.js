let btnincrease = document.querySelector("#increase")
let btndecrease = document.querySelector("#decrease")

let counter = 0

btnincrease.addEventListener('click', function() {
    counter++
    document.querySelector("#result").innerHTML = counter
  })

btndecrease.addEventListener('click', function() {
    counter--
    document.querySelector("#result").innerHTML = counter
  })  
