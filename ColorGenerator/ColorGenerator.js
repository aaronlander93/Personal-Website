window.onload = function() {
	document.addEventListener("click", changeColor);

	function changeColor() {

		var hex = ['#'];
		var dict = {
			10: 'A',
			11: 'B',
			12: 'C',
			13: 'D',
			14: 'E',
			15: 'F'
		}

		for(i = 0; i < 6; i++) {
			var min = 0;
			var max = 16;

			var random = Math.floor(Math.random() * (+max - +min)) + +min;
			if(random > 9) {
				hex.push(dict[random])
			}
			else {
				hex.push(random);
			}
		}

		var newColor = hex.join("");
		document.body.style.backgroundColor = newColor;
	}

}

