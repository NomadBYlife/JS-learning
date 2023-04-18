//work with car

car1.engine.horsesPower = 200;
console.log(car1);
console.log(car1.isTurnOn);
car1.start();
console.log(car1.isTurnOn);

//find elements
var showPrevBtn = document.getElementById('show-prev');
var showNextBtn = document.getElementById('show-next');
var slideImage = document.getElementById('slide-img');

//subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

// create images array
var imagesUrls = [
    'https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png',
    'https://global.discourse-cdn.com/sitepoint/original/3X/b/5/b59a78e2ed76c705f3c0dcb300f3f222aefdcd99.png',
    'https://astwellsoft.com/assets/images/technologies/JavaScript-logo.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp5pWvPi7mwe4hquccp3nWEagiuZTj1BT8glx0RKAdLrHHeXWHimgvLL3x1ooWQwuCHBw&usqp=CAU',
];
//current Index
var currentImgIndex = 0
showPrevBtn.disabled = true;

slideImage.src = imagesUrls[currentImgIndex];

//function definition
function onShowPrevBtnClick() {
    currentImgIndex--;
    slideImage.src = imagesUrls[currentImgIndex];
    showNextBtn.disabled = false;
    //disabled prev button if need it
    if (currentImgIndex === 0) {
        showPrevBtn.disabled = true;
    }
}


function onShowNextBtnClick() {
    currentImgIndex++;
    slideImage.src = imagesUrls[currentImgIndex];
    showPrevBtn.disabled = false;
    //disabled next button if need it
    if (currentImgIndex === (imagesUrls.length - 1)) {
        showNextBtn.disabled = true;
    }
}


