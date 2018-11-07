document.getElementById('formulario').addEventListener('submit', pesquisarFilme);

function pesquisarFilme(){

    var filmePesquisa = document.getElementById('pesquisar').value;
    buscarFilmes(filmePesquisa);
     event.preventDefault();

}
function buscarFilmes(filmePesquisa){

    axios.get('http://www.omdbapi.com/?s='+filmePesquisa+'&apikey=179ee0b6')
  .then(function (response) {
    console.log(response);
    var filmes = response.data.Search;
    var mostrarFilmes = document.getElementById('filmes');
    mostrarFilmes.innerHTML = '';
    console.log(filmes);
    if(response.status === 200){
        filmes.forEach(function(filme){
            mostrarFilmes.innerHTML += '<div class="col-sm-6 col-md-4">'+
            '<div class="thumbnail">'+
               '<img src="'+filme.Poster+'" class="img-thumbnail">'+
               '<h4>'+filme.Title+'</h4>'+
               '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Ver Detalhes</button><br/><br/><br/>'+
               '</div>'+
                '</div>';  
        });
    }

  })
  .catch(function (error) {
    console.log(error);
  });
}