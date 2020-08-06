


// function modal(){
//     let formulario = document.querySelector('#formulario-section');
//     let boton = document.querySelector('.inscribite');

//     formulario.classList.remove('modal');
//     formulario.classList.add('transision');
// };

$(document).ready(function(){
    
    $("#nav").scrollspy({ offset: -75 });
    navSlide();

    var boton = $('.inscribite');

    boton.click(function(){
        let formulario = $('#formulario-section');
    
        formulario.slideDown('slow')
    })

    var btnSelected = $('.serv-id');
    btnSelected.click(function(event){
    btnSelected.removeClass('active');
    $(this).addClass('active');
    let id = event.target.id;
    let bloc = $('#descript')
    bloc.html(`
                <div class="row align-items-center animate__animated animate__fadeIn">
                    <div class="col-md-2">
                        <span class="${dataMisServicios[id].svg}"></span>
                    </div>
                    <div class="col-md-8">
                        <p>${dataMisServicios[id].descripcion}</p>
                    </div>
                </div>
            `)
    })
    
    //Servicios
    
    $('.des0, .des1, .des2, .des3, .des4').hide();
    $('#button0').click(function(){
        $('.des1, .des2, .des3, .des4').slideUp();
        $('.des0').slideToggle();
    });
    $('#button1').click(function(){
        $('.des0, .des2, .des3, .des4').slideUp();
        $('.des1').slideToggle();
    });
    $('#button2').click(function(){
        $('.des0, .des1, .des3, .des4').slideUp();
        $('.des2').slideToggle();
    });
    $('#button3').click(function(){
        $('.des0, .des1, .des2, .des4').slideUp();
        $('.des3').slideToggle();
    });
    $('#button4').click(function(){
        $('.des0, .des1, .des2, .des3').slideUp();
        $('.des4').slideToggle();
    });
    
    var btnSelectedMobile = $('.service-id');
    btnSelectedMobile.click(function(){
    btnSelectedMobile.removeClass('active');
    $(this).addClass('active');
    });
    
    //Instrumentos
    
    var grande = $('.imgbig');
    var fondo = $('.fondo');
    var derecha = $('.derecha');
    var izquierda = $('.izquierda');
    var frente = $('.frente');
    
    fondo.click(function(){        
        grande.attr('src', dataViolines[1].imagenes.fondo);
    })
    frente.click(function(){        
        grande.attr('src', dataViolines[1].imagenes.frente);
    })
    derecha.click(function(){        
        grande.attr('src', dataViolines[1].imagenes.derecha);
    })
    izquierda.click(function(){        
        grande.attr('src', dataViolines[1].imagenes.izquierda);
    })
    

})
