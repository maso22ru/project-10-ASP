// let value = 1;

const countElement = document.getElementById("displayCount");
const increaseElemnet = document.getElementById("increase");
const decreaseElemnet = document.getElementById("decrease");


// countElement.innerText = value;
countElement.innerText = 1;

increaseElemnet.addEventListener("click", function(event) {
    // value = value + 1;
    // if (value < 0) {
       
    // }

    // countElement.innerText = value;
    countElement.innerText = parseInt(countElement.innerText) + 1;
});

decreaseElemnet.addEventListener("click", function(event) {
    // value = value - 1;

    // countElement.innerText = value;

    let newValue = parseInt(countElement.innerText) - 1;
    if (newValue >= 0) {
        countElement.innerText = newValue;
    }
});

// web and user interface design 2022 - javascript part 3, used to create



function showAlert() {
    alert("You have placed your order! thank you!")
}



function showBagCount() {
    let bag = document.getElementById("bag")
    bag.classList.add("invisible")

    let bagWith1 = document.getElementById("bagWith1")
    bagWith1.classList.remove("invisible")

}






