const inputBusca = document.querySelector('.cabecalho__busca');
const cartoes = document.querySelectorAll('.cartao');

inputBusca.onkeyup = function() {
    const digitado = inputBusca.value.toLowerCase();
    cartoes.forEach(cartao => {
        const textoCartao = cartao.textContent.toLowerCase();
        if (textoCartao.indexOf(digitado) === -1) {
            cartao.classList.add('invisivel');
        } else {
            cartao.classList.remove('invisivel');
        }
    });    
}



