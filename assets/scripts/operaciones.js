//Traer numero 1
const  n1=parseInt(document.getElementById('n1').value)
//Traer numero 1
const  n2=parseInt(document.getElementById('n2').value)

if(n1!==null && n1!==null)
{

    let result
    function operaciones(operador){
        switch(operador){
            case"suma":
            result= n1+n2;
            print()
            break;
    
            case"resta":
            result= n1-n2;
            print()
            break;
    
            case"multiplicacion":
            result= n1*n2;
            print()
            break;
    
            case"division":
            result= n1/n2;
            print()
            break;
            
            default:
            alert('No es posible realizar la operación intenta de nuevo')
            console.log('error')
            break;
        }
        function print(){
            result_onscreen=document.getElementById('resultado')
            result_onscreen.innerText = result
            alert(result)
            console.log(result)  
        }
    
    
    }
    
}else{
    alert('No es posible realizar la operación intenta de nuevo, ingresando ambos números')
    console.log('error')
}


