let obj = {
  "livros": [
    { "nome": "Querido John", "autor": "Nicholas Sparks", "ano": 2006},
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
    res.innerHTML += `id: ${i+1} - Nome: ${obj.livros[i].nome} - Autor: ${obj.livros[i].autor} - Ano: ${obj.livros[i].ano}<p>`
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
    let textBuscar = document.getElementById("input").value.toLowerCase().trim()
    res.innerHTML = ""
    if (textBuscar.length === 0) {
      res.innerHTML = "Por favor, digite o nome do livro.";
      return; 
    }
    let achado = false
    for (let i = 0; i < obj.livros.length; i++) {
      if (obj.livros[i].nome.toLowerCase().includes(textBuscar)) {
        res.innerHTML += `<br>Titulo: ${obj.livros[i].nome} - Autor: ${obj.livros[i].autor} - Ano: ${obj.livros[i].ano}`
        achado = true
        break
      }

    } if (!achado) {
      res.innerHTML += 'Nenhum livro encontrado'
    }
  }

  )
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
        res.innerHTML += '<br>O livro já existe na lista.'
      }
    }else{
      res.innerHTML += '<br>Preencha todos os campos'
    }    
  })
}

const excluir =()=>{
  res.innerHTML = ''
  //p
  let p = window.document.createElement('p')
  p.textContent = 'Nome do livro que desejar excluir:'
  res.appendChild(p)

  //Input
  let input = window.document.createElement('input')
  input.id = 'inputId'
  res.appendChild(input)

  //Button
  let button = window.document.createElement('button')
  button.id = 'buttonId'
  res.appendChild(button)
  button.textContent = 'Excluir'

  button.addEventListener('click', function(){
    let inputExcluir = String(input.value)
    if(inputExcluir){
        const index = obj.livros.findIndex(livro => livro.nome.toLowerCase() === inputExcluir.toLowerCase());
        if (index > -1) {
          obj.livros.splice(index, 1);
          console.log(obj.livros)
          listar()
          
        }else{
          res.innerHTML += '<br>Este livro não existe'
        }
      }
      else{
        res.innerHTML += '<br>Insira o nome do livro'
      }   
  })
}
const renomear = ()=>{
  res.innerHTML = ""
  listar()
  //input id
  res.innerHTML += `<p>Qual o id do livro que você deseja renomear:</p>`
  let inputTxtId = window.document.createElement ("input")
  inputTxtId.id = "id"
  res.appendChild(inputTxtId)

  
  //button
  let buttomId = document.createElement("button")
  buttomId.textContent = "Avança"
  res.appendChild(buttomId)

  buttomId.addEventListener("click" ,function (){
    let inputId = document.getElementById("id").value
    let index = inputId -1
    if (inputId >= 0 && inputId < obj.livros.length+1){
      res.innerHTML = ""
      
      res.innerHTML += `${obj.livros[index].nome} - ${obj.livros[index].autor} - ${obj.livros[index].ano}`
      res.innerHTML += `<p>Nome</p>`
      let inputTxtNome = window.document.createElement("input")
      inputTxtNome.id = "nome"
      inputTxtNome.placeholder = "Nome do livro"
      res.appendChild(inputTxtNome)

      res.innerHTML += `<p>Autor</p>`
      let inputTxtAutor = window.document.createElement("input")
      inputTxtAutor.id = "autor"
      inputTxtAutor.placeholder= "Autor"
      res.appendChild(inputTxtAutor)

      res.innerHTML += `<p>Ano do lançamento</p>`
      let inputTxtAno = window.document.createElement("input")
      inputTxtAno.id = "ano"
      inputTxtAno.placeholder = "Ano"
      res.appendChild(inputTxtAno)

      let buttom = window.document.createElement("button")
      buttom.textContent = "Renomear"
      res.appendChild(buttom)

      buttom.addEventListener("click", ()=>{
        let nome = document.getElementById("nome").value
        let autor = document.getElementById("autor").value
        let ano = document.getElementById("ano").value
        obj.livros[index] = { nome:nome , autor: autor, ano:ano };
        console.log(obj.livros[index])
        listar()
        
      })
        
      }else{
        res.innerHTML = "id invalido"
      }
  }) 
}

