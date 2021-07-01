const catalogo = require("./catalogo");

function adicionarFilme(titulo, duracao, atores, anoDoLancamento, emCartaz) {
  const novoFilme = {
    codigo: catalogo.length + 1,
    titulo,
    duracao,
    atores,
    anoDoLancamento,
    emCartaz,
  };

  catalogo.push(novoFilme);
  console.log("Filme adicionado com sucesso!");
}

function adicionarFilme(titulo, duracao, atores, anoDoLancamento, emCartaz) {
  const novoFilme = {
    codigo: catalogo.length + 1,
    titulo,
    duracao,
    atores,
    anoDoLancamento,
    emCartaz,
  };

  catalogo.push(novoFilme);
  console.log("Filme adicionado com sucesso!");
}

function buscarFilme(codigo) {
  const filmeProcurado = catalogo[codigo - 1];
  if (!filmeProcurado) {
    return console.log("Código não encontrado");
  }
  console.log(filmeProcurado);
}

buscarFilme(2);

function alterarStatusEmCartaz(codigo, novoStatus) {
  const filmeProcurado = catalogo[codigo - 1];

  if (!filmeProcurado) {
    return console.log("Código não encontrado");
  }

  catalogo[codigo - 1].emCartaz = novoStatus;

  console.log("Filme alterado!");
}

let listarCatalogo = () =>{
  for(let i=0 ; i < catalogo.length; i++){
    console.log("-".repeat(12));
    console.log("Nome do filme: " + catalogo[i].titulo);
    console.log("Duração: " + catalogo[i].duracao);
    console.log("Atores: " + catalogo[i].atores);
    console.log("Ano de Lançamento: " + catalogo[i].anoDoLancamento);
    console.log("Esta em cartaz: "+ catalogo[i].emCartaz);
    
  }
}

/*let listarCartaz = () => {
  for(let i=0 ; i < catalogo.length; i++){
    console.log(catalogo[i].emCartaz ? catalogo[i].titulo + " esta em cartaz!" : "");
  }
}

listarCartaz() */

let listMovies = () => {
  for(let i=0 ; i < catalogo.length; i++){
    let filme = catalogo[i];
    console.log("-".repeat(99));
    console.log("Nome do Filme: \n " + filme.titulo);
    console.log("Ano do Filme: \n " + filme.anoDoLancamento);
    console.log("Está em Cartaz: \n " + filme.emCartaz);
  }
}

listMovies();