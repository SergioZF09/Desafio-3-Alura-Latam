let areaProgramacion = prompt("¿Quieres seguir hacia el área de Front-End o seguir hacia el área de Back-End?");

let lenguajeFramework = "";
if (areaProgramacion == "Front-End") {
    alert("Veo que escogiste Front-End, perfecto!");

    lenguajeFramework = prompt("¿Quieres aprender React o aprender Vue?");

    if (lenguajeFramework == "React") {
        alert("Veo que escogiste React, perfecto!");
    } else if (lenguajeFramework == "Vue") {
        alert("Veo que escogiste Vue, perfecto!");
    }

} else if (areaProgramacion == "Back-End") {
    alert("Veo que escogiste Back-End, perfecto!");

    lenguajeFramework = prompt("¿Quieres aprender C# o aprender Java?");

    if (lenguajeFramework == "C#") {
        alert("Veo que escogiste C#, perfecto!");
    } else if (lenguajeFramework == "Java") {
        alert("Veo que escogiste Java, perfecto!");
    }

} else {
    alert("Área inválida. Por favor, escribe Front-End o Back-End.");
}

let especializarseFullstack = parseInt(prompt(`
¿Quieres seguir especializándose en el área elegida o desarrollarse para convertirse en Fullstack?
Escribe 1 para Especializarme o 2 para Fullstack.
    `));

if (especializarseFullstack == 1) {
    alert(`Muy buena elección. Especialízate con ${lenguajeFramework} para que puedas dominar el área de ${areaProgramacion}`);
} else if (especializarseFullstack == 2) {
    alert(`Excelente elección. Además de aprender ${lenguajeFramework} deberás aprender otros lenguajes para así convertirte en Fullstack.`);
}

let pregunta = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' si tienes alguna.");
while (pregunta === "ok") {
    let tecnologia = prompt("¿Cuál tecnología es?");
    alert(`${tecnologia} esa es muy interesante.`);
    pregunta = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' si tienes alguna.");
}

alert("Me alegra que tengas interés en todo lo que escogiste, sigue así y disfruta de lo que hagas.");