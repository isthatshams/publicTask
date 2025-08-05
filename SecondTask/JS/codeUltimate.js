document.getElementById('myform').addEventListener('submit', checkAll);
function checkExist(id) {
    let wordLength = document.getElementById(id).value.length;
    console.log(wordLength);
    //use === to make sure it is in the type of 
    if (wordLength === 0) {
        return false;
    }
    return true;
}

function regExpMatch(regExp, word) {
    if (!word.match(regExp)) {
        console.log(word + 'did not pass');
        return false;
    }
    return true;
}

function returnDefault(hint, x) {
    document.getElementById(hint).innerHTML
        = "";
    x.style.borderColor = "";
}

function checkLength(id) {
    let wordLength = document.getElementById(id).value.length;
    if (!(wordLength >= 5 && wordLength <= 12)) {
        return false;
    }
    return true;
}
function editStyle(obj, hint, error) {
    obj.style.borderColor = 'red';
    document.getElementById(hint).innerHTML = error;
    return;
}
function nameCheck() {
    let x = document.getElementById('fullname');
    if (!checkExist("fullname")) {
        editStyle(x, "fullnameHint", "Full Name is Required")
        return false;
    }

    //^[A-Za-z]+$: the first char is start (if it was inside it is NOT),
    // the [] is the list,+$ is the end of the string
    if (!regExpMatch("^[A-Za-z ]+$", "fullname", x.value)) {
        editStyle(x, "fullnameHint", "Only Alphabets are allowed")
        return false;
    }
    returnDefault("fullnameHint", x);
    return true;
}
function userIdCheck() {
    let x = document.getElementById('userid');

    if (!checkExist('userid')) {
        editStyle(x, "useridHint", "User Id is Required")
        return false;
    }

    let wordLength = document.getElementById('userid').value.length;
    if (!(wordLength >= 5 && wordLength <= 12)) {
        editStyle(x, "useridHint", "User Id length must be of length 5 to 12")
        return false;
    }
    returnDefault('useridHint', x);
    return true;
}

function passwordCheck() {
    let x = document.getElementById('password');

    if (!checkExist("password")) {
        editStyle(x, "passwordHint", "Password is Required")
        return false;
    }

    if (!checkLength("password")) {
        x.style.borderColor = "red";
        editStyle(x, "passwordHint", "Password length must be between 5 and 12")
        return false;

    }
    returnDefault('passwordHint', x);
    return true;
}

function countryCheck() {
    let x = document.getElementById('country');

    if (!checkExist('country')) {
        editStyle(x, "countryHint", "Coutry must be Selected")
        return false;
    }

    returnDefault('countryHint', x);
    return true;
}

function zipcodeCheck() {
    let x = document.getElementById('zipcode');

    if (!checkExist('zipcode')) {
        editStyle(x, "zipcodeHint", "ZIP Code is Required")
        return false;
    }

    // use (/ at the start and end of regExp,
    // it won't conflict the match Function)
    if (!regExpMatch(/^\d+$/, x.value)) {
        editStyle(x, "zipcodeHint", "Only Numbers are allowed")
        return false;
    }
    returnDefault('zipcodeHint', x);
    return true;
}

function emailCheck() {
    let x = document.getElementById('email');

    if (!checkExist("email")) {
        editStyle(x, "emailHint", "Email is Required")
        return false;
    }
    if (!regExpMatch(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, x.value)) {
        editStyle(x, "emailHint", "Enter a validate email")
        return false;
    }

    returnDefault('emailHint', x);
    return true;
}

function sexCheck() {
    let male = document.getElementById('male');
    let female = document.getElementById('female');

    if (male.checked) {
        returnDefault('sexHint', male);
        return true;
    } else if (female.checked) {
        returnDefault('sexHint', female);
        return true;
    }
    editStyle(x, "sexHint", "Choose your Gender")
    return false;
}

function languageCheck() {
    let english = document.getElementById('english');
    let russian = document.getElementById('russian');
    let x = document.getElementById('language');
    if (english.checked) {
        returnDefault('languageHint', x);
        return true;
    } else if (russian.checked) {
        returnDefault('languageHint', x);
        return true;
    }
    editStyle(x, "languageHint", "Choose your Gender")
    return false;
}
function checkAll() {
    event.preventDefault()
    let x = nameCheck();
    let y = userIdCheck();
    let z = passwordCheck();
    let c = countryCheck();
    let v = zipcodeCheck();
    let e = emailCheck();
    let s = sexCheck();
    let l = languageCheck();
    if (x && y && z && c && v && e && s && l) {
        return true;
    }
    return false;
}