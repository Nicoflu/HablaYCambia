// VARIABLES GLOBALES
var web = $(document);
var logo = $(".logo");
var trigger = $(".trigger");
var sol_trigger = $(".soluciones .trigger");
var sol_trigger_brother = $(".soluciones .trigger + *");
var anclas = $('a[href*="#"]');
var website = $('html, body');
var seconds = 3;
var ventana = $(window);

web.ready(function(){
  
// prevenir el salto de pagina en enlaces trigger
  trigger.click(function(event) {
    event.preventDefault();
  });  
  
  // prevenir el salto de pagina en enlaces trigger
  function ancla_scroll() {
    anclas.on("click", scroll_A);  
  };

  function scroll_A (){
    event.preventDefault();
    var where = $(this).attr('href');
    website.animate({ 
      scrollTop : $( where ).offset().top-50 
    }, 'slow');
  };

  ancla_scroll();
        
  // FUNCION PARA ACTIVAR EVENTOS MEDIANTE SCROLL
  function scrolling(elementoTrigger,elementoTarget,posicionTrigger,posicionVentana)
  {
    if(
      posicionVentana > posicionTrigger.top) {
      elementoTarget.addClass('scrolling');
    } else {
      elementoTarget.removeClass('scrolling');
    }    
  }  
  
}); /*termina iniciar*/