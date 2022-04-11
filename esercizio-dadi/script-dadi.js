const dadoUno = '<div class="dice-1"></div>';
const dadoDue = '<div class="dice-2a"></div><div class="dice-2b"></div>';
const dadoTre = '<div class="dice-3a"></div><div class="dice-3b"></div><div class="dice-3c"></div>';
const dadoQuattro = '<div class="dice-4a"></div><div class="dice-4b"></div><div class="dice-4c"></div><div class="dice-4d"></div>';
const dadoCinque = '<div class="dice-5a"></div><div class="dice-5b"></div><div class="dice-5c"></div><div class="dice-5d"></div><div class="dice-1"></div>';
const dadoSei = '<div class="dice-6a"></div><div class="dice-6b"></div><div class="dice-6c"></div><div class="dice-6d"></div><div class="dice-6e"></div><div class="dice-6f"></div>';

let outputPc = document.getElementById('dado-pc');
let outputUser = document.getElementById('dado-user');
let rollDice = document.getElementById('roll-dice')

rollDice.addEventListener('click', function(){

  let pcChoice = Math.ceil(Math.random() * 6);
  let userChoice = Math.ceil(Math.random() * 6);
  let result = document.getElementById('esito')
  console.log(result);
  if(pcChoice < userChoice){
    result.innerHTML = 'Hai vinto!!! <br> Complimenti!!';
    console.log(result);
  }else if(pcChoice == userChoice){
    result.innerHTML = 'Hai pareggiato. <br> Riprova.'
  }else{
    result.innerHTML = 'Hai perso... <br> Andrà meglio la prossima volta!!'
  }

  switch (pcChoice) {
    case 1:
      outputPc.innerHTML = dadoUno;
      break;

    case 2:
      outputPc.innerHTML = dadoDue;
      break;

    case 3:
      outputPc.innerHTML = dadoTre;
      break;

    case 4:
      outputPc.innerHTML = dadoQuattro;
      break;

    case 5:
      outputPc.innerHTML = dadoCinque;
      break;

    case 6:
      outputPc.innerHTML = dadoSei;
      break;
  }

  switch (userChoice) {
    case 1:
      outputUser.innerHTML = dadoUno;
      break;

    case 2:
      outputUser.innerHTML = dadoDue;
      break;

    case 3:
      outputUser.innerHTML = dadoTre;
      break;

    case 4:
      outputUser.innerHTML = dadoQuattro;
      break;

    case 5:
      outputUser.innerHTML = dadoCinque;
      break;

    case 6:
      outputUser.innerHTML = dadoSei;
      break;
  }

})

