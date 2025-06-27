let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
for(item of countries) {
    let options = document.createElement("option");
    options.innerText = item;
    document.querySelector("#mySelect").appendChild(options);
}

document.querySelector("#mySelect").addEventListener("change", (e) =>
    alert(e.target.value));