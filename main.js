

//* ROLLING
let Size = 0.001

function increaseSize() {
    let elem = document.getElementById('text')
    let text = new Blotter.Text('DEVELOPER', {

        family: "'Roboto', sans-serif",
        weight: 400,
        size: 200,
        fill: "red"
    })

    let material = new Blotter.RollingDistortMaterial()

    material.uniforms.uSineDistortAmplitude.value = 0.04

    let blotter = new Blotter(material, {
        texts: text
    })

    let scope = blotter.forText(text)

    scope.appendTo(elem)

    Size += 0.001
}

increaseSize()

//*LIQUID

const container = document.getElementById('text-2');
let blotter = createBlotter();

function createBlotter(text) {
    const material = new Blotter.LiquidDistortMaterial();

    material.uniforms.uSpeed.value = 0.3;
    material.uniforms.uVolatility.value = 0.1;
    material.uniforms.uSpeed.value = 0.1;

    return new Blotter(material, {
        texts: text
    });
}

function updateBlotter() {
    const newText = new Blotter.Text("CREATIVITY", {
        family: "serif",
        size: window.innerWidth * 0.1,
        fill: "#fff"
    });

    blotter = createBlotter(newText);

    // Limpiar el contenido actual del contenedor antes de agregar el nuevo texto
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    blotter.forText(newText).appendTo(container);
}

// Se añade un listener de redimensionamiento para ajustar el tamaño del texto cuando cambie el tamaño de la ventana
window.addEventListener('resize', updateBlotter);

// Llamada a updateBlotter inicialmente para configurar el texto
updateBlotter();

//* PARTICLE

contain = document.getElementById('text-3')

let textTres = new Blotter.Text("Inspiration", {

    family: "serif",
    size: 220,
    fill: "#fff",
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 80,
    paddingBottom: 80
})

let material3 = new Blotter.FliesMaterial()

material3.uniforms.uPointCellWidth.value = 0.01
material3.uniforms.uPointRadius.value = 0.6
material3.uniforms.uSpeed.value = 3

let blotter3 = new Blotter(material3, {
    texts: textTres
})

let scope3 = blotter3.forText(textTres)

scope3.appendTo(contain)

//* SPLIT

wrapper = document.getElementById('text-4')

let textCuatro = new Blotter.Text("Innovation", {

    family: "serif",
    size: 220,
    fill: "#000",
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 80,
    paddingBottom: 80
})

let material4 = new Blotter.ChannelSplitMaterial()

material4.uniforms.uOffset.value = 0.02
material4.uniforms.uRotation.value = 30
material4.uniforms.uApplyBlur.value = 1
material4.uniforms.uAnimateNoise.value = 0.3

let blotter4 = new Blotter(material4, {
    texts: textCuatro

})

let scope4 = blotter4.forText(textCuatro)

scope4.appendTo(wrapper)

// Mousemove effect

document.onmousemove = moveIt

function moveIt(event) {
    material4.uniforms.uRotation.value = (event.clientX * .1)
    material4.uniforms.uOffset.value = (event.clientX * .0001)
}

//* SLIDING

let innerText = document.getElementById('text-5')
let innerText2 = document.getElementById('text-5b')

let textCinco = new Blotter.Text("SCRIPTS24", {

    family: "'Cinzel', serif",
    weight: 500,
    size: 180,
    fill: "#e6f701",
})

let textCincoB = new Blotter.Text("GITHUB", {

    family: "'Cinzel', serif",
    size: 120,
    weight: 500,
    fill: "#fff",
})

let material5 = new Blotter.SlidingDoorMaterial()
let material5b = new Blotter.SlidingDoorMaterial()

material5b.uniforms.uAnimateHorizontal.value = 1

let blotter5 = new Blotter(material5, {
    texts: textCinco

})

let blotter5b = new Blotter(material5b, {
    texts: textCincoB

})

let scope5 = blotter5.forText(textCinco)
let scope5b = blotter5b.forText(textCincoB)

scope5.appendTo(innerText)
scope5b.appendTo(innerText2)