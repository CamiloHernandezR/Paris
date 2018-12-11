function validarIngreso(){
    var usuario=document.querySelector("#usuarioIngresar").value;
    var pass=document.querySelector("#passIngresar").value;
    /*--------------------- Validar usuario
    --------------------------------------------*/
    if(usuario !=""){
        var caracteres=usuario.length;
        var expresion=/^[a-zA-Z0-9]*$/;
        if(!expresion.test(usuario)){
          console.log("fallo");
          document.querySelector("label[for='usuarioIngresar'] span").innerHTML +="<br>No escriba caracteres especiales";
          return false;
        }
    }
    /*--------------------- Validar contraseña
    --------------------------------------------*/
    if(pass !=""){
        var expresion=/^[a-zA-Z0-9]*$/;
        var expMayus=/^[A-Z]*$/;
        var expMen=/^[a-z]*$/;
        var expNUM=/^[0-9]*$/;
        var c1=false;
        var c2=false;
        var c3=false;
        var i=0;
    if(!expresion.test(pass)){

          return false;
        }
    for( i=0; i<pass.length;i++){
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
      console.log("fallo");
      document.querySelector("label[for='passIngresar'] span").innerHTML +="<br>No escriba caracteres especiales";
      return false;
      return false;
    }
  }
  return true;

}
