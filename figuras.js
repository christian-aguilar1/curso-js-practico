const pi = Math.PI;

function perimeterSquare(side) {
    return side * 4;
}
function areaSquare(side) {
    return side * side;
}

function perimeterTriangle(base, firstSide, secondSide) {
    if (firstSide) {
        return base + firstSide * 2;
    } else if (firstSide && secondSide) {
        return base + firstSide + secondSide;
    } else {
        return base * 3;
    }
}
function areaTriangle(base, height) {
    return (base * height) / 2;
}

function diameterCircle(radio) {
    return radio * 2;
}
function perimeterCircle(radio) {
    const diameter = diameterCircle(radio);
    return diameter * pi;
}
function areaCircle(radio) {
    return pi * (radio * radio);
}
function heightIsosceles(base, side) {
    return Math.sqrt(Math.pow(side, 2) - (Math.pow(base, 2) / 4))
}

function calculatePerimeterSquare() {
    const input = document.getElementById("inputSquare");
    const value = input.value;

    const perimeter = perimeterSquare(value);
    if (value == "") {
        document.getElementById('warningSquare').innerHTML=`Tienes que escribir el lado del cuadrado.`;
    } else {
        document.getElementById('answerPerimeterSquare').innerHTML=`Perimetro: ${perimeter}`;
    }
}
function calculateAreaSquare() {
    const input = document.getElementById("inputSquare");
    const value = input.value;

    const area = areaSquare(value);
    if (value == "") {
        document.getElementById('warningSquare').innerHTML=`Tienes que escribir el lado del cuadrado.`;
    } else {
        document.getElementById('answerAreaSquare').innerHTML=`Area: ${area}`;
    }
}

function calculatePerimeterTriangle() {
    const inputBaseTriangle = document.getElementById("inputBaseTriangle");
    let base = inputBaseTriangle.value;
    const inputFirstSideTriangle = document.getElementById("inputFirstSideTriangle");
    let firstSide = inputFirstSideTriangle.value;
    const inputSecondSideTriangle = document.getElementById("inputSecondSideTriangle");
    let secondSide = inputSecondSideTriangle.value;

    base = parseInt(base);
    firstSide = parseInt(firstSide);
    secondSide = parseInt(secondSide);

    const perimeter = perimeterTriangle(base, firstSide, secondSide);
    if (isNaN(base) && isNaN(base) && isNaN(base)) {
        document.getElementById('warningPerimeterTriangle').innerHTML=`Tienes que escribir los lados del triangulo.`;
    } else {
        document.getElementById('answerPerimeterTriangle').innerHTML=`Perimetro: ${perimeter}`;
    }
}
function calculateAreaTriangle() {
    const inputBaseTriangle = document.getElementById("inputBaseTriangle");
    const base = inputBaseTriangle.value;
    const inputHeightTriangle = document.getElementById("inputHeightTriangle");
    const height = inputHeightTriangle.value;

    const area = areaTriangle(base, height);
    if (base === "" || height === "") {
        document.getElementById('warningAreaTriangle').innerHTML=`Tienes que escribir la base y la altura del triangulo.`;
    } else {
        document.getElementById('answerAreaTriangle').innerHTML=`Area: ${area}`;
    }
}

function calculatePerimeterCircle() {
    const input = document.getElementById("inputRadioCircle");
    const radio = input.value;

    const perimeter = perimeterCircle(radio);
    if (radio === "") {
        document.getElementById('warningCircle').innerHTML=`Tienes que escribir el radio del circulo.`;
    } else {
        document.getElementById('answerPerimeterCircle').innerHTML=`Perimetro: ${perimeter}`;
    }
}
function calculateAreaCircle() {
    const input = document.getElementById("inputRadioCircle");
    const radio = input.value;

    const area = areaCircle(radio);
    if (radio === "") {
        document.getElementById('warningCircle').innerHTML=`Tienes que escribir el radio del circulo.`;
    } else {
        document.getElementById('answerAreaCircle').innerHTML=`Area: ${area}`;
    }
}

function calculateHeightIsosceles() {
    const inputBaseIsosceles = document.getElementById("inputBaseIsosceles");
    const base = inputBaseIsosceles.value;
    const inputFirstSideIsosceles = document.getElementById("inputFirstSideIsosceles");
    const firstSide = inputFirstSideIsosceles.value;
    const inputSecondSideIsosceles = document.getElementById("inputSecondSideIsosceles");
    const secondSide = inputSecondSideIsosceles.value;

    const height = heightIsosceles();

    if (base !== "" && firstSide !== "" && secondSide !== "") {
        if (base === firstSide || base === secondSide || firstSide === secondSide) {
            document.getElementById('answerHeightIsosceles').innerHTML=`Altura: ${height}`;
        }
    } else {
        document.getElementById('warningIsosceles').innerHTML=`Tienes que escribir los tres lados del triangulo.`;
    }
}