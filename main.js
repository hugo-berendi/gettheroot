const error = (err) => {
	const wrapper = document.getElementById('output');
	wrapper.innerHTML = `<h1>A wild error appeared💥 ${err}</h1>`;
};

const tryRoot = (i, n, np, imaginary) => {
	try {
		const j = Math.pow(i, np / n);

		if (Number.isNaN(j)) {
			error('Your result is NaN (Not a Number)!');
			return false;
		}

		const output = document.getElementById('output');

		if (imaginary) {
			output.innerHTML = `<h1>The <span>${n}.</span> root of <span>-${i}</span> is <span>${j}*i</span></h1>`;
		} else {
			output.innerHTML = `<h1>The <span>${n}.</span> root of <span>${i}</span> is <span>${j}</span></h1>`;
		}
	} catch (err) {
		error(err);
		return false;
	}
};

window.doForm = (form) => {
	const numput = document.querySelector('#num');
	const typeput = document.querySelector('#type');
	const powerput = document.querySelector('#power');

	form.append('number', numput.value);
	form.append('type', typeput.value);
	form.append('power', powerput.value);

	const i = form.get('number');
	const n = form.get('type');
	const p = form.get('power');

	if (!i || !n || !p) {
		error('One or more of your inputs is not defined!');
		return false;
	}

	if (Number.isNaN(i) || Number.isNaN(n) || Number.isNaN(p)) {
		error('One or more of your inputs is NaN (Not a Number)!');
		return false;
	}

	if (i < 0) {
		i = Math.pow(i * i, 1 / 2);
		tryRoot(i, n, p, true);
	} else {
		tryRoot(i, n, p, false);
	}

	return false;
};

const test = () => {
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
};

const log = (text, type) => {
	switch (type) {
		case 'error':
			console.error(text);
			break;
		case 'warn':
			console.warn(text);
			break;
		case 'info':
			console.info(text);
			break;
		case 'log':
			console.log(text);
			break;
		default:
			console.log(text);
	}
};
