const sginput = document.querySelectorAll('.form-contorno')
const formula = document.getElementById('formulario-modal')
const confirma = document.querySelectorAll('.texto')
const usuario = `<small class="form-error">Ups, algo pasó...</small>`
const errorcheck = `<small class="form-error">Ups, el check...</small>`
const email = document.getElementById('exampleInputEmail1modal')
const emailValue = email.value.trim();
const mirar = document.getElementById('check-modal').checked;
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

  confirma.forEach((texto, indice) => {
    formula.addEventListener("submit", function(e){
        e.preventDefault();
        revisarTexto(indice) 
        addErrores(indice)
        console.log(mirar)
    }) 
         
})

    
        
function revisarTexto (indice) {
  if (confirma[indice].value === '') {
    confirma[indice].classList.add("error");
  } else if (indice == 1) {
    if (isEmail(emailValue)) {
      confirma[indice].classList.add("error");
    }
  }else {
    confirma[indice].classList.remove("error")
  }
   
    
}
function addErrores(indice){
  if (confirma[indice].value === '') {
    sginput[indice].innerHTML =  '';
    sginput[indice].innerHTML +=  usuario;
  } else if (indice == 1) {
    if (isEmail(emailValue)) {
      sginput[indice].innerHTML =  '';
      sginput[indice].innerHTML +=  usuario;
      
    }
  } else if (indice == 2) {
    if (mirar){ 
      sginput[indice].innerHTML =  '';
      sginput[indice].innerHTML +=  errorcheck;
    }
  }
}

document.querySelectorAll(".texto").forEach((element, indice) => {
    element.addEventListener("focus", (event) => {
      console.log(event);
      event.currentTarget.classList.remove("error")
      sginput[indice].innerHTML = '';
      console.log(mirar)
  })
})

