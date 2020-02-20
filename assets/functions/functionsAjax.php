<?php

include './assets/functions/bbdd.php';

function select($query) {
    $bbdd = new MySQL();

    $resultadosquery = $bbdd->consulta($query);

    $arrayresultados = array();

    while ($resultados = $bbdd->fetch_array($resultadosquery)) {
        array_push($arrayresultados, $resultados);
    }

    $bbdd->close_connect();
    return $arrayresultados;
}

function insert($query) {

    $bbdd = new MySQL();

    $resultadosquery = $bbdd->consulta($query);
    $bbdd->fetch_array($resultadosquery);

    return $bbdd->close_connect();
}

?>