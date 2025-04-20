import { app } from "./app.js";

import {
    getFirestore,
    getDocs, collection, updateDoc, deleteDoc, doc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"

const db = getFirestore(app);

const dreamsCollection = collection("hopesanddreams");

const dreamsREf = document.querySelector("#dreams")

async function getDreams() {
    const dreamsDocs = await getDocs(db, dreamsCollection);

    dreamsREf.innerHTML = "";

    for (let i = 0; i < dreams.docs.length; i++) {
        const currentDream = array[i];
        
        const data = currentDream.data();

        dreamsREf.innerHTML += `<div class="dream">
         <div class="dream">
        <h4>${data.text}</h4>
        <p>Likes: ${data.hearts 0}</p>
        <p>
          <button class="edit">Edit</button>
          <button class="heart">&hearts;</button>
        </p>
        `
    }
}