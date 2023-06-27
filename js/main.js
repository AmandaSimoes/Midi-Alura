// Repetição otimizada com For

function tocaSom (IdElementAudio) {
        document.querySelector (IdElementAudio).play()    
    }
    
    const listaDeTeclas = document.querySelectorAll('.tecla')

    
    for (let  i = 0; i < listaDeTeclas.length; i++) {
    
        const tecla = listaDeTeclas[i];
        const intrumento = tecla.classList[1]
        const idAudio = `#som_${intrumento}`
    
        tecla.onclick = function () {
            tocaSom(idAudio)
        };        
    }
    
    
// _______________________________________________________________________________________________

// EXEMPLO FUNCIONAL COM WHILE

// function tocaSom (IdElementAudio) {
//     document.querySelector (IdElementAudio).play()    
// }

// const listaDeTeclas = document.querySelectorAll('.tecla')

// let  i = 0

// while (i < listaDeTeclas.length){

//     const tecla = listaDeTeclas[i];
//     const intrumento = tecla.classList[1]
//     const idAudio = `#som_${intrumento}`

//     tecla.onclick = function () {
//         tocaSom(idAudio)
//     };

//     i++
// }


// _______________________________________________________________________________________________

/*
Essa função abaixo funciona muito bem, mas como são 9 botões,
precisaria fazer 9 funções diferentes para que cada botão funcione.
Isso faria com que o codigo ficasse muito grande e sujeito a erros, 
o que não é funcional.
*/

// function tocaSomPom() {
//     document.querySelector ('#som_tecla_pom').play()
// }

// document.querySelector('.tecla_pom').onclick = tocaSomPom;