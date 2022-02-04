const buttonRegister = document.querySelector(".btn--register"),
	modal = document.getElementById("modalWindow"),
	btnClose = document.querySelector(".modal--close"),
	overlay = document.querySelector(".overlay"),
	submit = document.getElementById("submitForm"),
	formFname = document.getElementById("formFname"),
	formLname = document.getElementById("formLname"),
	formEmail = document.getElementById("formEmail"),
	formPhoneNumber = document.getElementById("formPhoneNumber"),
	formBirthYear = document.getElementById("formBirthYear");

const postForm = async () => {
	try {
		const url = `https://test-api.codingbootcamp.cz/api/9e5603be/events/1/registrations`;
		const formData = {
			formFname: formFname.value,
			formLname: formLname.value,
			email: formEmail.value,
			formPhoneNumber: formPhoneNumber.value,
			formBirthYear: formBirthYear.value,
		};
		const myResponse = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});
		const myUsableReposnse = await myResponse.json();
		if (myUsableReposnse.status === "success") {
			alert("you registration has been logged!");
		}
	} catch (err) {
		console.error(err);
	}
};

export default function test() {
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

	submit.addEventListener("click", (e) => {
		e.preventDefault();

		postForm();
	});
}
