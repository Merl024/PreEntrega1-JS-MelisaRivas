/* Se hizo un simulador de convertidor de masas y volumen, en donde el usuario puede escoger entre convertir de libras (lb) a gramos, litros (l) a milimetros (ml) y más */
function agregarLibro(){
    let autorIngresado = prompt("Ingrese el nombre del autor")
    let tituloIngresado = prompt("Ingrese el nombre del titulo")
    let precioIngresado = parseInt(prompt("Ingrese el nombre del precio"))
    return mostrarDatosLibro(autorIngresado, tituloIngresado, precioIngresado)

}
// function que muestra los datos del libro
function mostrarDatosLibro(autor, titulo, precio){
    console.log(`El libro fue escrito por ${autor} su titulo es ${titulo} y su precio es ${precio}`)
}
//MENU do while y switch 
let salirMenu = false

do{
let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
   1 - Agregar libro
   2 - Borrar libro
   3 - Consultar catálogo
   0 - Salir del menu`))
   switch(opcionIngresada){
      case 1:
         agregarLibro()
         
      break
      case 2:
         console.log("Borrar libro")
      break
      case 3:
         mostrarDatosLibro()
      break         
      case 0:
         console.log(`Gracias por utilizar nuestra app. Saludos!`)
         salirMenu = true
      break   
      default:
         console.log("Opción no válida, ingrese alguna presente en el menu")
      break
   }
}while(!salirMenu)