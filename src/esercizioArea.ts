type Quadrato = {
    lato: Number;
}

type Rettangolo = {
    Base: Number;
    Altezza: Number;
}

type Triangolo = {
    Base: Number;
    Altezza: Number;
}

type Cerchio = {
    Raggio: Number;
}

function AreaQuadrato(lato : number) {
    return lato * lato;
}
function AreaRettangolo(base: number , altezza : number) {
    return base * altezza;
}
function AreaTriangolo(base : number , altezza : number) {
    return (base * altezza) /2;
}
function AreaCerchio(raggio: number) {
    return raggio^2 * Math.PI;
}