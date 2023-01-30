const materialCards = document.getElementsByClassName('material');
 
//initialise itiration
i = 0;
animateItem = () => {
    const book = document.getElementById('book');
    const bookContents = ['Learning', 'Experience', 'Studies'];
    
    //increase itiration count
    setTimeout(() => {
        i ++;
        if (i > 2) {
            i = 0;
        };
    }, 2900);
    setTimeout( () => {
        book.innerHTML = bookContents[i];
        animateItem()
    }, 3000);   
};
animateItem();

let viewBtns = document.querySelectorAll('.view-btn');
let viewBtnsArry = [...viewBtns];
let viewBtn = viewBtnsArry.forEach(btn => {
    btn
});
materialArry.forEach(material => {
    const priceBtn = material.lastElementChild;
    material.addEventListener('mouseover', () => {
        priceBtn.style.backgroundColor = '#79bf91';
        priceBtn.style.color = '#f9f7ff';
        priceBtn.style.borderColor = '#79bf91';
    });
    material.addEventListener('mouseout', () => {
        priceBtn.style.backgroundColor = 'transparent';
        priceBtn.style.color = '#6255a5';
        priceBtn.style.borderColor = '#6255a5'
    })
});