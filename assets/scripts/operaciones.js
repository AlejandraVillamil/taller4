//Traer numero 1
const  n1=parseInt(document.getElementById('n1').value)
//Traer numero 1
const  n2=parseInt(document.getElementById('n2').value)

let result
function operaciones(operador){
    switch(operador){
        case"suma":
        n1+n2;
        alert(n1+n2)
        console.log(n1+n2)
        break;

        case"resta":
        result= n1-n2;
        alert(result)
        console.log(result)
        break;

        case"multiplicacion":
        result= n1*n2;
        alert(result)
        console.log(result)
        break;

        case"division":
        result= n1/n2;
        alert(result)
        console.log(result)
        break;
        
        default:
        alert('No es posible realizar la operación intenta de nuevo')
        console.log('error')
        break;
    }
}
