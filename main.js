

//* ROLLING
let Size = 0.001

function increaseSize(){
    let elem = document.getElementById('text')
    let text = new Blotter.Text('CREATIVE', {

        family: "'Roboto', sans-serif",
        weight: 200,
        size: 220,
        fill: "red"
    })

    let material = new Blotter.RollingDistortMaterial()

    material.uniforms.uSineDistortAmplitude.value = 0.04

    let blotter = new Blotter(material,{
        texts: text
    })

    let scope = blotter.forText(text)

    scope.appendTo(elem)

    Size += 0.001
}

increaseSize()

//*LIQUID

container = document.getElementById('main')

const text = new Blotter.Text("Believe in yourself", {

    family: "serif",
    size: 150,
    fill: "#fff"
})

let material = new Blotter.LiquidDistortMaterial()

material.uniforms.uSpeed.value = 0.3
material.uniforms.uVolatility.value = 0.1
material.uniforms.uSpeed.value = 0.1

let blotter = new Blotter(material, {
    texts: text
})

let scope = blotter.forText(text)

scope.appendTo(container)
