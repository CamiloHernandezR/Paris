 <?php
require_once "/../backend/modelo/conexion.php";
class InvocarGaleriaModelo extends Conexion{
  public function seleccionarGaleriaModelo($tabla){
    $stmt = Conexion::conectar()->prepare("SELECT ruta FROM $tabla ORDER BY orden ASC");
    $stmt->execute();
    return $stmt->fetchAll();

    $stmt->close();
  }
}
