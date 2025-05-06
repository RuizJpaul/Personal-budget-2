alert("Bienvenido a Ripley")

let ans = "si"
let nombreMovi;
let tipo;
let monto;

let listaNomMovi = []
let listaEgresos = []
let egresos = []
let ingresos = []
let movimientos = []

while(ans!="no"){
    if(registrar()){
        movimientos.push({nombreMovi,tipo,monto});
        if(tipo=="ingreso" || tipo=="Ingreso"){
            ingresos.push({nombreMovi, tipo, monto})
        }
        else if(tipo=="egreso" || tipo=="Egreso"){
            egresos.push({nombreMovi, tipo, monto})
        }
        alert("Datos guardados");
    }
    else{
        alert("Ingresa datos correctos");
        continue;
    }
    ans = prompt("¿Desear agregar otro movimiento?")
}


let opcion = prompt("0 --> Nombres de movimientos registrados\n1 --> Egresos mayores a $100\n2 --> Busacar movimiento");
if(opcion!==null && !isNaN(opcion) && opcion!==""){
    if(opcion == 0){
        listaNomMovi = consultaNom(movimientos);
        console.log(`Nombres de movimientos registrados:\n[${listaNomMovi}]`);
    }
    else if(opcion == 1){
        let lista = [];
        console.log("Egresos mayores a $100");
        listaEgresos = consultaEgresos(egresos).map((item) => {
            console.log(`{Nombre: ${item.nombreMovi}, Tipo: ${item.tipo},Monto: ${item.monto}}`)
        })
    }
    else if(opcion == 2){
        let nombreBuscar = prompt(`MOVIMIENTOS\n${consultaNom(movimientos)}`);
        let respuesta = movimientos.find((item) => item.nombreMovi==nombreBuscar);
        console.log(respuesta);
    }
}

function registrar(){
    nombreMovi = prompt("Ingrese el nombre del movimiento")
    tipo = prompt("Tipo [Ingreso/Egreso]")
    monto = prompt("Monto")
    if(verificarNumero(monto) && verificarTexto(nombreMovi) && verificarTexto(tipo)){
        return true;
    }
    else{
        return false;
    }
}

function verificarNumero(numero){
    if(!isNaN(numero) && numero!==null && numero.trim() !==""){
        return true;
    }
    else{
        return false;
    }
}

function verificarTexto(texto){
    if(texto!==null && texto.trim() !== "" && isNaN(texto)){
        return true;
    }
    else{
        return false;
    }    
}

function consultaNom(arreglo){
    let lista2 = []
    let lista1 = arreglo.map((item)=> {
        lista2.push(item.nombreMovi)
    })
    return lista2;
}

function consultaEgresos(arreglo){
    lista = arreglo.filter((item) => item.monto>=100);
    return lista;
}
