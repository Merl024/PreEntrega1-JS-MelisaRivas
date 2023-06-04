/* Se hizo un simulador de convertidor de masas, volumen y longitudes, en donde el usuario puede escoger entre convertir de libras (lb) a gramos, litros (l) a mililitros (ml) y más */

// Empezamos declarando funciones para el convertidor
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
   alert(`${gal}gal a litros son ${conversionAl}L`) 
}
// L a ml
function lAml(){
   let l = parseInt(prompt("Ingrese la cantidad de litros (l) que desea convertir a mililitro (ml): "))
   let conversionAml = l * 1000
   alert(`${l}L a mililitro son ${conversionAml}ml`) 
}
//pies a m 
function ftAm(){
   let ft = parseInt(prompt("Ingrese la cantidad de pies (ft) que desea convertir a metros (m): "))
   let conversionAm = ft / 0.3048
   alert(`${ft}ft a metros son ${conversionAm}m`) 
}
// pulgadas a cm
function inchAcm(){
   let inch = parseInt(prompt("Ingrese la cantidad de pulgadas (in) que desea convertir a centimetros (cm): "))
   let conversionAcm = inch * 2.54
   alert(`${inch}in a metros son ${conversionAcm}cm`) 
}

//MENÚ PRINCIPAL
let usuario = prompt("Bienvenido/a a nuestro convertidor de masa, volumen y longitudes. Ingrese su nombre: ")
let salirMenu = false
do{
let opciones = parseInt(prompt(`Estamos para ayudarte, ${usuario}. ¿Qué desea convertir?
   0 - Salir del menu.
   1 - Convertir masas.
   2 - Convertir volumen.
   3 - Convertir longitudes.`))
   switch(opciones){
      case 1:
         let opcionesDeMasa = parseInt(prompt(`¿Qué desea convertir?
            0 - Regresar al menu principal
            1 - Convertir Kilogramos (kg) a libras (lb)
            2 - Convertir libras (lb) a gramos (g)`))
            switch(opcionesDeMasa){
               case 1:
                  kgAlb()
               break
               case 2:
                  lbAg()
               break     
               case 0:
                  alert(`Regresando al menú principal...`)
                  opcionesDeMasa = true
               break   
               default:
                  alert("Oh! oh!, no tenemos esa opción :(, intenta de nuevo.")
               break
            }
      continue
      case 2:
         let opcionesDeVolumen = parseInt(prompt(`¿Qué desea convertir?
            0 - Regresar al menu principal
            1 - Convertir galones (gal) a litros (l)
            2 - Convertir litros (l) a mililitro (ml)`))
            switch(opcionesDeVolumen){
               case 1:
                  galAl()
               break
               case 2:
                  lAml()
               break     
               case 0:
                  alert(`Regresando al menú principal...`)
                  opcionesDeVolumen = true
               break   
               default:
                  alert("Oh! oh!, no tenemos esa opción :(, intenta de nuevo.")
               break
            }
      continue
      case 3:
         let opcionesDeLongitudes = parseInt(prompt(`¿Qué desea convertir?
            0 - Regresar al menu principal
            1 - Convertir pies (ft) a metros (m)
            2 - Convertir pulgadas (in) a centimretos (cm)`))
            switch(opcionesDeLongitudes){
               case 1:
                  ftAm()
               break
               case 2:
                  inchAcm()
               break     
               case 0:
                  alert(`Regresando al menú principal...`)
                  opcionesDeLongitudes = true
               break   
               default:
                  alert("Oh! oh!, no tenemos esa opción :(, intenta de nuevo.")
               break
            }  
      continue
      case 0:
         alert(`Gracias por utilizar nuestro convertidor, ${usuario}. ¡Vuelva pronto!`)
         salirMenu = true
      break   
      default:
         alert('Oh! oh!, no tenemos esa opción :(, intenta de nuevo.')
      break
   }
}while(!salirMenu)
