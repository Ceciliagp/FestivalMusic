
document.addEventListener('DOMContentLoaded',function(){

    eventListeners();

   darkMode();
    
    });
    
    function eventListeners(){
    
        const mobileMenu=document.querySelector('.mobile-menu');
    
        mobileMenu.addEventListener('click', navegacionResponsive);
    
    }
    
    function navegacionResponsive(){
        
        //console.log('DESDE EL EVENTO CLICK');
    
        const navegacion=document.querySelector('.navegacion-principal'); //selecciona parte del código
    
    
        if(navegacion.classList.contains('mostrar')){
    
            navegacion.classList.remove('mostrar');
        
        }else{
    
            navegacion.classList.add('mostrar');
        }
        
    }
    
    function darkMode(){

    const botondarkMode=document.querySelector('.dark-mode');

    botondarkMode.addEventListener('click',function(){

        document.body.classList.toggle('dark-modo');

       });


    }
    