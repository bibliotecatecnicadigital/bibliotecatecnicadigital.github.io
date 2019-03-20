// Nome: BTD
// Data: 19/03/2019
// Autor: CHFR

$(document).ready(function(){

    //Botao da pagina incial dispara a funçao que retira o valor do select box e chama uma pagina de categoria.
    $("#btnPesquisar").click(function(){
      var catsel = $(".escolhaCategoria option:selected").val(); //Retirando valor do select box
      
      //fazer um if para cada categoria.
      //Essa parte compara o valor do select box e atualiza a pagina conforme ele.
      if(catsel == "CompAnt"){
          location.href="categorias/computadoresantigos.html"
      }
      if(catsel == "programacao"){
        location.href="categorias/programacao.html"
      }
      if(catsel == "teoria"){
        location.href="categorias/teoria.html"
      }
      if(catsel == "ele"){
        location.href="categorias/eletronica.html"
      }
      if(catsel == "datasheets"){
        location.href="categorias/datasheets.html"
      }
      if(catsel == "mecanica"){
        location.href="categorias/mecanica.html"
      }
    });

    //Codigo da pagina categoria
    $("#Home").click(function(){
      location.href="../index.html"
    });

    //Botao de retorno: ele deve retornar a pagina anterior mas se nao for dentro de categoria ele vai para a home

    //Botao de avanço: vai para a proxima pagina da categoria se nao existe vai para a home

});