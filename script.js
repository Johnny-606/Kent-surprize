const openButton = document.getElementById("open-gift");
const giftScreen = document.getElementById("gift-screen");
const surprise = document.getElementById("surprise");

function openGift() {
    if (openButton.classList.contains("opened")) return;

    openButton.classList.add("opened");

    setTimeout(function () {
        giftScreen.classList.add("hidden");
        surprise.classList.remove("hidden");
    }, 700);
}

openButton.addEventListener("click", openGift);

openButton.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openGift();
    }
});