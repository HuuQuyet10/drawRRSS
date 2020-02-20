<?php

class MySQL {

    private $conexion;
    private $total_consultas;
    private $servername = "localhost";
    private $username = "rapoporras";
    private $password = "r2C96sp?";

    public function MySQL() {

        $this->conexion = new mysqli($this->servername, $this->username, $this->password);
        $this->conexion->set_charset("utf8");


        if ($this->conexion->connect_error) {
            die("Connection failed: " . $this->conexion->connect_error);
        }


        mysqli_select_db($this->conexion, "warbot") or die('No se pudo seleccionar la base de datos');
    }

    public function consulta($consulta) {
        $this->total_consultas++;
        $resultado = mysqli_query($this->conexion, $consulta);
        if (!$resultado) {
            echo 'MySQL Error: ' . mysqli_error($this->conexion);
            exit;
        }
        return $resultado;
    }

    public function fetch_array($result) {
        return mysqli_fetch_array($result);
    }

    public function num_rows($result) {
        return mysqli_num_rows($result);
    }

    public function getTotalConsultas() {
        return $this->total_consultas;
    }

    public function close_connect() {
        mysqli_close($this->conexion);
    }

}

?>