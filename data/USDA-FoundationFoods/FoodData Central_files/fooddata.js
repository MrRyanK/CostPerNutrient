/* Hero image loader */
if ($('#randomHero').length > 0) {
  var imgCount = 16; /* the amount of photos to be selected from   */
  var dir = '../img/';
  var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
  var images = new Array /* Every hero image to be included in the loader should be listed here skipping no numbers. */
  images[1] = "hero_bread.jpg",
  images[2] = "hero_dairy.jpg",
  images[3] = "hero_fruit.jpg",
  images[4] = "hero_fruitveg.jpg",
  images[5] = "hero_nuts.jpg",
  images[6] = "hero_pasta.jpg",
  images[7] = "hero_seafood.jpg",
  images[8] = "hero_tapas.jpg",
  images[9] = "hero_veg.jpg",
  images[10] = "hero_porkchops.jpg",
  images[11] = "hero_roast.jpg",
  images[12] = "hero_chicken.jpg",
  images[13] = "hero_chickenwings.jpg",
  images[14] = "hero_kabobs.jpg",
  images[15] = "hero_assort1.jpg",
  images[16] = "hero_assort2.jpg",
  document.getElementById("randomHero").style.background = "url(" + dir + images[randomCount] + ")";
  document.getElementById("randomHero").style.backgroundSize = "cover";
document.getElementById("randomHero").style.backgroundPosition = "center";
};
/* Identify external links with an icon */
$("a").filter(function() {
  return this.hostname && this.hostname !== location.hostname;
}).addClass('usa-external_link');
