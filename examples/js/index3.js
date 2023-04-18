function addErrorClass(id) {
    var el = document.getElementById(id);
    el.className = 'error-input'
}
function addErrorClassToAllInputs() {
    addErrorClass('first-name');
    addErrorClass('last-name');
    addErrorClass('address');
}
// window.setTimeout(addErrorClassToAllInputs, 2000)
// addErrorClassToAllInputs();

var sendButton = document.getElementById('send-button')

// sendButton.addEventListener('click', addErrorClassToAllInputs)

function onFirstNameKeyUp(){
    addErrorClass('first-name');
}

var firstName = document.getElementById('first-name')
firstName.addEventListener('keyup', onFirstNameKeyUp)