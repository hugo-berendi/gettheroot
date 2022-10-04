function error(err) {
	// def output div
	let wrapper = document.getElementById('output');

	wrapper.innerHTML = '<h1>A wild error appeard💥 ' + err + '</h1>';
}

function tryRoot(i, n, np, imaginary) {
	// try to get the root
	try {
		// def the numbers
		let j = Math.pow(i, np / n);

		// check if j is NaN
		if (isNaN(j)) {
			error('Your result is NaN (Not a Number)!');
			return false;
		}

		// def output div
		let output = document.getElementById('output');

		if (imaginary == true) {
			// write the root to the website
			output.innerHTML =
				'<h1>The <span>' +
				n +
				'.</span> root of <span>-' +
				i +
				'</span> is <span>' +
				j +
				'*i</span></h1>';
		} else {
			// write the root to the website
			output.innerHTML =
				'<h1>The <span>' +
				n +
				'.</span> root of <span>' +
				i +
				'</span> is <span>' +
				j +
				'</span></h1>';
		}
		// catch any error of the try
	} catch (err) {
		error(err);
		return false;
	}
}

function doForm() {
	// def data
	let data = new FormData();
	// def input elements
	let numput = document.getElementById('num');
	let typeput = document.getElementById('type');
	let powerput = document.getElementById('power');

	// write the data from input to data
	data.append('number', numput.value);
	data.append('type', typeput.value);
	data.append('power', powerput.value);

	// get the input as vars
	let i = data.get('number');
	let n = data.get('type');
	let p = data.get('power');

	// check if num or type is not defined
	if (!i || !n || !p) {
		error('One or more of your inputs is not defined!');
		return false;
	}

	// check if num or type is NaN
	if (isNaN(i) || isNaN(n) || isNaN(p)) {
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
}
