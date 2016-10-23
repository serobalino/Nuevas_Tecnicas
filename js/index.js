$.ajax({
    url: "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=cover&limit=50&offset=0&order=release_dates.date%3Adesc",
    headers:
    {
        "X-Mashape-Key":"JgZPtQQAeVmsh5onCixC9uYpQqjTp1rjkh1jsnFwl0cpbRG1Xg"
    },
    method:"GET",
    success: function(data){
        var html_val='';
        var foto='';
        $.each( data, function(i,vector){
            if(typeof (vector.cover) ==='undefined')
                foto='https://res.cloudinary.com/igdb/image/upload/t_cover_big/nocover_qhhlj6.jpg';
            else
                foto='http://res.cloudinary.com/igdb/image/upload/t_cover_big/'+vector.cover.cloudinary_id+'.jpg';
            //screenshots{cloudinary_id,width,height}
            //release_dates{category,platform,date}
            html_val+='<a class="carousel-item" ><img src="'+foto+'" width="400px"/></a>';
        });

        $(".carousel").html(html_val);
        //$('.carousel').carousel();
    }
});
$.ajax({
    url: "https://igdbcom-internet-game-database-v1.p.mashape.com/platforms/?fields=*&limit=*&offset=50",
    headers:
    {
        "X-Mashape-Key":"JgZPtQQAeVmsh5onCixC9uYpQqjTp1rjkh1jsnFwl0cpbRG1Xg"
    },
    method:"GET",
    success: function(data){
        var html_val='';
        var foto='';
        $.each( data, function(i,vector){
            //screenshots{cloudinary_id,width,height}
            //release_dates{category,platform,date}
            html_val+='<a class="list" href="'+vector.url+'" target="_blank"><h3>'+vector.name+'</h3></a>';
        });

        $(".plataformas").html(html_val);
        //$('.carousel').carousel();
    }
});
