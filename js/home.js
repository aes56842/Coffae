

const heroTitle = document.getElementById("heroTitle");
const titles = ["New Arrivals", "The Coffee Table"];
let currentIndex = 0;

setInterval(function() {
    heroTitle.style.opacity = "0";

    setTimeout(function() {
        currentIndex = (currentIndex + 1) % titles.length;
        heroTitle.textContent = titles[currentIndex];
        heroTitle.style.opacity = "1";
    }, 500);

}, 3000);

function handleSubmit(event) {
    event.preventDefault();

    const successMsg = document.getElementById("contactSuccess");
    successMsg.style.display = "block";

    event.target.reset();

    setTimeout(function() {
        successMsg.style.display = "none";
    }, 4000);
}