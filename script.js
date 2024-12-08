// EJERCICIO 1------CREA 5 VARIABLES.

let entero = 5;
let decimal=5.5;
let cientefico=135.e7;
let octal=0o1357;
let hexadecimal=0*1357;

// alert("Esto es un numero entero = " + entero);
// alert("Esto es un numero decimal = " + decimal);
// alert("Esto es un numero cientifico = " + cientefico);
// alert("Esto es un numero octal = " + octal);
// alert("Esto es un numero hexadecimal = " + hexadecimal);


// Ejercicio 2-----------crea 4 variables :2cadenas y 2numeros.

let nombre ='Dani';
let apellido ='Pérez';
let edad =36;
let fecNacimiento =1988;
alert('Hola chicos')
alert("Hola mi nombre es : " + nombre +"\n"+
    "hola mi apellido es : " + apellido
);
alert("La suma de la edad y el año de nacimiento es : " + (edad+fecNacimiento));
alert("La suma de la edad y el año de nacimiento es : " + (edad+fecNacimiento) + "\n"+ 
        "La suma de mi nombre y mi apellido es :" + nombre + " " + apellido);


// Ejercicio 3------- muestra el resultado de operacines mediante alert.
                      //mostrando el texto exacto de la operacion y su resultado.

let operacion1=(10==10);   //Verdadero o falso.
let operacion2=(10===10);   //Verdadero o falso. --- IDÉNTICO
let operacion3=(10===10.0);   //Verdadero o falso.
let operacion4=("Laura"=="laura");   //Verdadero o falso.
let operacion5=("Laura" > "laura");   //Verdadero o falso.
let operacion6=("Laura" < "laura");   //Verdadero o falso.
let operacion7=("123" == 123);   //Verdadero o falso.
let operacion8=("123"===123);   //Verdadero o falso.
let operacion9=(parseInt("123"===123));   //Verdadero o falso.
alert("La operacion 1 es : " + operacion1);
alert("La operacion 2 es : " + operacion2);
alert("La operacion 3 es : " + operacion3);
alert("La operacion 4 es : " + operacion4);
alert("La operacion 5 es : " + operacion5);
alert("La operacion 6 es : " + operacion6);
alert("La operacion 7 es : " + operacion7);
alert("La operacion 8 es : " + operacion8);
alert("La operacion 9 es : " + operacion9);



// function edad(number){
//     let anio=number;
//     if(number>12){
//         console.log("Por la edad es un niño")
//     }if(nombre >12 && nombre <=26){
//         console.log("Por la edad es un joven")
//     }if(nombre >26 && nombre <=60){
//         console.log("Por la edad es un adulto")
//     }else{
//         console.log("esta persona esta jubilada")
//     }

// }






      //Ejercicio 4----------- crea un programa que pida al usuario que introduzca una edad
    //    y muestre el siguiente mensaje en funcion del numero introducido:



    //  edad < 12 = niño, 
    // edad > 12 y edad < 26 = joven, 
    // edad > 26 y edad <=60 = adulto, 
    // edad >60 = jubilado. 
    // guarda el valor del usuario. comprueba que no mete un numero menor a 0





        // Función para pedir la edad y mostrar el mensaje correspondiente
        function comprobarEdad() {
            let edad = prompt("Por favor, introduce tu edad:");  //prompt=mensaje para pedir edad
            
            // Verifica que el valor introducido sea un número y no menor que 0
            if (isNaN(edad) || edad < 0) {           //isNaN = saber si es un numero
                alert("Por favor, introduce un número válido mayor o igual a 0.");
            } else {
                edad = parseInt(edad, 10); // Convierte la edad a entero
                let mensaje;

                if (edad < 12) {
                    mensaje = "niño";
                } else if (edad >= 12 && edad < 26) {
                    mensaje = "joven";
                } else if (edad >= 26 && edad <= 60) {
                    mensaje = "adulto";
                } else if (edad > 60) {
                    mensaje = "jubilado";
                }

                alert("Categoría de edad: " + mensaje);
            }
        }

        comprobarEdad();


//Ejercicio 5----------Crea un programa que genere un listado de horas             (FOR)
                    //que vaya desde las 9 hasta las 21:30 de 30 minutos
                    //en 3 minutos.

                   
                            // function generarListadoHoras() {
                            //     let hora = 9;
                            //     let minuto = 0;
                            //     let esHoraEnPunto = true;
                    
                            //     for (let i = 0; i < 26; i++) {
                            //         let horaFormateada = hora.toString().padStart(2, '0');
                            //         let minutoFormateado = minuto.toString().padStart(2, '0');
                            //         document.write(horaFormateada + ":" + minutoFormateado + "<br>");
                    
                            //         if (esHoraEnPunto) {
                            //             minuto += 30;
                            //         } else {
                            //             minuto = 0;
                            //             hora++;
                            //         }
                    
                            //         esHoraEnPunto = !esHoraEnPunto;
                    
                            //         // Parar a las 21:30
                            //         if (hora === 21 && minuto === 30) {
                            //             horaFormateada = hora.toString().padStart(2, '0');
                            //             minutoFormateado = minuto.toString().padStart(2, '0');
                            //             document.write(horaFormateada + ":" + minutoFormateado + "<br>");
                            //             break;
                            //         }
                            //     }
                            // }
                    
                            // Llama a la función para generar el listado de horas
                            // generarListadoHoras();


// function generaHoras(){
//     let hora=10;
//     let minuto=0;
//     let horaPunto=true;

// for(let i =0;i<25;i++){
//     let horaFormateada=hora.toString().padStart(2,'0');
//     let minutoFormateada=minuto.toString().padStart(2,'0');
//     document.write(horaFormateada + " : " + minutoFormateada + "<br>");
//     if(horaPunto){
//         minuto+=5;
        
        
        
//     }else{
//         minuto=0;
//         hora++;
//     }
//     horaPunto=!horaPunto;

//     if(hora===22 && minuto ===0){
//          horaFormateada=hora.toString().padStart(2,'0');
//          minutoFormateada=minuto.toString().padStart(2,'0');
//         document.write(horaFormateada + " : " + minutoFormateada + "<br>");
//         break;
//     }}
// }
//     generaHoras();

                        
//Ejercicio 6---------lo mismo pero cada 5 minutos(FOR)



function cadaCincoMinutos(){
    let hora=10;
    let minuto = 0;
    let limite=22*60+30;
    for(let i = hora *60 + minuto;i<=limite;i+=5){
      let  horasActuales=Math.floor(i/60);
     let   minutosActuales = i % 60;
      let  horaFormateada=horasActuales.toString().padStart(2,'0');
       let  minutoFormateada=minutosActuales.toString().padStart(2,'0');
       document.write(horaFormateada + " : " + minutoFormateada + "<br>");
       
    }
}
cadaCincoMinutos();


//Ejercicio 7----------control parental con while y promp.

function controlParental(){
const respuestaCorrecta='Real Madrid';
let respuestaUsuario;

while(respuestaUsuario!==respuestaCorrecta){
    respuestaUsuario=prompt('¿Cual es tu equipo favorito?');
    if(respuestaUsuario!==respuestaCorrecta){
       alert('Error, siga intentando')
    }else{
       alert('Respuesta correcta, disfrute su visita');
    }
    
}
}
controlParental();