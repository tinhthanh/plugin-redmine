// RANDOM PLACEHOLDERS

$(function(){
  var list = ['Search Apple Music',
							'Search App Store',
							'Search For Answers',
							'Search apple.com',
							'Ask Questions'],
      r = Math.floor(Math.random() * list.length);
  $('#placeholder').prop('placeholder',list[r]);
});


// RANDOM IMAGES

var random = [
  "http://pngimg.com/uploads/apple_logo/apple_logo_PNG19694.png",
  "http://pngimg.com/uploads/apple_logo/apple_logo_PNG19684.png",
  "http://pngimg.com/uploads/apple_logo/apple_logo_PNG19692.png",
	"http://cdn.onlinewebfonts.com/svg/img_44448.png",
  "https://i.pinimg.com/originals/41/5f/47/415f476c0d7d934f956f9a61a41e9731.png",
  "http://pngimg.com/uploads/apple_logo/apple_logo_PNG19695.png"
];

var size = random.length
var x = Math.floor(size*Math.random())
document.getElementById('image').src=random[x];