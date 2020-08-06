window.onscroll = function (){
    const nav = document.querySelector ('.fix');
    const imagen = document.querySelector ('.header-logo')

    if(window.pageYOffset > 400){
        nav.classList.add('dark')
        imagen.classList.add('pequena')
    }else{
        nav.classList.remove('dark')
        imagen.classList.remove('pequena')
        }
}