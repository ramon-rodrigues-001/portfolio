// PARA MUDAR O TEXTO DO BUTÃO MOSTRAR MAIS DA PARTE [PROJETOS]
let input_projetos = document.querySelector('input#mais-projetos')
let a_projetos = document.querySelector('a#btn-mais-projetos')

function mostrar_projetos() {
    if (input_projetos.checked == false) {
        a_projetos.innerHTML = "MOSTRAR MENOS"
    }
    else if (input_projetos.checked == true) {
        a_projetos.innerHTML = "MOSTRAR MAIS"
    }
}


// PARA MUDAR O TEXTO DO BUTÃO MOSTRAR MAIS DA PARTE [HABILIDADES]
let input_habilidades = document.querySelector('input#mais-habilidades')
let a_habilidades = document.querySelector('a#btn-mais-habilidades')

function mostrar_habilidades() {
    if (input_habilidades.checked == false) {
        a_habilidades.innerHTML = "MOSTRAR MENOS"
    }
    else if (input_habilidades.checked == true) {
        a_habilidades.innerHTML = "MOSTRAR MAIS"
    }
}