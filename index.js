window.onload = function () {


    document.body.style.backgroundColor = "lightblue"

    var art = document.createElement("article")
        var head = document.createElement("header")
            var titulo = document.createElement("h2")
            titulo.innerHTML = "Laboratorio 6 Tecnologias Web"

    document.body.appendChild(art)
    art.appendChild(head)
    head.appendChild(titulo)

    var princ = document.createElement("div")
    document.body.appendChild(princ)
        var hea = document.createElement("h1")
        hea.innerHTML = "El Camino a la locura"
        princ.appendChild(hea)
        var cont = document.createElement("p")
        cont.innerHTML=" Bienvenidos a esta historia. No es mi historia. Yo soy solamente un humilde observador que presenci� los terribles hechos de aquel dia.<br>Luego de investigar mas al respecto, me puedo permitir contar esta complicada historia de una manera comprensible.<br>Esta historia puede ser un poco confusa, por lo que contar� varias historias de diferentes personajes y, al final, ustedes decidir�n cual es la verdadera tragedia.<br>"
        princ.appendChild(cont)
        var det = document.createElement("details")
        princ.appendChild(det)
            var sum = document.createElement("summary")
            sum.innerHTML = "Que personaje le gustaria ver primero"
            det.appendChild(sum)
            var orli = document.createElement("ol")
            det.appendChild(orli)
                var li1 = document.createElement("li")
                    var a1 = document.createElement("a")
                    a1.href="PDoctor.html"
                    a1.innerHTML="Doctor"
                orli.appendChild(li1)
                    li1.appendChild(a1)

                var li2 = document.createElement("li")
                    var a2 = document.createElement("a")
                    a2.href="PIngeniero.html"
                    a2.innerHTML="Ingeniero"
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
                    a4.href="PContratista.html"
                    a4.innerHTML="Contratista"
                orli.appendChild(li4)
                    li4.appendChild(a4)

                var li5 = document.createElement("li")
                    var a5 = document.createElement("a")
                    a5.href="PPolicia.html"
                    a5.innerHTML="Policia"
                orli.appendChild(li5)
                    li5.appendChild(a5)

         var br = document.createElement("br");
         princ.appendChild(br)

            princ.appendChild(br)
            princ.appendChild(br)
            princ.appendChild(br)
            princ.appendChild(br)


    foot = document.createElement("footer")
    document.body.appendChild(foot)
        par1 = document.createElement("p")
        par1.innerHTML= "Se incluyeron todos los requerimientos de la rubrica excepto la animacion"
        par2 = document.createElement("p")
        par2.innerHTML= "Si no encuentra uno porfavor preguntar :)"
        foot.appendChild(par1)
        foot.appendChild(par2)
}