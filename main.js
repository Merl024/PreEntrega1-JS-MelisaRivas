/* Se hizo un simulador de convertidor de masas y volumen, en donde el usuario puede escoger entre convertir de libras (lb) a gramos, litros (l) a mililitros (ml) y más */

// Empezamos declarando variables para el convertidor
//Kg a Lb
function kgAlb(){
   let kg = parseInt(prompt("Ingrese la cantidad de kilogramos (kg) que desea convertir a libras (lb): "))
   let conversionAlb = kg * 2.20462
   alert(`${kg}kg a libras son ${conversionAlb}lb`) 
}
// Lb a g
function lbAg(){
   let lb = parseInt(prompt("Ingrese la cantidad de libras (l) que desea convertir a gramos (g): "))
   let conversionAg = lb * 453.592
   alert(`${lb}lb a gramos son ${conversionAg}g`) 
}
//Gal a l
function galAl(){
   let gal = parseInt(prompt("Ingrese la cantidad de galones (gal) que desea convertir a litros (l): "))
   let conversionAl = gal * 3.78541
   alert(`${gal}gal a litros son ${conversionAl}l`) 
}
// L a ml
function lAml(){
   let l = parseInt(prompt("Ingrese la cantidad de litros (l) que desea convertir a mililitro (ml): "))
   let conversionAml = l * 1000
   alert(`${l}l a mililitro son ${conversionAml}ml`) 
}

//MENÚ con ciclo do while y condicional switch 
let salirMenu = false
do{
let opciones = parseInt(prompt(`¿Qué desea convertir?
   1 - Convertir Kilogramos (kg) a libras (lb)
   2 - Convertir libras (lb) a gramos (g)
   3 - Convertir galones (gal) a litros (l)
   4 - Convertir litros (l) a mililitro (ml)
   0 - Salir del menu`))
   switch(opciones){
      case 1:
         kgAlb()
      break
      case 2:
         lbAg()
      break
      case 3:
         galAl()
      break    
      case 4:
         lAml()
      break     
      case 0:
         alert(`Gracias por utilizar nuestro convertidor. ¡Vuelve pronto!`)
         salirMenu = true
      break   
      default:
         alert("Oh! oh!, no tenemos esa opción :(, intenta de nuevo.")
      break
   }
}while(!salirMenu)