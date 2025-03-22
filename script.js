const button = window.document.getElementById("slider");
var images = ["foto0.png", "foto1.png", "foto2.png", "foto3.png"];
var image = window.document.getElementById("image");
let index = 0;
function slide() {
  index = (index + 1) % images.length;
  image.src = images[index];
}
setInterval(slide, 1000);
