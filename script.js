let obj = {
  "livros": [
    { "nome": "Querido John", "autor": "Nicholas Sparks", "ano": 2006 },
    { "nome": "A Cabana", "autor": "William P. Young", "ano": 2007 },
    { "nome": "Peter Pan", "autor": "J.M. Barrie", "ano": 1911 }
  ]
}
const livroExiste = (nome) =>{
  return obj.livros.some(livro => livro.nome.toLowerCase() === nome.toLowerCase());
}
const res = window.document.getElementById("res")

const listar = ()=>{
  res.innerHTML = ""
  for (let i = 0; i < obj.livros.length; i++){
    res.innerHTML += `Nome: ${obj.livros[i].nome} - Autor: ${obj.livros[i].autor} - Ano: ${obj.livros[i].ano}<p>`
}
}
const buscar = ()=>{
  
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
    let textBuscar = document.getElementById("input").value.toLowerCase()
    let achado = false
    for (let i=0; i< obj.livros.length; i++){
      if (obj.livros[i].nome.toLowerCase().includes(textBuscar)) {
        res.innerHTML += `<br>Titulo: ${obj.livros[i].nome} - Autor = ${obj.livros[i].autor} - Ano: ${obj.livros[i].ano}`
        achado = true
        break
      }
           
    }if(!achado){
        res.innerHTML += 'Nenhum livro encontrado'
      }

  })
  res.appendChild(button) 
}

const adicionar = ()=>{
  res.innerHTML = ''
  //elemento pNome
  let pNome = window.document.createElement('p')
  pNome.textContent = 'Digite o nome do livro'
  res.appendChild(pNome)
  //input nome
  let inputNome = window.document.createElement("input")
  inputNome.id = "inputNome"
  inputNome.type = "text"
  inputNome.placeholder = "Nome"
  res.appendChild(inputNome)

  // elemento pAutor
  let pAutor = window.document.createElement('p')
  pAutor.textContent = 'Digite o autor do livro'
  res.appendChild(pAutor)
  
  let inputAutor = window.document.createElement("input")
  inputAutor.id = "inputAutor"
  inputAutor.type = "text"
  inputAutor.placeholder = "Autor"
  res.appendChild(inputAutor)

  // elemento pAutor
  let pAno = window.document.createElement('p')
  pAno.textContent = 'Digite o ano de lançamento'
  res.appendChild(pAno)

  let inputAno = window.document.createElement("input")
  inputAno.id = "inputAno"
  inputAno.type = "number"
  inputAno.placeholder = "Ano"
  res.appendChild(inputAno)

  let button = window.document.createElement('button')
  button.textContent = 'Adicionar'
  res.appendChild(button)

  button.addEventListener('click', function (){
    let nome = window.document.getElementById('inputNome').value
    let autor = window.document.getElementById('inputAutor').value
    let ano = window.document.getElementById('inputAno').value
    if (nome && autor && ano) {
      if (!livroExiste(nome)) {
        obj.livros.push(
      { "nome": `${nome}`, "autor": `${autor}`, "ano": `${ano}` })
      listar()
      } else {
        res.innerHTML += 'O livro já existe na lista.'
      }
    }else{
      res.innerHTML += '<br>Preencha todos os campos'
    }
    
    
    
  })


}