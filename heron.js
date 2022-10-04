function test() {
	let l = 10;
	let t = 0;
	let i = 2;
	let r = (i + i / i) / 2;

	while (l > t) {
		r = (r + i / r) / 2;
		if (r * r == i) {
			console.log(r);
		} else {
			if (t == l) {
				console.log(r);
			} else {
				t++;
			}
		}
	}
}

function log(text, type) {
	if (type == 'error') {
		console.error(text);
	} else if (type == 'warn') {
		console.warn(text);
	} else if (type == 'info') {
		console.info(text);
	} else if (type == 'log') {
		console.log(text);
	}
}

export default log;
