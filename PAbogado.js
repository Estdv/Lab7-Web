import "./PAbogado.css"
import foto from './Abim.jpg';
window.onload = function () {

    document.body.className = "fondo"
    var princ = document.createElement("div")
    document.body.appendChild(princ)
        var head = document.createElement("h1")
        head.innerHTML = "Abogado"
        princ.appendChild(head)
        var cont = document.createElement("p")
        cont.innerHTML = ("Habia una vez, un abogado. Este abogado trabajaba para una gran compa�ia legal y normalmente solo tomaba casos que le parecian correctos. Nunca aceptaba un caso que<br> tubiera un area gris eticam�nte o en donde estubiera perjudicando a alguien que no lo merecia. Era un gran abogado. Nunca en su carrera habia perdido un caso. Un dia,<br> la compa�ia le puso un caso muy dificl enfrente, era un caso que parecia imposible de ganar ya que era una demanda conjunta encontra de 2 empresas por da�os a un individuo.<br> El abogado se rehusaba a tomarlo ya que parec�a moralmente ambiguo. Sin embargo, la compa�ia no tenia otra opci�n. El era su mejor abogado y los casos que el normalmente trabajaba<br> no tra�an mucho dinero. Este era un caso de muchos millones. El abogado tomo el caso de mal modo pensando que un caso malo para poder seguir con muchos buenos vale la pena.<br> <br> Un par de semanas pasaron y el caso fue a corte. El abogado, siendo tan bueno como es, gan� el caso, solo pagando una m�sera al demandante y ganando millones para su empresa.<br> El se sentia mal por lo ocurrido. Lo que paso no era lo correcto, pero logr� conservar su trabajo y ahora podr�a ayudar a mas personas que lo necesiten. Un sacrificio lo val�a<br> <br> Unas semanas despues, el abogado iba regresando del trabajo, y todo se puso oscuro...<br>")     
        cont.className = "texto"
        princ.appendChild(cont)
        var pic = document.createElement("figure")
        var pict = document.createElement("img")
        pict.src = foto
        var capt = document.createElement("figcaption")
        capt.innerHTML="El abogado con los dos clientes"
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
                    a3.href="PIngeniero.html"
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