
// document

//const btnejecutar=document.getElementById("btnejecutar");


document.addEventListener("DOMContentLoaded", function(){

    const btnejecutar=document.getElementById("btnejecutar");
    const res=document.getElementById("res");

    const nombre=document.getElementById("nombre");


    btnejecutar.addEventListener("click",() => {

res.innerHTML=`HOLA ${nombre.value}`;

    });




});