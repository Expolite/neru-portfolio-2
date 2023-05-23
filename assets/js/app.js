
// Scroll Animation - About
// [about me] - when it display, shows the contents in animation way.
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('showme');
		}else {
			entry.target.classList.remove('showme');
		}
	});
});

const hiddenElements = document.querySelectorAll('.hideme');
// what to observe
hiddenElements.forEach((el) => observer.observe(el)); 	// observe all elements 











// Scroll Animation - Skills
// [Skills] - when it display, shows the contents in animation way.
// const observer_2 = new IntersectionObserver((entries) => {
// 	entries.forEach((entry) => {
// 		if (entry.isIntersecting) {
// 			entry.target.classList.add('focusText');
// 		}else {
// 			entry.target.classList.remove('focusText');
// 		}
// 	});
// });

// const hiddenElements_2 = document.querySelectorAll('.aboutSection');
// // what to observe
// hiddenElements_2.forEach((el) => observer_2.observe(el)); 	// observe all elements 






