$(function(){
  tweet_dark();
  setInterval(tweet_dark,3000);
  function tweet_dark(){
    $("*").css("background","#002663");
    $("*").css("color","#ffffff");
  }
});
