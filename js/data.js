data = {
    "materialsInfo": [
        {
            name: "EGL 103 - Introduction to Spoken English",
            reviews: 12,
            materialsIn: 13,
            price: 'free',
            id: 1
        },
        {
            name: "LIT 101 - Introduction to Prose Fiction",
            reviews: 15,
            materialsIn: 10,
            price: "Free",
            id:2
        },
        {
            name: "MTH 101 - Elementary Mathematics",
            reviews: 17,
            materialsIn: 15,
            price: "Free",
            id:3
        },
        {
            name: "SSC 105 - Mathematics for social science",
            reviews: 15,
            materialsIn: 15,
            price: "Free",
            id:4
        },
        {
            name: "YOR 111 - Introduction to Yoruba language",
            reviews: 10,
            materialsIn: 6,
            price: "Free",
            id:5
        },
        {
            name: "EDU 101 -  Education and Management ethics",
            reviews: 8,
            materialsIn: 18,
            price: "#200",
            id:6
        },
        {
            name: "PHL 101 - Basic Philosophical Problems",
            reviews: 10,
            materialsIn: 18,
            price: 'Free',
            id: 7
        }
    ]
}

//collect materials info from data
const materialsData = data.materialsInfo
    .map(material => material.name);
const reviewsData = data.materialsInfo
    .map(material => material.reviews);
const materialIn = data.materialsInfo
    .map(material => material.materialsIn);
const priceData = data.materialsInfo
    .map(material => material.price);


//get onPage containers to hold data
const materials = document.getElementsByClassName('material');
const reviews = document.getElementsByClassName('reviewNo');
const materialsIn = document.getElementsByClassName('materialNo');
const price = document.getElementsByClassName('price');

//turn container into array
let reviewsArry = [...reviews];
let materialArry = [...materials];
let materialsInArry = [...materialsIn];
let priceArry = [...price];

let materialNameArry = materialArry.map( item => item.children[1]);

const pos  = [0,1,2,3,4,5];
pos.forEach(num => {
    materialNameArry[num].innerHTML = materialsData[num];
    reviewsArry[num].innerHTML = reviewsData[num];
    materialsInArry[num].innerHTML = materialIn[num];
    priceArry[num].innerHTML = priceData[num];
});


console.log(materialNameArry);
console.log(reviews)