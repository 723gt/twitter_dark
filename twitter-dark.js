$(function(){
  tweet_dark();
  setInterval(tweet_dark,3000);
  function tweet_dark(){
    $("body").css("background","#002663");
    $(".Trends").css("background","#002663");
    $(".DashboardProfileCard-content").css("background","#002663");
    $(".tweet").css("background","#002663");
    $(".missing-tweets-bar").css("background","#002663");
    $(".stream-item-activity-line").css("background","#002663");
    $(".stream-item-content").css("background","#002663");
    $(".activity-supplement").css("background","#002663");
    $(".tweet").css("color","#ffffff");
    $(".fullname").css("color","#ffffff");
  }
});
