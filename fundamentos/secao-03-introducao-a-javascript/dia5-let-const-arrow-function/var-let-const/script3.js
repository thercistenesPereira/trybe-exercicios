
function perimetroArea(base, altura) {
    const objeto = {}
    objeto.perimetro = (base*2) + (altura*2)
    objeto.altura = base*2
    return objeto
}
console.log(perimetroArea(10, 10));