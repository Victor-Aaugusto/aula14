const titulo = document.getElementById('titulo')
const btn = document.getElementById('botao')
const descricao = document.querySelector('.descricao')


btn.addEventListener('click', () =>{
    titulo.innerText = 'Foi alterado pelo DOM'
    descricao.innerText = 'Conteúdo alterado!'

    titulo.classList.toggle('Highlight')
})