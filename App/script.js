$(function(){
    $("#NewGame").click(function(){
        $.ajax({
            type: "GET",
            url: "main_window.html",
            dataType : "html"
        })
        // Ajaxリクエストが成功した場合
            .done(function(data){
            $("#contents").html(data);
            let index = $(".container")
                index.remove();
            })
        // Ajaxリクエストが失敗した場合
            .fail(function(XMLHttpRequest, textStatus, errorThrown){
                alert(errorThrown);
        });
    });
});
