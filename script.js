const enterWorldButton = document.querySelector("#enter-world");

enterWorldButton.addEventListener("click", (event) => {
	event.preventDefault();
	enterWorldButton.textContent = "Bine ai venit în regat!";
	enterWorldButton.setAttribute("aria-live", "polite");

	window.setTimeout(() => {
		enterWorldButton.textContent = "Intră în lume";
	}, 2500);
});
