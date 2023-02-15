
// let images = [
// 	'./img/01.webp',
// 	'./img/02.webp',
// 	'./img/03.webp',
// 	'./img/04.webp',
// 	'./img/05.webp',
// ]
let indiceSlideAttiva = 0

const images = [
	{
		image: './img/01.webp',
		title: 'Marvel\'s Spiderman Miles Morale',
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	}, {
		image: './img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	}, {
		image: './img/03.webp',
		title: 'Fortnite',
		text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
	}, {
		image: './img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	}, {
		image: './img/05.webp',
		title: "Marvel's Avengers",
		text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
	}
];

let carousel =document.querySelector('.carosello')


for (let i = 0; i < images.length; i++) {
	const game = images[i]
	const {image , title, text} = game
	

	let className = 'slide'
	if (i === indiceSlideAttiva) {
		className += ' active'
	}

	const htmlSlide = `
    <div class="${className}  ">
    <div class="info position-absolute">
        <h1 id="title">${title}</h1>
        <p id="sub_title">${text}</p>
    </div>
    <img src="${image}" alt="">
</div>
	`
	carousel.innerHTML += htmlSlide
	
}



const slideElements = document.getElementsByClassName('slide')
// console.log(slideElements)

const rightBtnElement = document.querySelector('.carosello__arrow.arrow-right')
const leftBtnElement = document.querySelector('.carosello__arrow.arrow-left')

// console.log(rightBtnElement)

rightBtnElement.addEventListener('click', function () {
	const lastIndex =slideElements.length-1
	slideElements[indiceSlideAttiva].classList.remove('active')
	if (indiceSlideAttiva < lastIndex) {
		indiceSlideAttiva += 1
	} else {
		indiceSlideAttiva = 0
	}
	slideElements[indiceSlideAttiva].classList.add('active')
})

leftBtnElement.addEventListener('click', function () {
	slideElements[indiceSlideAttiva].classList.remove('active')
	if (indiceSlideAttiva > 0) {
		indiceSlideAttiva--
	} else {
		indiceSlideAttiva = slideElements.length - 1 //last index
	}
	console.log(slideElements[indiceSlideAttiva])
	slideElements[indiceSlideAttiva].classList.add('active')
})
