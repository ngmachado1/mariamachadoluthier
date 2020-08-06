function navSlide(){
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.link-items');
    const contact= document.querySelector('.contacto');
    const navLinks = document.querySelectorAll('.link-items li');
    const navBack = document.querySelector('nav');
    //toggle Nav
    
    menu.addEventListener('click', ()=>{
        nav.classList.toggle('link-items-active');
        console.log(nav)
        //animate links

        navLinks.forEach(function (link, index) {
            if (link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.5}s`;
            }
        });


        //menu animate
        menu.classList.toggle('toggle');

        navBack.classList.toggle('active');
    });    
    //animate links
  

}


