console.log("Umm...where are we?");

const birthYear = 2004;

let myName = "Haley"

console.log(myName, "was born", birthYear);

myName = "Vexinight"

// constant variables can't change their values
// birthYear = 2005;

console.warn(myName, "MAY have devoured 10 souls.")

console.log("myName is", myName.length, "charachters long.")

console.log("myName includes vex", myName.toLocaleLowerCase().includes("vex"));

myName = "vex";

console.log("myName has uppercase", myName !== myName.toLocaleLowerCase())