// da play no som quando clicado com mouse
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento && (elemento.localName === 'audio')){
      elemento.play();
    } else {
      console.log('Elemento não encontrado')
    }
  }

  const listaDeTeclas = document.querySelectorAll(".tecla");
  
  for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const instrumento = listaDeTeclas[contador].getAttribute("data-valor");
    listaDeTeclas[contador].onclick = function () {
      tocaSom("#" + instrumento);
    };
  }
  

  //usei para fazer o numpad também para ativar os sons
  //aqui é quando pressionada
  document.onkeydown = function (event) {
    key = event.key;
    switch (key) {
      case "7":
        tocaSom("#som_tecla_uepa");
        document.querySelectorAll(".tecla")[0].classList.add("ativa");
        break;
      case "8":
        tocaSom("#som_tecla_cavalo");
        document.querySelectorAll(".tecla")[1].classList.add("ativa");
        break;
      case "9":
        tocaSom("#som_tecla_ui");
        document.querySelectorAll(".tecla")[2].classList.add("ativa");
        break;
      case "4":
        tocaSom("#som_tecla_asmei");
        document.querySelectorAll(".tecla")[3].classList.add("ativa");
        break;
      case "5":
        tocaSom("#som_tecla_pidao");
        document.querySelectorAll(".tecla")[4].classList.add("ativa");
        break;
      case "6":
        tocaSom("#som_tecla_tomi");
        document.querySelectorAll(".tecla")[5].classList.add("ativa");
        break;
      case "1":
        tocaSom("#som_tecla_whats");
        document.querySelectorAll(".tecla")[6].classList.add("ativa");
        break;
      case "2":
        tocaSom("#som_tecla_disc");
        document.querySelectorAll(".tecla")[7].classList.add("ativa");
        break;
      case "3":
        tocaSom("#som_tecla_among");
        document.querySelectorAll(".tecla")[8].classList.add("ativa");
        break;
    }
  };
  
    //aqui é para sair

  document.onkeyup = function (event) {
    key = event.key;
    switch (key) {
      case "7":
        document.querySelectorAll(".tecla")[0].classList.remove("ativa");
        break;
      case "8":
        document.querySelectorAll(".tecla")[1].classList.remove("ativa");
        break;
      case "9":
        document.querySelectorAll(".tecla")[2].classList.remove("ativa");
        break;
      case "4":
        document.querySelectorAll(".tecla")[3].classList.remove("ativa");
        break;
      case "5":
        document.querySelectorAll(".tecla")[4].classList.remove("ativa");
        break;
      case "6":
        document.querySelectorAll(".tecla")[5].classList.remove("ativa");
        break;
      case "1":
        document.querySelectorAll(".tecla")[6].classList.remove("ativa");
        break;
      case "2":
        document.querySelectorAll(".tecla")[7].classList.remove("ativa");
        break;
      case "3":
        document.querySelectorAll(".tecla")[8].classList.remove("ativa");
        break;
    }
  };
  