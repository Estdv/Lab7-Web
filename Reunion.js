import "./Reunion.css"

window.onload = function () {

    document.body.className = "fondo"
    var princ = document.createElement("div")
    document.body.appendChild(princ)
    var head = document.createElement("h1")
    head.innerHTML="Esta oscuro..."
    head.className="texto"
    princ.appendChild(head)
    var cont = document.createElement("p")
    cont.innerHTML = "Unas semanas despues, 5 personas despertaron en un cuarto oscuro. Un doctor, un abogado, un ingeniero, un contratista y un policia. Ninguno sabia que estaba<br> pasando. Se levantaron, y se saludaron. Discutieron a cerca de que estaban haciendo aqui y se presentaron. Derrepente, se prendio una luz y una sola fecha apareci�<br> en la pared. Todos miraron esa fecha con una cara de horror como si supieran lo que hicieron en esa fecha, antes de que pudieran hablar, se abrio una puerta y entr�<br> una persona. La puerta se cerro rapidamente y todos reconocieron a la persona. Todos vieron a la persona y supieron que es quien los habia puesto ahi. Antes de que<br> pudieran intentar convencerlo de dejarlos salir, se empez� a escuchar un ruido mientras el cuarto se llanaba con un humo verde.<br> El contratista y el docotro pusieron una cara de horror y supieron que era el gas. Era el mismo quimico barato que el contratista habia usado en su demolici�n.<br> <br> Poco a poco el cuarto se llen� de este gas concentrado y todos, incluyendo al villano, perdieron la conciencia y eventualmente murieron.<br>" 
    cont.className = "texto"
    princ.appendChild(cont)

    var conc = document.createElement("p")
    conc.innerHTML = "Ahora que ya sabe la primera tragedia, es hora de que le presente otra perspectiva. Una un tanto parcial...."
    conc.className = "texto"
    princ.appendChild(conc)

    var li1 = document.createElement("li")
    var a1 = document.createElement("a")
    a1.href="Villano.html"
    a1.innerHTML="Perspectiva del villano"
    princ.appendChild(li1)
    li1.appendChild(a1)

}