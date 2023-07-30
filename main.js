const adj1 = document.getElementById("adj1");
const noun1 = document.getElementById("noun1");
const adj2 = document.getElementById("adj2");
const clothing = document.getElementById("clothing");
const bodyPart = document.getElementById("bodyPart");
const verb1 = document.getElementById("verb1");
const food = document.getElementById("food");

// Variable to display the mad lib
const madLibDisplay = document.querySelector(".mad-lib");

// Variable for the form
 const form = document.querySelector("form");

 // Variable for the mad Lib story
 const story = `My friends and I drive <b>${adj1}</b> <b>${noun1}</b> every day. We wear <b>${adj2}</b> <b>${clothing}</b> on our <b>${bodyPart}</b> while we <b>${verb1}</b> to the tractors with <b>${food}</b>.`

 form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (adj1.value == "") {
        alert(`${adj1.name} must be filled out!`);
        adj1.focus();
    } else if (noun1.value == "") {
        alert(`${noun1.name} must be filled out!`);
        noun1.focus();
    }
    else if (adj2.value == "") {
        alert(`${adj2.name} must be filled out!`);
        adj2.focus();
    }
    else if (clothing.value == "") {
        alert(`${clothing.name} must be filled out!`);
        clothing.focus();
    }
    else if (bodyPart.value == "") {
        alert(`${bodyPart.name} must be filled out!`);
        bodyPart.focus();
    }
    else if (verb1.value == "") {
        alert(`${verb1.name} must be filled out!`);
        verb1.focus();
    }
    else if (food.value == "") {
        alert(`${food.name} must be filled out!`);
        food.focus();
    } else {
        madLibStoryDisplay();
    }
});

 function madLibStoryDisplay() {
    madLibDisplay.innerHTML = story
    .replace(`${adj1}`, adj1.value)
    .replace(`${noun1}`, noun1.value)
    .replace(`${adj2}`, adj2.value)
    .replace(`${clothing}`, clothing.value)
    .replace(`${bodyPart}`, bodyPart.value)
    .replace(`${verb1}`, verb1.value)
    .replace(`${food}`, food.value);
 }