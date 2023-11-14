

//* ROLLING
let Size = 0.001

function increaseSize() {
    let elem = document.getElementById('text')
    let text = new Blotter.Text('CREATIVE', {

        family: "'Roboto', sans-serif",
        weight: 200,
        size: 220,
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

container = document.getElementById('text-2')

const textDos = new Blotter.Text("Believe in yourself", {

    family: "serif",
    size: 150,
    fill: "#fff"
})

let material = new Blotter.LiquidDistortMaterial()

material.uniforms.uSpeed.value = 0.3
material.uniforms.uVolatility.value = 0.1
material.uniforms.uSpeed.value = 0.1

let blotter = new Blotter(material, {
    texts: textDos
})

let scope = blotter.forText(textDos)

scope.appendTo(container)

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


