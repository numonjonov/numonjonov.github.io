const dropdownButton = document.querySelector(".dropdown__btn");
let dropdown = false;

dropdownButton.addEventListener("click", function () {
    if(!dropdown) {
        dropdownButton.classList.add('opened');
        dropdown = true;
    } else {
        dropdownButton.classList.remove('opened');
        dropdown = false;
    }
})