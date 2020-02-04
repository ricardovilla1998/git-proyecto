let btnDerecha = document.getElementById('btn-derecha');
let btnIzquierda= document.getElementById('btn-izquierda');
let renglon = document.getElementById('renglon');
let puntos = document.getElementsByClassName('punto');
let left = 0;
let right = 0;
let tope = -(puntos.length-1)*100;
let cont = 0;
btnDerecha.addEventListener('click',()=>{
    if(left > tope){
        left = left -100;
        renglon.style.left = left + '%';
    }
});


btnIzquierda.addEventListener('click',()=>{
   if(left < 0){
        left = left +100;
        renglon.style.left = left + '%';
    }
});

/*puntos[0].addEventListener('click',()=>{
        
        
        left = 0;
        renglon.style.left = left + '%';
       
});
puntos[1].addEventListener('click',()=>{
    left = -100;
    renglon.style.left = left + '%';
});

puntos[2].addEventListener('click',()=>{
        
        
    left = -200;
    renglon.style.left = left + '%';
   
});
puntos[3].addEventListener('click',()=>{
left = -300;
renglon.style.left = left + '%';
});
*/
/*Array.from(puntos).forEach((puntos, index) => {
    puntos.addEventListener('click', () =>{
        left = -index * 100;
        renglon.style.left=left +'%';
    });
});*/

Array.from(puntos).forEach((boton, indice) =>{
    boton.addEventListener('click',()=>{
        left = indice *-100;
        renglon.style.left= left + '%';
    });
});