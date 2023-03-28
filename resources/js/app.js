//Proceso de una alcancía
//Declaro la variable para el dinero guardado
let dineroGuardado = 0;

//Declaración y creación de la función
function abrirAlcancia()
{
    //Menú de la alcancía, valida por el pin creado
    let pass = prompt("Por favor, ingrese su pin");
    //Creo el ciclo y valido el pin para mantener activo el ciclo
    while(pin == pass) {
        //Menú de la alcancía
        let menu = parseInt(prompt("Bienvenido, por favor ingrese su opción \n 1) Depositar Dinero \n 2) Retirar Dinero \n 3) Consultar Dinero Guardado \n 4) Salir"));
        
        //Validación para que el usuario ingrese opciones dentro del rango indicado
        //isNaN lo utilizo para identificar a través de un booleano si la variable es un número o no
        if(isNaN(menu) || menu <= 0 || menu > 4) {
            alert("Por favor, ingrese una opción válida");
        } else {
            //Creo las condiciones para el menú
            if(menu == 1) {
                let deposito = parseInt(prompt("Por favor, ingrese la cantidad de dinero que desea depositar"));
                //Validación de que se ingresó un número
                if(isNaN(deposito)) {
                    alert("Depósito no válido");
                } else {
                    //Validación para que el depósito no sean números negativos
                    if(deposito > 0) {
                        //Cálculo para depositar dinero
                        dineroGuardado = parseInt(dineroGuardado + deposito);
                        alert("Depositó $" + deposito + " con éxito \nSu nuevo saldo es de $" + dineroGuardado);
                    } else {
                        alert("Depósito no válido");
                    }
                }
            } else if(menu == 2) {
                let retiro = parseInt(prompt("Por favor, ingrese la cantidad de dinero que desea retirar"));
                //Validación de que se ingresó un número
                if(isNaN(retiro)) {
                    alert("Retiro no válido");
                } else {
                    //Validación para que el dinero retirado no sean números negativos
                    if(retiro > 0) {
                        //Validación para que el dinero retirado no sea mayor al depositado
                        if(retiro <= dineroGuardado) {
                            dineroGuardado = parseInt(dineroGuardado - retiro);
                            alert("Retiró $" + retiro + " con éxito \nSu nuevo saldo es de $" + dineroGuardado);
                        } else {
                            alert("Su saldo es insuficiente para realizar el retiro");
                        }
                    } else {
                        alert("Retiro no válido");
                    }
                }
            } else if(menu == 3) {
                alert("Su saldo es de $" + dineroGuardado);
            } else {
                alert("Proceso terminado, ¡Hasta luego!");
                //Se resetea pin para salir del ciclo
                pin = "5a";
            }
        }
    }
    alert("Proceso terminado, ¡Hasta luego!");
}

//Solicito al usuario la creación de un pin
let pin0 = prompt("Por favor, crear un pin de 4 dígitos:");
//Defino variable global
const pin = pin0;

//Ciclo que valida que el pin sea númerico y de 4 digitos
while(isNaN(pin0) || pin0.length <= 3 || pin0.length > 4){
    let pin1 = prompt("Por favor, crear un pin de 4 dígitos:");
    //Se comprueba la variable
    pin0 = pin1;
}
//Pasa el ciclo y se inicia la función
alert("Pin creado con éxito");
abrirAlcancia();