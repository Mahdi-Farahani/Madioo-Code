// Get references to the shape and container
const shape = document.querySelector('.shape');
const shapeTwo = document.querySelector('.shape-two');
const container = document.querySelector('.container');

// Calculate the maximum distance the shape can move
const maxDistance = container.clientHeight - shape.clientHeight;

// Listen for scroll events
window.addEventListener('scroll', () => {
	// Calculate the new position based on scroll position
	const scrollPosition = window.scrollY;
	const newPosition = Math.min(scrollPosition, maxDistance);
	// Update the shape's position
	shape.style.top = `${newPosition + 250}px`;
	shapeTwo.style.top = `${newPosition}px`;
	shapeTwo.style.left = '50%';
});
