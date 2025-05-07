document.getElementById("animated-btn").addEventListener("click", function() {
    this.style.backgroundColor = "#28a745";
    this.textContent = "Clicked!";
});

document.getElementById("animated-img").addEventListener("mouseover", function() {
    this.style.transform = "scale(1.5) rotate(20deg)";
});

document.getElementById("dark-mode-btn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}
