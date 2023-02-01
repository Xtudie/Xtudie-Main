data = {
    "materialsInfo": [
        {
            name: "EGL 103 - Introduction to Spoken English",
            reviews: 12,
            materialsIn: 13,
            price: 'Free',
            id: 1
        },
        {
            name: "LIT 101 - Introduction to Prose Fiction",
            reviews: 20,
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
            reviews: 23,
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
};
//Try to automatically add data into the material container;
const materialsList = document.querySelector('.materials-list');

//sort materials according to popularity
const sortedMaterial = data.materialsInfo
    .sort((a, b) => (a.reviews < b.reviews ? 1 : -1))
    .slice(0, 6);

//cycle through materials details
sortedMaterial
    .map(material => {
    // create details containers
    const materialContainer = document.createElement('div');
    const icon = document.createElement('div');
    const materialName = document.createElement('div');
    const materialPrice = document.createElement('div');
    const hr = document.createElement('hr');
    const materialInfo = document.createElement('div');
    const materialNumber = document.createElement('div');
    const materialNoContainer = document.createElement('span')
    const reviews = document.createElement('div');
    const reviewsContainer = document.createElement('span');
    const button = document.createElement('button');

    //add class name
    materialContainer.classList.add('material');
    icon.classList.add('icon');
    materialName.setAttribute('id', 'material-name');
    materialPrice.classList.add('price'); materialPrice.setAttribute('id', 'price');
    materialInfo.classList.add('material-info');
    materialNumber.setAttribute('id', 'number');
    materialNoContainer.classList.add('materialNo');
    reviews.setAttribute('id', 'reviews');
    reviewsContainer.classList.add('reviewNo')
    button.classList.add('view-btn');

    //add contents
    materialName.textContent = material.name;
    materialPrice.textContent = material.price;
    reviewsContainer.textContent = material.reviews;
    materialNoContainer.textContent = material.materialsIn;
    button.textContent = "View Now"
    let m = ' Materials';
    let r = ' Reviews';

    //append elements
    materialsList.appendChild(materialContainer);
    materialContainer.appendChild(icon);
    materialContainer.appendChild(materialName);
    materialContainer.appendChild(materialPrice);
    materialContainer.appendChild(hr);
    materialContainer.appendChild(materialInfo);
    materialContainer.appendChild(button);
    materialInfo.appendChild(materialNumber);
    materialInfo.appendChild(reviews);
    materialNumber.appendChild(materialNoContainer);
    reviews.appendChild(reviewsContainer);

    materialNumber.textContent += m;
    reviews.textContent += r;
});

//get onPage containers to hold data
const materials = document.getElementsByClassName('material');

//turn container into array
let materialArry = [...materials];