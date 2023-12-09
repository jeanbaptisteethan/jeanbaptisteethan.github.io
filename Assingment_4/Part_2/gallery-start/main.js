const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const pics = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */


/* Looping through images */

for (let i = 0; i < pics.length; i++) {

const newImage = document.createElement('img');
newImage.setAttribute('src', "images/" + pics[i]);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

newImage.addEventListener("click", funtion);

function funtion() {
	displayed-img = pics[i]
};

};

/* Wiring up the Darken/Lighten button */

const bnt = document.getAttribute('btn') {
	if (bnt === "dark") {
		btn.setAttribute("class", "light");
		btn.textContent = "Lighten";
		overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
	};
	else if (bnt != "dark") {
		setAttribute("class", "dark");
		btn.textContent = "Darken";
		overlay.style.backgroundColor = "rbg(0 0 0 / 0%)";
	};
};