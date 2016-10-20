
$("#buscar").click(buscar_juego);
$("#juego").keypress(function(e) {
    if(e.which == 13) {
        console.log('enter');
        buscar_juego();
    }
});
function buscar_juego(){
  var valor = $("#juego").val();
  if(valor!==''){
  $("#resultado").html('<br><br><br><div class="text-lg-center"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></div>');
    $.ajax({
      url: "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Curl%2Ccover%2Cscreenshots%2Crelease_dates&search="+valor,
      headers:
            {
                "X-Mashape-Key":"JgZPtQQAeVmsh5onCixC9uYpQqjTp1rjkh1jsnFwl0cpbRG1Xg"
            },
      method:"GET",
      success: function(data){
        $("#juego").val('');
        var html_val='<br><br><br><div class="list-group">';
        var foto='';
        $.each( data, function(i,vector){
          if(typeof (vector.cover) ==='undefined')
            foto='https://res.cloudinary.com/igdb/image/upload/t_cover_big/nocover_qhhlj6.jpg';
          else
            foto='http://res.cloudinary.com/igdb/image/upload/t_cover_big/'+vector.cover.cloudinary_id+'.jpg';
          //screenshots{cloudinary_id,width,height}
          //release_dates{category,platform,date}
          html_val+='<a href="'+vector.url+'" target="_blank" class="list-group-item list-group-item-action clearfix"><p class="float-xs-left">'+vector.name+'</p><img src="'+foto+'"  class="rounded float-xs-right"  width="100px"/></a>';
        });
        html_val+='</div><br><br><br>';
        $("#resultado").html(html_val);
      }
    });
  }else{
    $("#resultado").html('<br><br><br><div class="alert alert-danger" role="alert"><strong><i class="fa fa-frown-o" aria-hidden="true"></i> Nooooooooooooo!</strong> <a href="#" class="alert-link">debes ingresar algo para buscar</a> intenta denuevo.</div>');
  }
  return false;
}
