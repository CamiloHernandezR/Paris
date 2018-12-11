<?php
require_once "/../backend/modelo/conexion.php";
class ArticulosModelo extends Conexion{
  public function seleccionarArticulosModelo($table){
    $stmt= Conexion::conectar()->prepare("SELECT * FROM $table ORDER BY orden ASC");
    $stmt->execute();
    return $stmt->fetchAll();
    $stmt->close();
  }
}
 ?>
