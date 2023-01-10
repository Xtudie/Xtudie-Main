console.log('Hello F*cking World!');

const materialCards = document.getElementsByClassName('material');


for (let index = 0; index < materialCards.length; index++) {
    const element = materialCards[index];
    element.addEventListener('onclick', (e) => {
        e.target
    })
}
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