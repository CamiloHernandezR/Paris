<?php
require_once "/../backend/modelo/conexion.php";
class SlideModelo extends Conexion{
  public function SeleccionarSlideModelo($table){
    $stmt=Conexion::conectar()->prepare("SELECT ruta,titulo,descripcion from $table");
    $stmt->execute();
    return $stmt->fetchALL();
    $stmt->close();

  }
}

 ?>
