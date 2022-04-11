const listaAutorizzati = ['ciao@g.it'];



let output = document.querySelector('.esito-verifica');
console.log(output)
let verficaBtn = document.getElementById('bottone-verifica');

verficaBtn.addEventListener('click', function(){
  for(i=0; i<listaAutorizzati.length; i++){
    let mailUtente = document.getElementById('mail-check').value;
    console.log(mailUtente);
    if(mailUtente == listaAutorizzati[i]){
      output.innerHTML = "L'utente puo' accedere";
      output.classList.remove('sfondo','yellow','red');
      output.classList.add('sfondo','green');
    }else if(mailUtente==''){
      output.innerHTML = "Inserisci prima un indirizzo mail";
      output.classList.remove('sfondo','green','red');
      output.classList.add('sfondo','yellow');
    }
    else{
      output.innerHTML = "L'utente non è abilitato ad eseguire l'accesso";
      output.classList.remove('sfondo','yellow','green');
      output.classList.add('sfondo','red');
    }
  }
})

