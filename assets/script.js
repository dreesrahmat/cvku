const txtElement = ["I'am a Full Stack Developer,", "I'am a Digital Marketer,", "I'am a Freelancer,", "And I'am a Geek/Enthusiast."];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
	nav.classList.toggle('slide');
});

function ubahMode() {
	const ubah = document.body;
	ubah.classList.toggle("dark");
}

(function ngetik(){
	if (count == txtElement.length) {
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if (words.length == currentTxt.length) {
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 300);
})();