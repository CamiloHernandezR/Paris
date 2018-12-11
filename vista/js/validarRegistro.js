/* validar validarRegistro
---------------------------------------------
*/

function  validarRegistro(){
    var usuario=document.querySelector("#usuarioRegistro").value;
    var pass=document.querySelector("#passwordRegistro").value;
    var email=document.querySelector("#emailRegistro").value;
    var terminos=document.querySelector("#terminos").checked;
    /*--------------------- Validar usuario
    --------------------------------------------*/
    if(usuario !=""){
        var caracteres=usuario.length;
        var expresion=/^[a-zA-Z0-9]*$/;
        if(caracteres>15){
          document.querySelector("label[for='usuarioRegistro']").innerHTML +="<br>Escribe por favor menos de 15 caracteres";
            return false;
        }
        if(!expresion.test(usuario)){
          document.querySelector("label[for='usuarioRegistro']").innerHTML +="<br>No escriba caracteres especiales";
          return false;
        }
    }
    /*--------------------- Validar contraseña
    --------------------------------------------*/
    if(pass !=""){
        var caracteres=pass.length;

        console.log(pass[0]);
        var expresion=/^[a-zA-Z0-9]*$/;
        var expMayus=/^[A-Z]*$/;
        var expMen=/^[a-z]*$/;
        var expNUM=/^[0-9]*$/;
        var c1=false;
        var c2=false;
        var c3=false;
        var i=0;

        if(caracteres<8){
          document.querySelector("label[for='passwordRegistro']").innerHTML +="<br>Escribe minimo 8 caracteres";
            return false;
        }
    if(!expresion.test(pass)){
          document.querySelector("label[for='passwordRegistro']").innerHTML +="<br>No escriba caracteres especiales";
          return false;
        }
    for( i; i<pass.length;i++){
        console.log(c1);
        console.log(c2);
        console.log(c3);

      if(expMayus.test(pass[i])){
        c1=true;

      }
      if(expMen.test(pass[i])){
        c2=true;
      }
      if(expNUM.test(pass[i])){
        c3=true;
      }

    }
    if(c3==false || c2==false || c1==false){
      document.querySelector("label[for='passwordRegistro']").innerHTML +="<br> Por favor cumpla con el formato requerido";
      return false;
    }
  }
  /*--------------------- Validar email
  --------------------------------------------*/
  if(email !=""){

      var expresion=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

      if(!expresion.test(email)){
        document.querySelector("label[for='emailRegistro']").innerHTML +="<br>No escriba correctamente su email";
        return false;
      }
  }

  /*--------------------- Validar terminos
  --------------------------------------------*/
  if(!terminos){

    document.querySelector("form").innerHTML +="<br>Registro fallido, acepte terminos y condiciones";
    document.querySelector("#usuarioRegistro").value=usuario;
    document.querySelector("#passwordRegistro").value=pass;
    document.querySelector("#emailRegistro").value=email;
    return false;
  }

 return true;  // si la funcion se devuelve en verdadero  el registro se puede realizar
}
