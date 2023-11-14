
//* ROLLING
let Size = 0.001;

// Crear el objeto Blotter.Text
let text = new Blotter.Text('DEVELOPER', {
    family: "'Roboto', sans-serif",
    weight: 400,
    size: 200,
    fill: "red"
});

// Crear el objeto Blotter
let material = new Blotter.RollingDistortMaterial();
material.uniforms.uSineDistortAmplitude.value = 0.04;
let blotter = new Blotter(material, {
    texts: text
});

// Obtener el contenedor y agregar el texto
let elem = document.getElementById('text');
let scope = blotter.forText(text);
scope.appendTo(elem);

// Función para ajustar el tamaño del texto responsivamente
function updateSize() {
    Size += 0.001;

    // Crear un nuevo objeto Blotter.Text con el tamaño actualizado
    let newText = new Blotter.Text('DEVELOPER', {
        family: "'Roboto', sans-serif",
        weight: 400,
        size: window.innerWidth * 0.1 * (1 + Size),
        fill: "red"
    });

    // Actualizar el Blotter
    blotter = new Blotter(material, {
        texts: newText
    });

    // Limpiar el contenido actual del contenedor antes de agregar el nuevo texto
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }

    blotter.forText(newText).appendTo(elem);
}

// Añadir un listener de redimensionamiento para ajustar el tamaño del texto cuando cambie el tamaño de la ventana
window.addEventListener('resize', updateSize);

// Llamar a updateSize inicialmente
updateSize();


//*LIQUID

const container = document.getElementById('text-2');
let blotterA = createBlotter();

function createBlotter(text2) {
    const material = new Blotter.LiquidDistortMaterial();

    material.uniforms.uSpeed.value = 0.3;
    material.uniforms.uVolatility.value = 0.1;
    material.uniforms.uSpeed.value = 0.1;

    return new Blotter(material, {
        texts: text2
    });
}

function updateBlotter() {
    const newText = new Blotter.Text("CREATIVITY", {
        family: "serif",
        size: window.innerWidth * 0.1,
        fill: "#fff"
    });

    blotterA = createBlotter(newText);

    // Limpiar el contenido actual del contenedor antes de agregar el nuevo texto
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    blotterA.forText(newText).appendTo(container);
}

// Se añade un listener de redimensionamiento para ajustar el tamaño del texto cuando cambie el tamaño de la ventana
window.addEventListener('resize', updateBlotter);

// Llamada a updateBlotter inicialmente para configurar el texto
updateBlotter();

//* PARTICLE

const container3 = document.getElementById('text-3');
let blotter3 = createBlotter();

function createBlotter3(text3) {
    const material3 = new Blotter.FliesMaterial();

    material3.uniforms.uPointCellWidth.value = 0.01;
    material3.uniforms.uPointRadius.value = 0.6;
    material3.uniforms.uSpeed.value = 3;

    return new Blotter(material3, {
        texts: text3
    });
}

function updateBlotter3() {
    const newText3 = new Blotter.Text("Inspiration", {
        family: "serif",
        size: window.innerWidth * 0.2, // Ajusta el tamaño de fuente según tu preferencia
        fill: "#fff",
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
    });

    blotter3 = createBlotter3(newText3);

    // Limpia el contenido actual del contenedor antes de agregar el nuevo texto
    while (container3.firstChild) {
        container3.removeChild(container3.firstChild);
    }

    blotter3.forText(newText3).appendTo(container3);
}

// Añade un listener de redimensionamiento para ajustar el tamaño del texto cuando cambie el tamaño de la ventana
window.addEventListener('resize', updateBlotter3);

// Llama a updateBlotter3 inicialmente para configurar el texto
updateBlotter3();


//* SPLIT

const wrapper = document.getElementById('text-4');
let blotter4 = createBlotter();
let material4; // Declarar material4 fuera de las funciones

function createBlotter4(text4) {
    material4 = new Blotter.ChannelSplitMaterial();

    material4.uniforms.uOffset.value = 0.02;
    material4.uniforms.uRotation.value = 30;
    material4.uniforms.uApplyBlur.value = 1;
    material4.uniforms.uAnimateNoise.value = 0.3;

    return new Blotter(material4, {
        texts: text4
    });
}

function updateBlotter4() {
    const newText4 = new Blotter.Text("Innovation", {
        family: "serif",
        size: window.innerWidth * 0.2,
        fill: "#000",
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
    });

    blotter4 = createBlotter4(newText4);

    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }

    const scope4 = blotter4.forText(newText4);
    scope4.appendTo(wrapper);
}

// Añade un listener de redimensionamiento para ajustar el tamaño del texto cuando cambie el tamaño de la ventana
window.addEventListener('resize', updateBlotter4);

// Llamar a updateBlotter4 inicialmente para configurar el texto
updateBlotter4();

// Mousemove effect
document.onmousemove = moveIt;

function moveIt(event) {
    if (material4) { // Verificar que material4 esté definido antes de usarlo
        material4.uniforms.uRotation.value = event.clientX * 0.1;
        material4.uniforms.uOffset.value = event.clientX * 0.0001;
    }
}

//* SLIDING

let textCinco = null;
let textCincoB = null;
const innerText = document.getElementById('text-5');
const innerText2 = document.getElementById('text-5b');

let blotter5 = createSlidingBlotter(false);
let blotter5b = createSlidingBlotter(true);

function createSlidingBlotter(animateHorizontal) {
    let text;
    let size;
    
    if (animateHorizontal) {
        textCincoB = textCincoB || new Blotter.Text("GITHUB", {
            family: "'Cinzel', serif",
            size: size || (size = window.innerWidth * 0.07),
            weight: 500,
            fill: "#fff",
        });
        text = textCincoB;
    } else {
        textCinco = textCinco || new Blotter.Text("SCRIPTS24", {
            family: "'Cinzel', serif",
            size: size || (size = window.innerWidth * 0.09),
            weight: 500,
            fill: "#e6f701",
        });
        text = textCinco;
    }

    const material5 = new Blotter.SlidingDoorMaterial();

    if (animateHorizontal) {
        material5.uniforms.uAnimateHorizontal.value = 1;
    }

    return new Blotter(material5, {
        texts: text
    });
}

function updateSlidingBlotter() {
    const newSizeCinco = window.innerWidth * 0.09;
    const newSizeCincoB = window.innerWidth * 0.07;

    if (textCinco) {
        textCinco = new Blotter.Text("SCRIPTS24", {
            family: "'Cinzel', serif",
            size: newSizeCinco,
            weight: 500,
            fill: "#e6f701",
        });
    }

    if (textCincoB) {
        textCincoB = new Blotter.Text("GITHUB", {
            family: "'Cinzel', serif",
            size: newSizeCincoB,
            weight: 500,
            fill: "#fff",
        });
    }

    blotter5 = createSlidingBlotter(false);
    blotter5b = createSlidingBlotter(true);

    while (innerText.firstChild) {
        innerText.removeChild(innerText.firstChild);
    }

    while (innerText2.firstChild) {
        innerText2.removeChild(innerText2.firstChild);
    }

    if (textCinco) {
        blotter5.forText(textCinco).appendTo(innerText);
    }

    if (textCincoB) {
        blotter5b.forText(textCincoB).appendTo(innerText2);
    }
}

// Añade un listener de redimensionamiento para ajustar el tamaño del texto cuando cambie el tamaño de la ventana
window.addEventListener('resize', updateSlidingBlotter);

// Llama a updateSlidingBlotter inicialmente para configurar el texto
updateSlidingBlotter();
