function handlerPlus(){

    let imgAbrir = document.getElementById('img');
    let botonAbrir = document.getElementById('botonCerrar');

    imgAbrir.addEventListener('click', handlerOpen);
    botonAbrir.addEventListener('click', handlerClose);
    
}

function handlerOpen(){
    let contenedorBoton = document.getElementById('contentBoton');
    let contenedorImg = document.getElementById('contentImg');
    contenedorImg.style.width = '200%';
    contenedorBoton.style.display = 'flex';

}

function handlerClose(){
    let contenedorBoton = document.getElementById('contentBoton');
    let contenedorImg = document.getElementById('contentImg');
    contenedorBoton.style.display = 'none';
    contenedorImg.style.width = '100%';
}


window.onload = handlerPlus;
