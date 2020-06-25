function type(obj) {
	return obj.__proto__.constructor
}

var epoch1900 = 25569 * 86400 * 1000;

$(document).ready(function() {
	console.log('script.js')
	setInterval(function() {
		var now = Number(new Date())+epoch1900
		now /= 86400 * 1000;
		now -= 4 / 24
		now = String(now)
		now = now.substr(0,now.indexOf('.')+6)
		$('#excel').text(now)
		$('#normal').text(new Date())
	}, 864);
	// }, 136);
})

function gcf(a, b) {
	if (a > b) {
		return gcf(a - b)
	} else if (b > a) {
		return gcf(b - a)
	} else {
		return a
	}
}

function rebase(num, digits='0123456789XE') {
	if (type(digits) == Number){
		var base = digits
		digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.substr(0,base)
	} else {
		base = digits.length;
	}
	result = ''
	while (num >= 1) {
		num = Math.floor(num)
		var digit = digits[num % base]
		result = digit + result
		num /= base
	}
	return result
}