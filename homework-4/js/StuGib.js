function showPrompt() {
    const userInput = prompt("Do you like adventures?", "Yes")
}

///Choice 1
const adventureRef = document.querySelector("#adventure")
function beginAdventure() {
    adventureRef.innerHTML = "<p>You will fight in the Studio Ghibli Universe. First pick your fighter:</p>"

    const pickColor = [
        {name:"Howl"},
        {name:"Princess Mononoke"},
    ];

    for (let i = 0; i < pickColor.length; i++) {
        const color = pickColor[i];
        const newSection = document.createElement("section")
        newSection.innerHTML += "<h4>" + color.name + "</h4>"

        newSection.dataset.colorName = color.name
        newSection.onclick = chooseColor;

        adventureRef.appendChild(newSection)
        console.log(color)
    }
}

function chooseColor(e) {
    console.log(e.currentTarget);
    const colorName = e.currentTarget.dataset.colorName

    const confrimChoice = confirm("You chose " + colorName)

    if (confrimChoice) {
        adventureRef.innerHTML += "<p>You chose " + colorName + "</p>";

 ///create new button
    const atkdBtn = document.createElement("buton")
    atkBtn.onclick = attackMove

    if (colorName === "Howl") {
        atkBtn.innerHTML = "Claws";
        atkBtn.dataset.move = "Claws";
    }
    else if (colorName ==="Princess Mononoke")
        atkBtn.innerHTML = "Sword"
        atkBtn.dataset.move = "Sword"
    }

    adventureRef.appendChild(atkBtn)

    const secAtkBtn = document.createElement
    secAtkBtn.innerHTML = "Secondary Attack"
    secAtkBtn.onclick = secondAttack

    adventureRef.appendChild(secAttackBtn)}

        function secAtkBtn() {
        adventureRef.innerHTML = "<p>You used Seconhand Melee</p>";


}