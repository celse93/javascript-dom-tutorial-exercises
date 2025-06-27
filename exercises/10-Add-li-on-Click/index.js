let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let newItem = document.createElement("li");
	newItem.innerHTML = "Forth element";
	document.querySelector("#myList").append(newItem);
});
