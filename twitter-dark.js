$(function(){
  tweet_dark();
  setInterval(tweet_dark,3000);
  function tweet_dark(){
    $("body").css("background","#002663");
    $(".tweet").css("background","#002663");
    $(".tweet").css("color","#ffffff");
    $(".fullname").css("color","#ffffff");
  }
});
