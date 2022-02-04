export default function test() {
	const buttonRegister = document.querySelector(".btn--register"),
		modal = document.getElementById("modalWindow"),
		btnClose = document.querySelector(".modal--close"),
		overlay = document.querySelector(".overlay");

	//calls the modal window
	buttonRegister.addEventListener("click", (e) => {
		if (modal.classList.contains("hidden")) {
			modal.classList.remove("hidden");
		}
		if (overlay.classList.contains("hidden")) {
			overlay.classList.remove("hidden");
		}
	});
	//close modal function
	const close = () => {
		modal.classList.add("hidden");
		overlay.classList.add("hidden");
	};
	//close the modal window listeners
	btnClose.addEventListener("click", close);
	// close modal if click is in the gray overlay
	overlay.addEventListener("click", close);
	//add event listener to close the modal window when esc is pressed down
	document.addEventListener("keydown", function (e) {
		e.preventDefault;
		if (e.key === "Escape" && !modal.classList.contains("hidden")) close();
	});
}
