//Get the modal
const modal = document.getElementById("simplemodal");
//Get open modal button
const modalbtn = document.getElementById("modal");
// Get Close button.
const closebtn = document.getElementById("closebtn");

//Listen for open click
modalbtn.addEventListener("click", () => (modal.style.display = "block"));
//Listen for close click
closebtn.addEventListener("click", () => (modal.style.display = "none"));
//Listen for outside click
window.addEventListener("click", (e) => {
	if (e.target == modal) {
		modal.style.display = "none";
	}
});
