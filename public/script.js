var forEach = function (array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, i, array[i])
	}
}
var size = document.querySelector('.img').clientWidth
var width = size > 150 ? '200' : '150'
var imgs = document.querySelectorAll('.img')
forEach(imgs, function(i, v) {
	var img = imgs[i].getAttribute('data-src')
	imgs[i].style.backgroundImage = 'url(/'+width+'/'+img+'.jpg)'
})

var art = document.querySelectorAll('.art')
forEach(art, function(i, v) {
	var img = art[i].getAttribute('data-src')
	art[i].style.backgroundImage = 'url('+img+')'
})

var nav = document.getElementById("nav")
document.addEventListener("scroll", function(event) {
	if (document.body.clientWidth > 800) {
		alpha = 1 - (document.documentElement.scrollTop || document.body.scrollTop / window.innerHeight)
		nav.style.opacity = alpha > 0.33 ? alpha : 0.33
	} else {
		nav.style.opacity = 1
	}
})