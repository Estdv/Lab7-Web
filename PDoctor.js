import "./PDoctor.css"
import foto from './Doim.jpg';
window.onload = function () {

    document.body.className = "fondo"
    var princ = document.createElement("div")
    document.body.appendChild(princ)
        var head = document.createElement("h1")
        head.innerHTML = "Doctor"
        princ.appendChild(head)
        var cont = document.createElement("p")
        cont.innerHTML = ("Habia una vez un doctor. Este doctor trabajaba en una sala de emergiencias y en una clinica oncol�gica gratis. De peque�o, su madre habia fallecido de<br> cancer y el doctor habia dedicado su vida a ayudar a personas con esa enfermedad. El doctor habia salvado innumerables vidas y era respetado en la comunidad.<br> Un d�a el doctor logr� realizar una operaci�n altamente peligrosa para extraer un tumor cerebral de un ni�o de 10 a�os. El ni�o estar�a bien y todos sus<br> colegas estaban muy felices por el. Todos lo invitaron a una gran celebraci�n que habian orgaanizado para el. El doctor no queria ir ya que ten�a que trabajar<br> al dia siguiente. Finalmente, todos, incluyendo su jefe lo convencieron que se merec�a celebrar despues de tal logr�.<br> En la celebraci�n todos querian beber con el doctor milagroso. Asi que se puso bastante ebrio. Al dia siguiente, el doctor despert� tarde y con mucha resaca.<br> Tenia muchos mensajes en su celular que se le necesitba urgentemente en la sala de emergencias. Sintiendose mal, el doctor se levant� y corri� a la sala. Al llegar,<br> encontro a una mujer intoxicada por exposici�n prolongada a un quimico extra�o. El doctor la intent� salvar, pero el da�o era mucho. O asi parec�a. Unos d�as despues<br> de que falleci� la mujer, la autopsia revel� que la situaci�n era tratable dado el tiempo y tratamiento correctoy el doctor se di� cuenta que si no hubiera llegado<br> tarde y de goma, la hubiera podido salvar. El doctor se sinti� muy mal y penso que se merec�a perder su licencia m�dica en la demanda que estaba presentando el esposo<br> de la mujer.<br> <br> Cuando el caso se resolvi�, el doctor no perdi� su licenica y todo sigui� normal. Sin embargo, a partir de ese d�a el doctor se prometi� a si mismo dar todo de si  para<br> salvar a todas las personas que lo necesitaran y no descansar si alguien necesitaba su ayuda. El doctor cumpli� su promesa y salv� incontables vidas.<br> <br> Unas semanas despues, el Doctor iba regresando del trabajo, y todo se puso oscuro...<br>")
        cont.className = "texto"
        princ.appendChild(cont)
        var pic = document.createElement("figure")
        var pict = document.createElement("img")
        pict.src = foto
        var capt = document.createElement("figcaption")
        capt.innerHTML="El doctor luego de salvar al ni�o"
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
                    a1.href="PIngeniero.html"
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