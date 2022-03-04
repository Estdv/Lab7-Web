import "./Villano.css"

window.onload = function () {

    document.body.className = "fondo"
    var princ = document.createElement("div")
    document.body.appendChild(princ)
    var head = document.createElement("h1")
    head.innerHTML="Villano"
    princ.appendChild(head)
    var cont = document.createElement("p")
    cont.innerHTML="Habia una vez, un desarrollador de software que trabajaba para una compa�ia de caridad. Por las ultimas semanas, su rendimiento habia bajado. Un dia, el ingeniero a cargo lo llamo a su oficina y lo despidi� por su bajo rendimiento.<br> El desarrollador dijo que se habia sentido cansado ultimamente y no sabia que estaba pasando, pero igual fue despedido. Al salir de la oficina, recibe una llamada del hospital, su esposa, que estaba en su casa, estaba en el intensivo<br> por intoxicacion prolongada a quimicos peligrosos. Resulta que la demolicion del edificio al lado de su cada estaba usando quimicos baratos sin el cuidado adecuado y por eso se habia estado sintiendo cansado. Su esposa, que era ama<br> de casa, pasaba mucho mas tiempo inhaladno los quimicos. El desarrollador se monto en el carro de su esposa y fue rapidamente al hospital. Cuando lleg�, su esposa habia fallecido. Luego de llorar, el desarrollador pregunto que habia pasado.<br> Le dijeron que no habia nada que se podia hacer, pero la verdad es que el doctor habia llegado tarde por estar con resaca y hizo una decision equivocada.<br> <br> Unas horas despues, el desarrollador salio del hospital preparado para ir a su casa. Al salir, econtr� a un policia que se veia de muy mal humor poniendo una multa de remolque en su carro por estar mal parqueado. El desarrollador intento<br> explicarle su situaci�n y decirle que no podia pagar la multa porque lo acababan de despedir y su esposa acababa de morir. El policia solo le dijo que lo sentia pero que ten�a que darle la multa. El carro de su esposa, se iria al lote y<br> seria destruido como chatarra. Al llegar a su casa (con una mascarilla puesta) el desarrollador hizo una llamada para demandar al hospital y a la compa�ia de construccion, ya que sentia que le debian reparaciones. Al dia siguiente, recibi�<br> una llamada de un abogado diciendole que el representar�a a ambaas compa�ias como si fueran una. Unas semanas despues, el caso termino, con las compa�ias ganando y el desarrollador recibiendo una suma que no cubria ni la mitad de todos sus<br> gastos. <br> El desarrollador estaba en la ruina, y lo unico que le quedaba en la vida antes de morir, era venganza...<br>"
    cont.className = "texto"
    princ.appendChild(cont)

    var li1 = document.createElement("li")
    var a1 = document.createElement("a")
    a1.href="Final.html"
    a1.innerHTML="Finalizar Historia"
    princ.appendChild(li1)
    li1.appendChild(a1)
}