$(".video4, .video2, .video3").hide();

setInterval(video);
function video() {
  $(".video").delay(7000);
  $(".video1").fadeOut(2000);
  $(".video2").fadeIn(2000);
  $(".video").delay(7000);
  $(".video2").fadeOut(2000);
  $(".video3").fadeIn(2000);
  $(".video").delay(7000);
  $(".video3").fadeOut(2000);
  $(".video4").fadeIn(2000);
  $(".video").delay(7000);
  $(".video4").fadeOut(2000);
  $(".video1").fadeIn(2000);
}
