let obj = {
  "livros": [
    { "nome": "Querido John", "autor": "Nicholas Sparks", "ano": 2006 },
    { "nome": "A Cabana", "autor": "William P. Young", "ano": 2007 },
    { "nome": "Peter Pan", "autor": "J.M. Barrie", "ano": 1911 }
  ]
};


const res = window.document.getElementById("res")


const listar = ()=>{
  res.innerHTML = ""
  for (let i = 0; i < obj.livros.length; i++){
    res.innerHTML += `Nome: ${obj.livros[i].nome} - Autor: ${obj.livros[i].autor} - Ano: ${obj.livros[i].ano}<p>`
}
}
const buscar = ()=>{
  console.log("Test")
  res.innerHTML = ""
  //Entrada de texto
  let input = window.document.createElement("input")
  input.id = "input"
  input.type="text"
  input.placeholder="Digite o nome do livro"
  res.appendChild(input);

  //buttom
  let button = window.document.createElement("button")
  button.textContent = "Buscar"
  button.id = "buttonBuscar"
  let achado = false
  button.addEventListener("click", function(){
    console.log("entrou")
    let textBuscar = document.getElementById("input").value.toLowerCase()
    let achado = false
    for (let i=0; i< obj.livros.length; i++){
      if (obj.livros[i].nome.toLowerCase().includes(textBuscar)) {
        res.innerHTML += `<br>Titulo: ${obj.livros[i].nome} - Autor = ${obj.livros[i].autor} - Ano: ${obj.livros[i].ano}`
        achado = true
        break
      }
           
    }if(!achado){
        console.log('Nenhum livro encontrado')
        res.innerHTML += 'Nenhum livro encontrado'
      }

  })
  res.appendChild(button) 
}
