const next = document.querySelectorAll('.btn-proximo');

next.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const nextStep = 'passo-' + this.getAttribute('data-proximo');
        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})