const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialChar = "!@#$%^&*()-_=+[{]}\|:;<>,.?/";
var checkUc = document.getElementById('check-uc');
var checkLc = document.getElementById('check-lc');
var checkNo = document.getElementById('check-no');
var checkSp = document.getElementById('check-sp');
var password = document.getElementById('password');
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const result = document.getElementById('result');

lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
  });
function Generate() {
    const lenght = +lengthSlider.value;
    
    let pass = "";
    let selectedChars = "";
    
    if (checkUc.checked) {
        selectedChars += upperCase;
        pass += upperCase[Math.floor(Math.random() * upperCase.length)];
    }
    if (checkLc.checked) {
        selectedChars += lowerCase;
        pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    if (checkNo.checked) {
        selectedChars += number;
        pass += number[Math.floor(Math.random() * number.length)];
    }
    if (checkSp.checked) {
        selectedChars += specialChar;
        pass += specialChar[Math.floor(Math.random() * specialChar.length)];
    }

    if (selectedChars === "") {
        // alert('please Give all the information Lenght And Case');
        document.getElementById('result').textContent = "Select at least one option!";
        // return;
    }

    while (pass.length < lenght) {
        pass += selectedChars[Math.floor(Math.random() * selectedChars.length)];
    }
    console.log(pass.length);
    if(selectedChars === ""){
        password.value = ""
    }else{
        password.value = pass
    }
}
function Copy(){
        var copyText = document.getElementById('password').value;
        navigator.clipboard.writeText(copyText);
        alert("copied")
}