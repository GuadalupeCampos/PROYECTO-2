window.addEventListener("load", inicio, true);

function inicio(){
    document.getElementById("mensaje").addEventListener("keyup", function(){

   this.value = this.value.toUpperCase();
    }, true);

    document.getElementById("cifrar").addEventListener("click", function(){

        let texto = document.getElementById("mensaje").value;
        let clave = document.getElementById("clave").value;
        document.getElementById("mostrarMensaje").value = cifrar (texto,clave);
         }, true);

         document.getElementById("Descifrar").addEventListener("click", function(){

            let texto = document.getElementById("mensaje").value;
            let clave = document.getElementById("clave").value;
            document.getElementById("mostrarMensaje").value = Descifrar (texto,clave);
             }, true);

    }

    function cifrar (texto, clave){
        let resultado ="";
        let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
        clave = (clave % 26 + 26) % 26;

        if(texto){ 
    for(let i = 0; i < texto.length; i++){
        if (letras.indexOf (texto[i]) != -1){
            let posicion = ((letras.indexOf(texto[i])+ clave) % 26);
            resultado += letras [posicion];
        }
        else 
        resultado += texto[i];
    }
        }
        return resultado;
    }

    function Descifrar (texto, clave){
        if(!texto)
            return "";
        const letras ="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"

        clave = (clave % 26 - 26) %26;
        return texto.replace (/[A-Z]/ig, c=> letras [(letras.indexOf(c)- clave)% 26]);
    }




