function alertValue() {
    console.log(ourValue.value);
    console.log(ourValue.className);
}

function alertValue2() {
    console.log(ourValue2.value);
    console.log(ourValue2.className);
}
function alertCities() {
    console.log(ourCities.value);
    console.log(ourCities.className);
}

function alertValues(elementParameter){
    console.log(elementParameter.value, 'console1');
    console.log(elementParameter.className, 'console2');
}
var ourValue = document.getElementById('myId');
alertValues(ourValue);
var ourValue2 = document.getElementById('myId2');
alertValues(ourValue2);
var ourCities = document.getElementById('cities');
alertValues(ourCities);
var ourText = document.getElementById('myId3');
alertValues(ourText);

var myDiv = document.getElementById('avatar-wrapper');
alertValues(myDiv);


// myDiv.innerHTML = '<ul><li>1</li><li>2</li></ul>';
ourText.value = 'I have not interest';
alertValues(ourText);

ourCities.value = 'Kiev';
alertValues(ourCities);


ourValue2.title = 'correct name!';
alertValues(ourValue2);
ourValue.setAttribute('value','Anton');
ourValue.value = 'Anton'

// window.alert(ourValue.className);
ourValue.className = 'last-name default-name error-input'
alertValues(ourValue);

var ourAvatar = document.getElementById('avatar');
// ourAvatar.src = 'https://static.frontendmasters. com/assets/courses/2022-11-15-javascript-first-steps/thumb.webp'
ourAvatar.title = 'I am avatar';

