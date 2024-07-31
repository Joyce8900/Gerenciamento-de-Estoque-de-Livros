let livros = '{ "livros" : [' +
  '{ "nome":" Querido John" , "autor":"Doe" },' +
  '{ "nome":"A cabana" , "autor":"Smith" },' +
  '{ "nome":"Peter Pan" , "autor":"Jones" } ]}';

let res = window.document.getElementById("res")
let obj = JSON.parse(livros);

const listar = ()=>{
  res.innerHTML = ""
  for (let i = 0; i < obj.livros.length; i++){
    res.innerHTML += obj.livros[i].nome + " " + obj.livros[i].autor + "<br>";
  }
}