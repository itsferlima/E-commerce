const main = document.querySelector('main')

//Requisição ajax

function carregarHTML(url){
    fetch(url)
    .then(res => res.text())
    .then(html =>{
        main.innerHTML=html
    })
}

function carregarHTML(){
    fetch('html/home.html')
    .then(res => res.text())
    .then(html =>{
        main.innerHTML=html
    })
    const section=document.querySelector('section')
    fetch('http://localhost:8000/home')
    .then(res => res.json())
    .then(home =>{
        const mainImg = document.querySelector("#principal")
        mainImg.src = "../img/" + home.imagemPrincipal
        const img = document.querySelector("#dress")
        img.src="../img/" + home.foto
    })
}

carregarHome()
//eventos onclick
const mnHome = document.querySelector("#firts")
mnHome.onclick = function(e){
    e.preventDefault()
    alert('Carregar home')
    carregarHTML('html/home.html')
}

const mnSobre= document.querySelector('#sobre')
mnSobre.onclick =function(e){
    e.preventDefault()
    alert('Carregar sobre')
    carregarHTML('HTML/sobre.html')
}
const mnCatalogo= document.querySelector('#catalogo')
mnCatalogo.onclick =function(e){
    e.preventDefault()
    alert('Carregar catalogo')
    carregarHTML('HTML/catalogo.html')
}

const mnAcessorios= document.querySelector('#acessorios')
mnAcessorios.onclick =function(e){
    e.preventDefault()
    alert('Carregar acessorios')
    carregarHTML('HTML/acessorios.html')
}

const mnCalcados= document.querySelector('#calcados')
mnCalcados.onclick =function(e){
    e.preventDefault()
    alert('Carregar calcados')
    carregarHTML('HTML/caldados.html')
}

const mnConjuntos= document.querySelector('#conjuntos')
mnConjuntos.onclick =function(e){
    e.preventDefault()
    alert('Carregar conjuntos')
    carregarHTML('HTML/conjuntos.html')
}

const mnVestidos= document.querySelector('#vestidos')
mnVestidos.onclick =function(e){
    e.preventDefault()
    alert('Carregar vestidos')
    carregarHTML('HTML/vestidos.html')
}

const mnContato= document.querySelector('#contato')
mnContato.onclick =function(e){
    e.preventDefault()
    alert('Carregar contato')
    carregarHTML('HTML/contato.html')
}
