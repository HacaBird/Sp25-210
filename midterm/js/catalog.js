const catalogRef = document.querySelector("#catlog")

const catalogItems = [
    {
        image:"https://iu.instructure.com/courses/2298808/files/187209674/preview?instfs=true",
        name: "My First Fire"
    },

    {
        image:"https://iu.instructure.com/courses/2298808/files/187209675/preview?instfs=true",
        name: "Nap Sack"
    },

    {
        image:"https://iu.instructure.com/courses/2298808/files/187209676/preview?instfs=true",
        name:"Hot Tub Wilidlife Feeder"
    },
    {
        image:"https://iu.instructure.com/courses/2298808/files/187209677/preview?instfs=true",
        name:"Pudding Pouch"
    },
    {
        image:"https://iu.instructure.com/courses/2298808/files/187209678/preview?instfs=true",
        name:"Toilet Meadow"
    },
    {
        image:"https://iu.instructure.com/courses/2298808/files/187209679/preview?instfs=true",
        name:"Handy Hand"
    },
];

catalogRef.innerHTML=""

for (let index = 0; index < catalogItems.length; index++) {
    const item = catalogItems[index];
    
    const newArticle = document.createElement("article")
    const newImg = document.createElement("img")
    newImg.src = item.image;
    newArticle.appendChild(newImg);

    const newP = "<p>" + item.name + "</p>"
    newArticle.innerHTML += newP;

    catalogRef.appendChild(newArticle);
}