<?php
require_once "modelo/gestorSlide.php";
class Slide extends SlideModelo{
  public function SeleccionarSlideControlador(){
    $respuesta=SlideModelo::SeleccionarSlideModelo("slide");
    foreach ($respuesta as $row => $item) {
      echo '<li>
         <img src="backend/'.substr($item["ruta"],6).'">
         <div class="slideCaption">
            <h3>'.$item["titulo"].'</h3>
            <p>'.$item["descripcion"].'</p>
        </div>
        </li>';
    }
  }
}
