let numeroDoConselho = 1
let areaDeConselho = document.querySelector(".Area")
let numeroConselho = document.querySelector(".number")
let dice =  document.querySelector(".dice")
let dadoBtn = document.querySelector(".dado")

async function  printaconselho (){
    const url = "https://api.adviceslip.com/advice"
    const resposta =  await fetch(url)
    let respostaJson = await resposta.json()
    let conselho = respostaJson.slip.advice
    numeroDoConselho ++

    areaDeConselho.innerHTML = conselho
    numeroConselho.innerHTML =  numeroDoConselho.toString().padStart(3, '0');
}

giraDado = (dice) =>{
   dice.classList.remove('gira')
   dice.offsetWidth;
   dice.classList.add('gira')
}

dadoBtn.addEventListener("click" , ()=>{
    printaconselho()
    giraDado(dice)
})



