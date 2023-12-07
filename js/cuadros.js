

let valorRandom = 0;
let total = 0


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function valor(btn){
    valorRandom = getRandomInt(100)

    document.getElementById('btn'+btn).innerText = valorRandom

    total = sumar(valorRandom)

    document.getElementById('lbl-suma').innerText = "Suma: " +total
    
}

function sumar(valorRan){
  return  total + valorRan
}


