document.getElementById('myform').addEventListener('submit', checkAll);
document.getElementById('password').addEventListener('input', passwordCheck)
function checkExist(id) {
    let wordLength = document.getElementById(id).value.length;
    if (wordLength === 0) {
        return false;
    }
    return true;
}

function regExpMatch(regExp, word) {
    if (!word.match(regExp)) {
        return false;
    }
    return true;
}

function returnDefault(hint, Element) {
    document.getElementById(hint).innerHTML
        = "";
    if (Element != null) {
        Element.style.borderColor = "";
    }
}

function checkLength(id) {
    let wordLength = document.getElementById(id).value.length;
    if (!(wordLength >= 5 && wordLength <= 12)) {
        return false;
    }
    return true;
}
function editStyle(obj, hint, error) {
    if (obj != null) {
        obj.style.borderColor = 'red';
    }
    document.getElementById(hint).innerHTML = error;
    return;
}
function nameCheck() {
    let Element = document.getElementById('fullname');
    if (!checkExist("fullname")) {
        editStyle(Element, "fullnameHint", "Full Name is Required")
        return false;
    }

    if (!regExpMatch("^[A-Za-z ]+$", "fullname", Element.value)) {
        editStyle(Element, "fullnameHint", "Only Alphabets are allowed")
        return false;
    }
    returnDefault("fullnameHint", Element);
    return true;
}
function userIdCheck() {
    let Element = document.getElementById('userid');

    if (!checkExist('userid')) {
        editStyle(Element, "useridHint", "User Id is Required")
        return false;
    }

    let wordLength = document.getElementById('userid').value.length;
    if (!(wordLength >= 5 && wordLength <= 12)) {
        editStyle(Element, "useridHint", "User Id length must be of length 5 to 12")
        return false;
    }
    returnDefault('useridHint', Element);
    return true;
}

function passwordCheck() {
    let Element = document.getElementById('password');

    if (!checkExist("password")) {
        editStyle(Element, "passwordHint", "Password is Required")
        return false;
    }

    if (!checkLength("password")) {
        Element.style.borderColor = "red";
        editStyle(Element, "passwordHint", "Password length must be between 5 and 12")
        return false;

    }
    returnDefault('passwordHint', Element);
    return true;
}

function countryCheck() {
    let Element = document.getElementById('country');

    if (!checkExist('country')) {
        editStyle(Element, "countryHint", "Coutry must be Selected")
        return false;
    }

    returnDefault('countryHint', Element);
    return true;
}

function zipcodeCheck() {
    let Element = document.getElementById('zipcode');

    if (!checkExist('zipcode')) {
        editStyle(Element, "zipcodeHint", "ZIP Code is Required")
        return false;
    }

    if (!regExpMatch(/^\d+$/, Element.value)) {
        editStyle(Element, "zipcodeHint", "Only Numbers are allowed")
        return false;
    }
    returnDefault('zipcodeHint', Element);
    return true;
}

function emailCheck() {
    let Element = document.getElementById('email');

    if (!checkExist("email")) {
        editStyle(Element, "emailHint", "Email is Required")
        return false;
    }
    if (!regExpMatch(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, Element.value)) {
        editStyle(Element, "emailHint", "Enter a validate email")
        return false;
    }

    returnDefault('emailHint', Element);
    return true;
}

function sexCheck() {
    let founded;
    const elementWithNameValue = document.querySelectorAll('[name="sex"]');

    elementWithNameValue.forEach(element => {
        if (element.checked) {
            returnDefault('sexHint');
            founded = true;
        }
    });

    if (founded == true) {
        returnDefault('sexHint', null);
        return true;
    }
    editStyle(null, "sexHint", "Choose your Gender")
    return false;
}

function languageCheck() {
    let founded;
    const elementWithNameValue = document.querySelectorAll('[name="language"]');

    elementWithNameValue.forEach(element => {
        if (element.checked) {
            returnDefault('languageHint');
            founded = true;
        }
    });

    if (founded == true) {
        returnDefault('languageHint', null);
        return true;
    }
    editStyle(null, "languageHint", "Choose your Language")
    return false;
}
function checkAll() {
    event.preventDefault()
    let x = nameCheck();
    let y = userIdCheck();
    let z = passwordCheck();
    let e = emailCheck();
    let s = sexCheck();
    let l = languageCheck();

    // let c = countryCheck();
    // let v = zipcodeCheck();

    if (x && y && z && e && s && l) {
        return true;
    }
    return false;
}