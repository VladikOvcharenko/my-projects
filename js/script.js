
window.addEventListener('DOMContentLoaded', () => {

	const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 990000);

  modal('[data-modal]', '.modal', modalTimerId);
	modal('[data-modal-singUp]', '.modal-singUp');

	function closeModal(modalSelector) {
		const modal = document.querySelector(modalSelector);
	
		modal.classList.add("hide");
		modal.classList.remove("show");
		document.body.style.overflow = "";
	}
	
	function openModal(modalSelector, modalTimerId) {
		const modal = document.querySelector(modalSelector);
	
		modal.classList.add("show");
		modal.classList.remove("hide");
		document.body.style.overflow = "hidden";
	
		console.log(modalTimerId);
	
		if (modalTimerId) {
			clearInterval(modalTimerId);
		}
	}
	function modal(triggerSelector, modalSelector, modalTimerId) {
		const modalTrigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector);
	
		modalTrigger.forEach((btn) => {
			btn.addEventListener("click", () => openModal(modalSelector, modalTimerId));
		});
	
		modal.addEventListener("click", (e) => {
			if (e.target === modal || e.target.getAttribute("data-close") == "") {
				closeModal(modalSelector);
			}
		});
	
		document.addEventListener("keydown", (e) => {
			if (e.code === "Escape" && modal.classList.contains("show")) {
				closeModal(modalSelector);
			}
		});
	
	}



	const owl = $('.owl-carousel');

	owl.owlCarousel({
			center: true,
			loop: true,
			margin: 20,
			items: 1,
			startPosition: 1,
			responsive: {				
					640: {
						items: 3,	
					},
					850: {
						items: 3,		
					},		
					1200: {
						items: 3,
						margin: 30,
					},				
				},
			},
		)

	$('.slider__btn--prev').click(function() {
			owl.trigger('prev.owl.carousel');
	})

	$('.slider__btn--next').click(function() {
			owl.trigger('next.owl.carousel');
	});

	// Nav icon
	const navBtn = document.querySelector('.nav__toggle');
	const nav = document.querySelector('.nav')
	const menuIcon = document.querySelector('.menu-icon');


	navBtn.onclick = function () {
		nav.classList.toggle('nav--mobile')
		menuIcon.classList.toggle('menu-icon--active');
		document.body.classList.toggle('no-scroll');
	};

});
