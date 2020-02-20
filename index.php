<?php
include './header.php';
?>
<link href="./assets/css/addons/datatables.min.css" rel="stylesheet">
<link href="./assets/css/addons/datatables-select.min.css" rel="stylesheet">
<script href="./assets/js/addons/datatables-select.min.js" rel="stylesheet"></script>
<script href="./assets/js/addons/datatables.min.js" rel="stylesheet"></script>

<main class="pt-1 mx-lg-5 ">
    <div class="col-12 my-5 row">
        <div class="col-4 text-center">
            <h2 id="combatep1">Persona 1</h2>
        </div>
        <div class="col-4 text-center">
            <h2 id="combatep2">Persona 2</h2>
        </div>
        <div class="col-4"><button onclick="setInterval(fight, 1000)">Figth</button></div>
        <div class="col-12">Ganador: <span id="ganador"></span></div>
    </div>
    <div class="col-12 row my-5">
        <div class="col-6">
            <h2>Personas Vivas (<span id="npersonas_vivas"></span>)</h2>
            <table class="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead class="text-center">
                    <tr>Nombre</tr>
                </thead>
                <tbody id="personas_vivas" class="text-center">
                </tbody>
            </table>
        </div>
        <div class="col-6">
            <h2>Personas Muertas (<span id="npersonas_muertas"></span>)</h2>
            <table class="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead class="text-center">
                    <tr>Nombre</tr>
                </thead>
                <tbody id="personas_muertas" class="text-center">
                </tbody>
            </table>
        </div>
    </div>
</main>
<?php
include './footer.php';
?>