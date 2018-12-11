<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" id="formulario" >
  <h1>Registro de usuarios</h1>
  <form  action="" method="post" onsubmit="return validarRegistro()">
    <label for="usuarioRegistro">Usuario</label>
    <input type="text" name="usuarioRegistro" placeholder="Máximo 15 caracteres "maxlength="15" id="usuarioRegistro" required>
    <label for="passwordRegistro">Contraseña</label>
    <input type="password" name="passwordRegistro" placeholder="Incluya numeros y mayusculas"  id="passwordRegistro" required>
    <label for="emailRegistro">Correo</label>
    <input type="email" name="emailRegistro" placeholder="Escriba su correo electronico" id="emailRegistro" required>
    <p style="text-align: center"> <input type="checkbox" id="terminos"> <a href="#">Acepta terminos y condiciones</a> </p>
    <input type="submit"  value="Enviar">
  </form>
</div>
