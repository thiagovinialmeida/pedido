function fugir(){
    const botao = window.document.querySelector('#recuso')

    let tamanhoJanela = window.innerWidth
    let tamanhoAltura = window.innerHeight

    let maxX = tamanhoJanela - botao.offsetWidth
    let maxY = tamanhoAltura - botao.offsetHeight

    let randomX = Math.floor(Math.random() * maxX)
    let randomY = Math.floor(Math.random() * maxY)

    botao.style.left = randomX + 'px';
    botao.style.top = randomY + 'px'; 
}

function surgir(){
    const sim = window.document.querySelector('.container')
    if (sim.style.display  == 'block') {
        sim.style.display = 'none'
    } else {
        sim.style.display = 'block'
    }
}