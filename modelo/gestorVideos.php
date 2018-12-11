<?php
require_once "/../backend/modelo/conexion.php";
class InvocarVideosModelo extends Conexion{
  public function seleccionarVideosModelo($table){
    $stmt = Conexion::conectar()->prepare("SELECT ruta FROM $table ORDER BY orden ASC");
		$stmt->execute();
		return $stmt->fetchAll();
		$stmt->close();

  }
}
 ?>
