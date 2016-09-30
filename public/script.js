var forEach = function (array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, i, array[i])
	}
}
try {
	var size = document.querySelector('.img').clientWidth
	var width = size > 150 ? '200' : '150'
	var imgs = document.querySelectorAll('.img')
	forEach(imgs, function(i, v) {
		var img = imgs[i].getAttribute('data-src')
		imgs[i].style.backgroundImage = 'url(/'+width+'/'+img+'.jpg)'
	})
} catch(e) {

}
try {
	var size1 = document.querySelector('.art').clientWidth
	var w1
	if (size1 > 450) {
		w1 = '675'
	} else if (size1 > 225) {
		w1 = '450'
	} else {
		w1 = '225'
	}
	var art = document.querySelectorAll('.art')
	forEach(art, function(i, v) {
		var img = art[i].getAttribute('data-src')
		art[i].style.backgroundImage = 'url(/art/'+w1+'/'+img+'.jpg)'
	})
} catch(e) {
	
}

var nav = document.getElementById("nav")
document.addEventListener("scroll", function(event) {
	if (document.body.clientWidth > 800) {
		alpha = 1 - (document.documentElement.scrollTop || document.body.scrollTop / window.innerHeight)
		nav.style.opacity = alpha > 0.33 ? alpha : 0.33
	} else {
		nav.style.opacity = 1
	}
})