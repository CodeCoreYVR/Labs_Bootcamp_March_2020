function asyncFadeIn(node, time) {
	return new Promise((resolve, reject) => {
		node.fadeIn(time, () => {
			resolve(node);
		});
	});
}

function asyncFadeOut(node, time) {
	return new Promise((resolve, reject) => {
		node.fadeOut(time, () => {
			resolve(node);
		});
	});
}

const stuff = $('#stuff');

asyncFadeOut(stuff, 1000)
	.then(function(node) {
		return asyncFadeIn(node, 2000);
	})
	.then(function(node) {
		return asyncFadeOut(node, 5000);
	})
	.then(function(node) {
		return asyncFadeIn(node, 100);
	})
	.then(function(node) {
		return asyncFadeOut(node, 1500);
	});
