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

 ///create new button (attack or run)
    const atkBtn = document.createElement("button")
    atkBtn.onclick = attackMove

    if (colorName === "Howl") {
        atkBtn.innerHTML = "Claws";
        atkBtn.dataset.move = "Claws";
    }
    else if (colorName === "Princess Mononoke") {
        atkBtn.innerHTML = "Sword"
        atkBtn.dataset.move = "Sword"
    }

    adventureRef.appendChild(atkBtn) }

    const runAwayButton = document.createElement("button");
    runAwayButton.innerHTML = "Run Away";
    runAwayButton.onclick = runAway;
    adventureRef.appendChild(runAwayButton);

    myColor = { name: colorName};
}


///
 
function runAway() {
    adventureRef.innerHTML += "<p>You ran away</p>";
}

function attackMove(e) {
    const attackMove = e.currentTarget.dataset.move

    adventureRef.innerHTML +=
    "<p>" + myColor.name + " used " + attackMove + "</p>";


    if (attackMove === "Claws"){
        attackMove.innerHTML = "Claws";
        attackMove.dataset.move = "Claws";
    }
    else if (attackMove === "Sword"){
        attackMove.innerHTML = "Sword";
        attackMove.dataset.move = "Sword";
    }
}

////Second Attack 

const secAtkBtn = document.createElement("button")
secAtkBtn.onclick = secAttackMove

if (myColor === "Howl") {
    secAtkBtn.innerHTML = "Wings";
    secAtkBtn.dataset.move = "Wings";
}
else if (myColor === "Princess Mononoke") {
    secAtkBtn.innerHTML = "Spear"
    secAtkBtn.dataset.move = "Spear"
}

adventureRef.appendChild(secAtkBtn) 



