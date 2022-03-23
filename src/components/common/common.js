$(function(){
  $(".depth1").mouseenter(function(){
    $(".depth2").stop().slideDown(400)
  });
  
  $(".depth1").mouseleave(function(){
    $(".depth2").stop().slideUp(200)
  });
})
