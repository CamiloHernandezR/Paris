 <?php
 require_once "modelo/gestorGaleria.php";
class InvocarGaleriaControlador extends InvocarGaleriaModelo{
  public function seleccionarGaleriaControlador(){
    $respuesta=InvocarGaleriaModelo::seleccionarGaleriaModelo("galeria");
    foreach ($respuesta as $row => $item) {
      echo '<li>
          <a rel="grupo" href="backend/'.substr($item["ruta"], 6).'">
          <img src="backend/'.substr($item["ruta"], 6).'">
          </a>
        </li>';

    }
  }
}
