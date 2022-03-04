import "./PIngeniero.css"
import foto from './Inim.jpg';
window.onload = function () {

    document.body.className = "fondo"
    var princ = document.createElement("div")
    document.body.appendChild(princ)
        var head = document.createElement("h1")
        head.innerHTML = "Ingeniero"
        princ.appendChild(head)
        var cont = document.createElement("p")
        cont.innerHTML=("Habia una vez un Ingeniero. Este ingeniero era muy exitoso. Habia hecho su fortuna vendiendo software y ahora se dedeciaba a mantener una<br> empresa de distibucion de comida para gente que lo necesitaba. La empresa funcionaba a base de donaciones y anuncios publicitarios. Todos<br> los puestos eran muydemandantes pero se sentia bien trabajar ahi. Sin embargo, es dificil mantener una empresa que trabaja a base de caridad.<br> <br> En un particular dia, el ingeniero tom� la dificil decision de hacer cortes de personal para mantener la empresa a flote. Para ser lo mas justo<br> posible, el ingeniero busco a las personas con el rendimineto mas bajo de la empresa y las cit� una por una a su oficina para darles las noticias.<br> Cada dedspido fue dificil y devastador y al final del d�a el ingeniero estaba totalmente agotado, pero sab�a que era necesario.<br> <br> Y tenia raz�n, la empresa se logr� levantar denuevo y el Ingeniero estaba en el proceso de hacer recontrataciones de partes del<br> personal que habia dejado ir. Sin embargo, esto no fue posible ya que...<br> <br> Unas semanas despues, el Ingeniero iba regresando del trabajo, y todo se puso oscuro...<br>")
        cont.className = "texto"
        princ.appendChild(cont)
        var pic = document.createElement("figure")
        var pict = document.createElement("img")
        pict.src = foto
        var capt = document.createElement("figcaption")
        capt.innerHTML="El ingeniero cuando su empresa sali� a flote"
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
                    a4.href="PContratista.html"
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