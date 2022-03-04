window.onload = function () {

    var princ = document.createElement("div")
    document.body.appendChild(princ)
    var head = document.createElement("h1")
    head.innerHTML="En Fin..."
    princ.appendChild(head)
    var cont = document.createElement("p")
    cont.innerHTML="Y eso es todo querido lector, ahora sabes de la tragedia. Gente buena, que hizo una cosa mala, a la persona equivocada.<br> Y una persona inocente, a la que la vida le arrojo demasiado de un solo golpe, y se volvi� loco.<br> <br> 6 personas muertas. 5 homicidios. 1 suicidio.<br> <br> Cuando llegu� a la escena del crimen no pude evitar sentir tristeza por el asesino y las victimas.<br> <br> Toda esta situacion me deja con una pregunta que no se responder por mas que intente: <b>�Qui�n tubo la culpa?</b><br>"
    princ.appendChild(cont)

    var li1 = document.createElement("li")
    var a1 = document.createElement("a")
    a1.href="index.html"
    a1.innerHTML="Regresar al inicio"
    princ.appendChild(li1)
    li1.appendChild(a1)
}