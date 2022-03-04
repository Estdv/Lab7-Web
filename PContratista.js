import "./PContratista.css"
import foto from './Coim.jpg';
window.onload = function () {

    document.body.className = "fondo"
    var princ = document.createElement("div")
    document.body.appendChild(princ)
        var head = document.createElement("h1")
        head.innerHTML = "Contratista"
        princ.appendChild(head)
        var cont = document.createElement("p")
        cont.innerHTML=("Habia una vez, un contratista. Recientemente, le habian dado la oportunidad de realizar un proyecto libre en un terreno listo para demolici�n. En el pasado,<br> este contratista habia sido un vagabundo, hasta que un extra�o amable lo acogio en su hogar y le dio una oportunidad para salir adelante. El contratista queria<br> hacer hacer lo que habian hecho por el para muchas personas. As� que decidi� hacer un refugio y hogar de rehabilitacion para gente necesitada. Cuando le present�<br> la idea a los inversionistas, estos no esban muy de acuerdo ya que no ve�an potencial econ�mico en la idea. Despues de rogar, los ivnersionistas decidieron darle<br> solo la mitad del presupuesto para construir el refugio.<br> <br> El contratista estaba devastado, pero eso no lo detuvo de seguir adelante con el proyecto. No obstante, por la falta de presupuesto, tubo que hacer algunos sacrificios.<br> En vez de contratar a los constructores habituales con experiencia, subcontrato de una empresa mas barata, esperando resultados competentes y que siguieran todas las<br> medidas de seguridad y prevenci�n. Los materiales que tubo que comprar tambien eran de baja calidad, pero se estimaba que cumplirian el trabajo. El contratista sigui�<br> adelante con la demolici�n. Un d�a recibi� una llamada que habian habido ciertos problemas con los materiales peligrosos, y los inquilinos de la casa vecina. EL contratista<br> rapidamente lo solucion�, despidiendo a los empleados responsables y cambiando los materiales peligrosos. El proyecto sigu� en marcha, y aunque el contratista escucho que<br> hubo ciertos problemas legales, fueron solucionados sin mayor problema y su sue�o de ayudar seguia en marcha.<br> <br> Unas semanas despues, el Contratista iba regresando del trabajo, y todo se puso oscuro...<br>")
        cont.className = "texto"
        princ.appendChild(cont)
        var pic = document.createElement("figure")
        var pict = document.createElement("img")
        pict.src = foto
        var capt = document.createElement("figcaption")
        capt.innerHTML = "El contratista iniciando el proyecto"
        princ.appendChild(pic)
        pic.appendChild(pict)
        pic.appendChild(capt)

        var det = document.createElement("details")
        princ.appendChild(det)
            var sum = document.createElement("summary")
            sum.innerHTML="Que personaje le gustaria ver ahora"
            det.appendChild(sum)
            var orli = document.createElement("ul")
            det.appendChild(orli)
                var li1 = document.createElement("li")
                    var a1 = document.createElement("a")
                    a1.href="PDoctor.html"
                    a1.innerHTML="Doctor"
                orli.appendChild(li1)
                    li1.appendChild(a1)

                var li2 = document.createElement("li")
                    var a2 = document.createElement("a")
                    a2.href="PPolicia.html"
                    a2.innerHTML="Poliica"
                orli.appendChild(li2)
                    li2.appendChild(a2)

                var li3 = document.createElement("li")
                    var a3 = document.createElement("a")
                    a3.href="PAbogado.html"
                    a3.innerHTML="Abogado"
                orli.appendChild(li3)
                    li3.appendChild(a3)

                var li4 = document.createElement("li")
                    var a4 = document.createElement("a")
                    a4.href="PIngeniero.html"
                    a4.innerHTML="Contratista"
                orli.appendChild(li4)
                    li4.appendChild(a4)

        var desp = document.createElement("p")
        desp.innerHTML="Si ya termino de leer todos, puede seguir con la historia"
        princ.appendChild(desp)

        var urli = document.createElement("ul")
        princ.appendChild(urli)
        var li = document.createElement("li")
                    var a = document.createElement("a")
                    a.href="Reunion.html"
                    a.innerHTML="Seguir con la historia"
                urli.appendChild(li)
                    li.appendChild(a)
        

}