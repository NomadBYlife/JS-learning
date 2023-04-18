function firstNameLog() {
    var id = 'first-name';
    var el = document.getElementById(id)
    console.log(el.value);
}

function lastNameLog() {
    var id = 'last-name';
    var el = document.getElementById(id)
    console.log(el.value);
}


function logValue(id) {
    var el = document.getElementById(id)
    console.log(el.value);
}

function getValue(id) {
    var el = document.getElementById(id)
    return el.value;
}

var firstNameId = 'first-name'
var lastNameid = 'last-name'

logValue(firstNameId);
logValue(firstNameId);
logValue(firstNameId);

logValue(lastNameid);
logValue(lastNameid);
logValue(lastNameid);

var value = getValue(firstNameId);
console.log(value);
