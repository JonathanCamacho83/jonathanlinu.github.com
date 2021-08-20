//console.log("Hola mundo desde javascript !!");

//DOM
//querySelector // querySelectorAll
/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
})

//console.log(links);

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click', function(){
        console.log(this);
    })
})
*/
// Obtener alementos de la clase .close
let links = document.querySelectorAll(".close");

// Recorrerlos y Agregar un evento click a cada uno de ellos -case sensitive
links.forEach(function(link){
    link.addEventListener('click',function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");

        //quitarle las clases de animación que ya tiene
        content.classList.remove("animate_fadeInDown");
        content.classList.remove("animate_animated");

        //Agregar clases para animar su salida fadeout up

        content.classList.add("animate_fadeOutUp");
        content.classList.add("animate_animated");

        setTimeout(function(){
            location.href = "/boletines";
        },600);

        

        return false;
    })
})