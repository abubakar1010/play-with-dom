window.onload = () => {
    main()
}

function main(){
    const root = document.getElementById("root")
    const button = document.getElementById("btn")

    button.addEventListener('click',function(){

        const bgColor = generateHexColor()

        const output = document.getElementById('output')

        output.value = bgColor

        root.style.backgroundColor = bgColor
    })
}

function generateHexColor(){

    const red = Math.round(Math.random() * 255)
    const green  = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}


