const height = window.screen.height
gsap.utils.toArray(".s-top").forEach((panel, i) => {
	ScrollTrigger.create({
		trigger: panel,
		start: "top top", 
		pin: true, 
		pinSpacing: false,
		end:'+=2000',
	});
});

const aboutAnim = () => {

	const TLabout = gsap.timeline({
		scrollTrigger:{
			trigger: '#about',
			start:"top 50%",
			end:"top 20%",
			onLeave: self => self.kill(false, true)
		}
	}, '+=0');
	TLabout
	.from(".s-about-img.img2", {
		autoAlpha: 0,
		x: -100,
		y: -100,
		duration: 1.2
	}, '+=0.5')
	.from(".s-about-img.img3", {
		autoAlpha: 0,
		x: -100,
		y: 100,
		duration: 1.2
	}, '-=1.2')
	.from(".s-about-img.img4", {
		autoAlpha: 0,
		x: 100,
		y: -100,
		duration: 1.2
	}, '-=1.2')
	.from(".s-about-img.img5", {
		autoAlpha: 0,
		x: 100,
		y: 100,
		duration: 1.2
	}, '-=1.2')



}


document.addEventListener("DOMContentLoaded",function(){

	var scrollpos = window.scrollY;

	window.addEventListener('scroll', function(){ 
    //Here you forgot to update the value
		scrollpos = window.scrollY;

		if(scrollpos > 100){
			document.querySelector('.s-header').classList.add('active');
		}
		else {
			document.querySelector('.s-header').classList.remove('active');
		}
	});
	if(document.querySelector('.js-toggle')){
		document.querySelector('.js-toggle').addEventListener('click', function(e){
			e.preventDefault();
			this.classList.toggle('active');
			this.closest('.s-header').classList.toggle('fix');
			document.querySelector('.s-menu').classList.toggle('active');
		});
	}

	aboutAnim();
});


(function () {

		const smoothScroll = function (targetEl, duration) {
			let target = document.querySelector(targetEl);
			let targetPosition = target.getBoundingClientRect().top;

			let startPosition = window.pageYOffset;
			let startTime = null;

			const ease = function(t,b,c,d) {
				t /= d / 2;
				if (t < 1) return c / 2 * t * t + b;
				t--;
				return -c / 2 * (t * (t - 2) - 1) + b;
			};

			const animation = function(currentTime){
				if (startTime === null) startTime = currentTime;
				const timeElapsed = currentTime - startTime;
				const run = ease(timeElapsed, startPosition, targetPosition, duration);
				window.scrollTo(0,run);
				if (timeElapsed < duration) requestAnimationFrame(animation);
			};
			requestAnimationFrame(animation);

		};
		let count = 0;
		const scrollTo = function () {
			const links = document.querySelectorAll('.js-scroll');
			links.forEach(each => {
				each.addEventListener('click', function () {
					const currentTarget = this.getAttribute('href');
					smoothScroll(currentTarget, 1000);
					

				});
			});
		};
		scrollTo();
	}());