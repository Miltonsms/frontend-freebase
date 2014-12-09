$(document).ready(function(){
  $('.boton').click(function(){
    var pais = $('input:text[name=nombre]').val();
    var service_url = 'https://www.googleapis.com/freebase/v1/search';
    var params = {
    'query': pais,
    'limit': 10,
    'indent': true
  };
  $.getJSON(service_url + '?callback=?', params, function(response) {
    $(".mostrar").empty();
    var conteo = 0
    $.each(response.result,function(i, result){
      conteo +=1
    var obj={text:result['name']}.text;
    var insertar='<tr>'+'<td>'+conteo+'</td>'+'<td>'+obj+'</td>'+'</tr>'
    $('.mostrar').append(insertar);
});
  });
});
});
/*datos de genero*/
$(document).ready(function(){
  $('.uno').click(function(){
    var pais = $('input:text[name=nombre]').val();
    var service_url = 'https://www.googleapis.com/freebase/v1/search';
    var params = {
    'query': pais,
    'filter': '(all type:/music/genre)',
    'limit': 10,
    'indent': true
  };
  $.getJSON(service_url + '?callback=?', params, function(response) {
    $(".mostrar").empty();
    var conteo = 0
    $.each(response.result,function(i, result){
      conteo +=1
    var obj={text:result['name']}.text;
    var insertar='<tr>'+'<td>'+conteo+'</td>'+'<td>'+obj+'</td>'+'</tr>'
    $('.mostrar').append(insertar);
});
  });
});
});



/* album del artista codigo*/
$(document).ready(function(){
  $('.dos').click(function(){
    var pais = $('input:text[name=nombre]').val();
    var service_url = 'https://www.googleapis.com/freebase/v1/search';
    var params = {
    'query': pais,
    'filter': '(all type:/music/album)',
    'limit': 10,
    'indent': true
  };
  $.getJSON(service_url + '?callback=?', params, function(response) {
    $(".mostrar").empty();
        var conteo = 0
    $.each(response.result,function(i, result){
      conteo +=1
    var obj={text:result['name']}.text;
    var insertar='<tr>'+'<td>'+conteo+'</td>'+'<td>'+obj+'</td>'+'</tr>'
    $('.mostrar').append(insertar);
    
});
  });
});
});
/* HArea de informacion sobre libros */

$(document).ready(function(){
  $('.tres').click(function(){
    var pais = $('input:text[name=nombre]').val();
    var service_url = 'https://www.googleapis.com/freebase/v1/search';
    var params = {
    'query': pais,
    'filter': '(all type:/book/book/)',
    'limit': 10,
    'indent': true
  };
  $.getJSON(service_url + '?callback=?', params, function(response) {
    $(".mostrar").empty();
        var conteo = 0
    $.each(response.result,function(i, result){
      conteo +=1
    var obj={text:result['name']}.text;
    var insertar='<tr>'+'<td>'+conteo+'</td>'+'<td>'+obj+'</td>'+'</tr>'
    $('.mostrar').append(insertar);
    
});
  });
});
});

/* harea de personas */
$(document).ready(function(){
  $('.tres').click(function(){
    var pais = $('input:text[name=nombre]').val();
    var service_url = 'https://www.googleapis.com/freebase/v1/search';
    var params = {
    'query': pais,
    'filter': '(all type:/people/person)',
    'limit': 10,
    'indent': true
  };
  $.getJSON(service_url + '?callback=?', params, function(response) {
    $(".mostrar").empty();
        var conteo = 0
    $.each(response.result,function(i, result){
      conteo +=1
    var obj={text:result['name']}.text;
    var insertar='<tr>'+'<td>'+conteo+'</td>'+'<td>'+obj+'</td>'+'</tr>'
    $('.mostrar').append(insertar);
    
});
  });
});
});
/*genero de libros de la busqueda */
$(document).ready(function(){
  $('.libro1').click(function(){
    var pais = $('input:text[name=nombre]').val();
    var service_url = 'https://www.googleapis.com/freebase/v1/search';
    var params = {
    'query': pais,
    'filter': '(all type:/book/book_edition)',
    'limit': 10,
    'indent': true
  };
  $.getJSON(service_url + '?callback=?', params, function(response) {
    $(".mostrar").empty();
        var conteo = 0
    $.each(response.result,function(i, result){
      conteo +=1
    var obj={text:result['name']}.text;
    var insertar='<tr>'+'<td>'+conteo+'</td>'+'<td>'+obj+'</td>'+'</tr>'
    $('.mostrar').append(insertar);
    
});
  });
});
});
/* HAIRA QUE LIMPIA EL DIV DE INFORMACION */

$(document).ready(function(){
  $('.limpiar').click(function(){
        $(".mostrar").empty();
   });
  });
$(document).ready(function()
    {
    $(".cero").click(function () {  
      $('.oculto ').toggle("slow");
      });
     });
$(document).ready(function()
    {
    $(".libro").click(function () {  
      $('.oculto1 ').toggle("slow");
      });
     });
