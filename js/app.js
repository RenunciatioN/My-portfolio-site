var swiper = new Swiper(".mySwiper", {
	speed: 900,
	// 
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev',
	  },
	spaceBetween: 60,
	scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	autoplay: {
		delay: 5000,
	},
	effect: 'fade',
  	fadeEffect: {
    	crossFade: true
  	},
	autoHeight: true,
	
});



AOS.init();



//popup
const popup = document.querySelector('.popup');
const getStartedBtn = document.querySelector('.header__btn');
const closeBtn = document.querySelector('.popup__close')

getStartedBtn.addEventListener('click', () => {
	popup.classList.add('popup--active')
	
	
	console.log('btn')
});

closeBtn.addEventListener('click', (e) => {
	popup.classList.remove('popup--active');
	
	
})

document.addEventListener('mousedown', (e) => {
	if (e.target.closest('.popup') === null) {
		popup.classList.remove('popup--active');
	}
})







// Анимация в теле вкладки браузера
$(function () {
    var title = document.title,
        animSeq = ["|"],
        animIndex = 0,
        titleIndex = 0;
    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 1) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[0];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 150);
});





// Прокрутка страницы при клике на кнопку
const footerBtn = document.querySelector('.footer__btn-wrap');
footerBtn.addEventListener('click', () => {
	document.body.scrollIntoView({block: "start", behavior: "smooth"});

})

