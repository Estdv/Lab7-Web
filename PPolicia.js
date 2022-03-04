import "./PPolicia.css"
import foto from './Poim.jpg'
window.onload = function () {

    document.body.className = "fondo"
    var princ = document.createElement("div")
    document.body.appendChild(princ)
        var head = document.createElement("h1")
        head.innerHTML = "Policia"
        princ.appendChild(head)
        var cont = document.createElement("p")
        cont.innerHTML = ("Habia una vez un policia. Cuando este policia era peque�o, su hermano murio por violencia callejera y decidi� volverse policia para<br> protejer a la gente. Un d�a, este policia estaba en patrulla y vi� un carro parqueado ilegalmente. El polic�a le iba a colocar el sepo<br> y poner una multa justo cuando lleg� el due�o del carro. El due�o le explic� que solo llevaba 30 segundos ahi parqueado y que no tenia<br> el dinero para pagar la multa ya que su madre estaba enferma y no tania trabajo. El policia solo anoto la placa y dejo ir al due�o.<br> <br> Unos minutos despues, el policia recibio una llamada que buscaban a un criminal en la fuga por robo y asalto a mano armada. Cuando dijeron<br> la placa, el polic�a not� que era el mismo carro que habia dejado ir. El policia se frustro cuando escuch� que una persona casi muere a<br> manos de esta persona. hubiera muerto igual que su hermano. El policia ya estaba lejos de la zona entonces solo sigu� con su patrulla.<br> <br> Un tiempo despues, el policia vi� otro carro parqueado ilegalmente. Decidido de seguir la ley, el policia le pus� una multa y cepo al<br> carro. Cuando lleg� el due�o del carro, el policia le dijo que no habia nada que pudiera hacer. El due�o le rogo y le intento contar su<br> situaci�n pero el polic�a no escucho. Enfadado, el policia llamo a una grua para remolcar el carro a un lote donde el carro seria destruido<br> ya que el due�o se reusaba a pagar la multa.<br> <br> El policia lleg� a su casa ese d�a y se di� cuenta que talvez habia actuado muy fuertemente por sus emociones. Se dijo a si mismo que si<br> volvia a ver al due�o, se disculparia y talvez pueda conseguir otro veh�culo del lote.<br> <br> Unas semanas despues, el policia iba regresando del trabajo, y todo se puso oscuro...<br>")
        cont.className = "texto"
        princ.appendChild(cont)
        var pic = document.createElement("figure")
        var pict = document.createElement("img")
        pict.src = foto
        var capt = document.createElement("figcaption")
        capt.innerHTML="El policia antes de salir de patrulla"
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