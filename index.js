$(document).ready(function () {
    cargar_personas_vivas();
    cargar_personas_muertas();
});

function cargar_personas_vivas() {
    var consulta_vivas = "SELECT id_persona, nombre, vivo FROM personas WHERE vivo = 1";
    $.ajax({
        data: {
            personas_vivas: consulta_vivas
        },
        url: 'index_ajax.php',
        type: 'post',
        async: false,
        success: function (response) {
            console.log(response);
            var datos = new Array();
            datos = JSON.parse(response);
            var html = ""
            for (let index = 0; index < datos.length; index++) {
                html += "<tr><td>" + datos[index]["nombre"] + "</td>" + "<td>" + datos[index]["vivo"] + "</td></tr>"
            }
            document.getElementById("npersonas_vivas").innerHTML = datos.length;
            document.getElementById("personas_vivas").innerHTML = html;
        }
    });
}
function cargar_personas_muertas(query) {
    var consulta_muertas = "SELECT id_persona, nombre, vivo FROM personas WHERE vivo = 0";
    $.ajax({
        data: {
            personas_muertas: consulta_muertas
        },
        url: 'index_ajax.php',
        type: 'post',
        async: false,
        success: function (response) {
            console.log(response);
            var datos = new Array();
            datos = JSON.parse(response);
            var html = ""
            for (let index = 0; index < datos.length; index++) {
                html += "<tr><td>" + datos[index]["nombre"] + "</td>" + "<td>" + datos[index]["vivo"] + "</td></tr>"
            }
            document.getElementById("npersonas_muertas").innerHTML = datos.length;
            document.getElementById("personas_muertas").innerHTML = html;
        }
    });
}
var myVar;

function myFunction() {
    myVar = setInterval(fight(), 3000);
}

function start() {
    window.setInterval(fight(), 1000);
}

function fight() {
    var consulta_combate = "SELECT  id_persona, nombre, vivo FROM personas WHERE vivo = 1 ORDER BY RAND() LIMIT 2";
    if ($("#npersonas_vivas").text() > 1) {
        $.ajax({
            data: {
                combate: consulta_combate
            },
            url: 'index_ajax.php',
            type: 'post',
            async: false,
            success: function (response) {
                console.log(response);
                var datos = new Array();
                datos = JSON.parse(response);
                document.getElementById("combatep1").innerHTML = datos[0]["nombre"];
                document.getElementById("combatep2").innerHTML = datos[1]["nombre"];
                var id_ganador = getRandomArbitrary(0, 2);
                document.getElementById("ganador").innerHTML = datos[id_ganador]["nombre"];
                guardar_combate(datos[0]["id_persona"], datos[1]["id_persona"], datos[id_ganador]["id_persona"])
                if (id_ganador == 0) {
                    matar(datos[1]["id_persona"])
                } else {
                    matar(datos[0]["id_persona"])
                }
            }
        });
    } else {
        console.log("tenemos ganador")
    }
}

function matar(muerto) {
    var consulta_muerte = "UPDATE `personas` SET `vivo`= 0 WHERE `id_persona` = " + muerto;
    $.ajax({
        data: {
            muerte: consulta_muerte
        },
        url: 'index_ajax.php',
        type: 'post',
        async: false,
        success: function (response) {
            cargar_personas_vivas();
            cargar_personas_muertas();
        }
    });

}

function guardar_combate(id_persona1, id_persona2, ganador) {

    var fecha = new Date();
    var dia = fecha.getDate() + ":" + (fecha.getMonth() + 1) + ":" + fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds() +
        ":" + fecha.getMilliseconds();
    var consulta_guardar_combate = "INSERT INTO `combates` (`id_combate`, `id_persona1`, `id_persona2`, `ganador`, `fecha`) VALUES (NULL, '" +
        id_persona1 + "', '" +
        id_persona2 + "', '" +
        ganador + "',  now())";
    $.ajax({
        data: {
            guardar_combate: consulta_guardar_combate
        },
        url: 'index_ajax.php',
        type: 'post',
        async: false,
        success: function (response) {
        }
    });
}

function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}
