<?php

require_once "controlador/plantilla.php";
require_once "controlador/gestorSlide.php";
require_once "controlador/gestorArticulos.php";
require_once "controlador/gestorGaleria.php";
require_once "controlador/gestorVideos.php";

require_once "modelo/gestorSlide.php";
require_once "modelo/gestorArticulos.php";
require_once "modelo/gestorGaleria.php";
require_once "modelo/gestorVideos.php";

$plantilla = new plantillaControlador();
$plantilla -> plantilla();
