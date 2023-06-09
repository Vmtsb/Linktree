/*const slide = document.getElementById('light')
function trocar(){
  if(slide){
    slide.id = ''
    slide.id = slide.id + 'dark'
  } else {
    slide.id = ''
    slide.id = slide.id + 'light'
  }
}*/

/*
function trocar(){
  let html = document.documentElement

  if(html.classList.contains('light')){
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }
}*/
let html = document.documentElement
let img = document.querySelector("#profile img")
function trocar(){
  html.classList.toggle("light")

  if(html.classList.contains('light')){
    img.setAttribute("src","./imagens/Vegeta.jpg")
    img.setAttribute("alt","Ganhamos")
  } else {
    img.setAttribute("src","./imagens/VegetaChuva.png")
    img.setAttribute("alt","Perdemos")
  }
}