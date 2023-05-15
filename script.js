const menu = document.querySelector(".menu-lateral")
const fecharMenu = document.querySelector(".fechar-menu")
const abrirMenu = document.querySelector("#abrir-menu")

abrirMenu.addEventListener("click",show)
fecharMenu.addEventListener("click",fechar)

function show(){
    menu.style.display ="flex"
    menu.style.left = '0'
}
function fechar(){
    menu.style.left= '-120%'
}

