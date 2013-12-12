$(document).ready(function(){
    
    $("#content").load("content/about.htm");
    
    $(".nav").on( "click", function() {
        loadContent($(this).attr('id'));
    });
});

function loadContent(contentToLoad){
    $("#content").load("content/" + contentToLoad + ".htm");
}