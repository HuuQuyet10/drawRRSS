<?php
include './assets/functions/functionsAjax.php';

if (isset($_POST["personas_muertas"])) {
    echo json_encode(select($_POST["personas_muertas"]));
}
if (isset($_POST["personas_vivas"])) {
    echo json_encode(select($_POST["personas_vivas"]));
}

if (isset($_POST["combate"])) {
    echo json_encode(select($_POST["combate"]));
}

if (isset($_POST["muerte"])) {
    echo json_encode(insert($_POST["muerte"]));
}
if (isset($_POST["guardar_combate"])) {
    echo json_encode(insert($_POST["guardar_combate"]));
}