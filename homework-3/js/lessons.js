const instrumentsUlRef = document.querySelector("#instruments")

const instruments = [
    "Pianao", "Guitar", "Violin", "Drums", "Saxaphone", "Flute"
]

console.table(instruments);

for ( let i = 0; i < instruments.length; i++) {
    const instrument = instruments[i]
    console.log(instrument)
    instrumentsUlRef.innerHTML += "<li>" + instrument + "</li>"

}