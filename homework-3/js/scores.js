const scoresUlRef = document.querySelector("#scores")


const scores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38]

for ( let i = 0; i < scores.length; i++) {
    const score = scores[i]
    console.log(score)

    scoresUlRef.innerHTML += "<li>" + score + "</li>"

}

let sum = 95 + 72 + 88 + 45 + 60 + 79 + 82 + 91 + 50 + 38
console.log(sum)

let average = sum / 10
console.log(average);

const averageRef = document.getElementById("averageScore");
averageRef.innerHTML = 70;
console.log(averageRef.innerHTML);