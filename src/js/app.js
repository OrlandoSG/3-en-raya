const boton = document.querySelector('.cuadros');


let x = 0;
boton.addEventListener('click', obtenerDatosBotones);


// const inicio = document.getElementById('inicio');
// inicio.addEventListener('click', ()=>{

//    const desabilitarBotones = document.querySelectorAll('button');
//        console.log(desabilitarBotones);
//        for (let i = 0; i < desabilitarBotones.length; i++) {
//          console.log(desabilitarBotones[i]);
//                    desabilitarBotones[i].disabled  = false;         
//        }

// });


function obtenerDatosBotones(e){


   
   if(e.target.textContent == ""){
      

      if(x == 0){
         e.target.textContent = 'X';
         e.target.className = 'marcadoX';
         x++;
         ComprobarGanador();        
         const marcadoX = document.querySelectorAll('.marcadoX');
         
         ComprobarGanador(marcadoX, 'Jugador 1');
      }else{
         e.target.textContent = 'O';
         e.target.className = 'marcadoO';
         x--;
         const marcadoO = document.querySelectorAll('.marcadoO');
         ComprobarGanador(marcadoO, 'jugador 2');
      }

   }else{

   }

}

function ComprobarGanador(marcado=0, ganado){
   let numeros = '';

   const ganador = document.querySelector('#resultado');
   if(marcado.length > 2){
   for (let i = 0; i < marcado.length; i++) {
       numeros += marcado[i].id;
      //  console.log(numeros);
       const div = document.createElement('div');
       console.log(numeros);

       switch (true) {
         case (numeros.includes('1') && numeros.includes('2') && numeros.includes('3')):
              div.innerHTML = `Ganador ${ganado}`;
            break;

         case (numeros.includes('1') && numeros.includes('4') && numeros.includes('7')):
            div.innerHTML = `Ganador ${ganado}`;
            break;

         case (numeros.includes('1') && numeros.includes('5') && numeros.includes('9')):
            div.innerHTML = `Ganador ${ganado}`;
            break;

         case (numeros.includes('2') && numeros.includes('5') && numeros.includes('8')) :
            div.innerHTML = `Ganador ${ganado}`;
            break;

         case (numeros.includes('3') && numeros.includes('5') && numeros.includes('7')):
            div.innerHTML = `Ganador ${ganado}`;
            break;
         case (numeros.includes('3') && numeros.includes('6') && numeros.includes('9')):
            div.innerHTML = `Ganador ${ganado}`; 
            break;
         case (numeros.includes('4') && numeros.includes('5') && numeros.includes('6')):
            div.innerHTML = `Ganador ${ganado}`; 
            break;
         case (numeros.includes('7') && numeros.includes('8') && numeros.includes('9')):
            div.innerHTML = `Ganador ${ganado}`;  
            break;
         default:
            break;
       }

       
       ganador.appendChild(div);
      //  const desabilitarBotones = document.querySelectorAll('button');
      //  console.log(desabilitarBotones);
      //  for (let i = 0; i < desabilitarBotones.length; i++) {
      //    console.log(desabilitarBotones[i]);
      //              desabilitarBotones[i].disabled  = true;         
      //  }
      }

}else{
   // console.log('aun no');
}

}


