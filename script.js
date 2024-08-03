let livros = '{ "livros" : [' +
  '{ "nome":" Querido John" , "autor":"Doe" },' +
  '{ "nome":"A cabana" , "autor":"Smith" },' +
  '{ "nome":"Peter Pan" , "autor":"Jones" } ]}';

const res = window.document.getElementById("res")
let obj = JSON.parse(livros);

const listar = ()=>{
  res.innerHTML = ""
  for (let i = 0; i < obj.livros.length; i++){
    res.innerHTML +="Nome:"+ obj.livros[i].nome + "-- " +"Autor:"+ " "+ obj.livros[i].autor + "<br>";
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
  button.addEventListener("click", function(){
    console.log("entrou")
    let textBuscar = document.getElementById("input").value.toLowerCase()
    
    for (let i = 0; i <  obj.livros;i++){
      if (obj.livros[i].nome === searchF) {
        searchResult = obj.employees[i].nome + " " + obj.livros[i].lastName;
        break;
      }
    }
    
    if (livroEncontrado) {
      res.innerHTML += `<br>Nome: ${livroEncontrado.nome} <br> Autor: ${livroEncontrado.autor}`;
    }else if(textBuscar == ""){
      res.innerHTML += "<p>Digite o nome do livro</p>"
    }
    else {
      res.innerHTML += "Livro não encontrado.";
    }
  })
  
  res.appendChild(button) 
}
