const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialChar = "!@#$%^&*()-_=+[{]}\|:;<>,.?/";
const allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]}\|:;<>,.?/";
const upperNo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const upperLower = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const uppersp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+[{]}\|:;<>,.?/';
const lowerNo = 'abcdefghijklmnopqrstuvwxyz0123456789';
const lowerSp = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[{]}\|:;<>,.?/';
const noSp = '0123456789!@#$%^&*()-_=+[{]}\|:;<>,.?/';
const upperLowerNo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const upperLowerSp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[{]}\|:;<>,.?/';
const upperNoSp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[{]}\|:;<>,.?/';
const lowerNoSp = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]}\|:;<>,.?/';
var checkUc = document.getElementById('check-uc');
var checkLc = document.getElementById('check-lc');
var checkNo = document.getElementById('check-no');
var checkSp = document.getElementById('check-sp');
const lenght = 14;

function Generate() {
    let pass = "";
    //case 01 all checked
    if (checkUc.checked && checkLc.checked && checkNo.checked && checkSp.checked) {
        pass += upperCase[Math.floor(Math.random() * upperCase.length)];
        pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        pass += number[Math.floor(Math.random() * number.length)];
        pass += specialChar[Math.floor(Math.random() * specialChar.length)];
        while (lenght > pass.length) {
            pass += allChar[Math.floor(Math.random() * allChar.length)];

        }
    }
    //case 02 Upper
    else if (checkUc.checked) {
        pass += upperCase[Math.floor(Math.random() * upperCase.length)];
        while (lenght > pass.length) {
            pass += upperCase[Math.floor(Math.random() * upperCase.length)];

        }
    }
    //case 03 Lower
    else if (checkLc.checked) {
        pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        while (lenght > pass.length) {
            pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];

        }
    }
    // case 04 number
    else if (checkNo.checked) {
        pass += number[Math.floor(Math.random() * number.length)];
        while (lenght > pass.length) {
            pass += number[Math.floor(Math.random() * number.length)];

        }
    }
    //case 05 special
    else if (checkSp.checked) {
        pass += specialChar[Math.floor(Math.random() * specialChar.length)];
        while (lenght > pass.length) {
            pass += specialChar[Math.floor(Math.random() * specialChar.length)];

        }
    }
    //  case 06 upperno
    else if (checkUc.checked && checkNo.checked) {
        pass += upperCase[Math.floor(Math.random() * upperCase.length)]
        pass += number[Math.floor(Math.random() * number.length)]
        while (lenght > pass.length) {
            pass += upperNo[Math.floor(Math.random() * upperNo.length)]
        }
    }

    // case 7const upperLower
    else if (checkUc.checked && checkLc.checked) {
        pass += upperCase[Math.floor(Math.random() * upperCase.length)];
        pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        while (lenght > pass.length) {
            pass += upperLower[Math.floor(Math.random() * upperLower.length)];

        }
    }
    // case 8 const uppersp
    else if (checkUc.checked && checkSp.checked) {
        pass += upperCase[Math.floor(Math.random() * upperCase.length)];
        pass += specialChar[Math.floor(Math.random() * specialChar.length)];
        while (lenght > pass.length) {
            pass += uppersp[Math.floor(Math.random() * uppersp.length)];

        }
    }
    // 9 const lowerNo
    else if (checkNo.checked && checkLc.checked) {
        pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        pass += number[Math.floor(Math.random() * number.length)];
        while (lenght > pass.length) {
            pass += lowerNo[Math.floor(Math.random() * lowerNo.length)];

        }
    }
    // 10 const lowerSp
    else if (checkLc.checked && checkSp.checked) {
        pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        pass += specialChar[Math.floor(Math.random() * specialChar.length)];
        while (lenght > pass.length) {
            pass += lowerSp[Math.floor(Math.random() * lowerSp.length)];

        }
    }
    // 11 const noSp
    else if (checkNo.checked && checkSp.checked) {
        pass += number[Math.floor(Math.random() * number.length)];
        pass += specialChar[Math.floor(Math.random() * specialChar.length)];
        while (lenght > pass.length) {
            pass += noSp[Math.floor(Math.random() * noSp.length)];

        }
    }
    // 12 const upperLowerNo 
    else if (checkUc.checked && checkLc.checked && checkNo.checked) {
        pass += upperCase[Math.floor(Math.random() * upperCase.length)];
        pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        pass += number[Math.floor(Math.random() * number.length)];
        while (lenght > pass.length) {
            pass += upperLowerNo[Math.floor(Math.random() * upperLowerNo.length)];

        }
    }
    // 13 const upperLowerSp 
    else if (checkUc.checked && checkLc.checked && checkSp.checked) {
        pass += upperCase[Math.floor(Math.random() * upperCase.length)];
        pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        pass += specialChar[Math.floor(Math.random() * specialChar.length)];
        while (lenght > pass.length) {
            pass += upperLowerSp[Math.floor(Math.random() * upperLowerSp.length)];

        }
    }
    // 14 const upperNoSp 
    else if (checkUc.checked && checkNo.checked && checkSp.checked) {
        pass += upperCase[Math.floor(Math.random() * upperCase.length)];
        pass += number[Math.floor(Math.random() * number.length)];
        pass += specialChar[Math.floor(Math.random() * specialChar.length)];
        while (lenght > pass.length) {
            pass += upperNoSp[Math.floor(Math.random() * upperNoSp.length)];

        }
    }
    // 15 const lowerNoSp 
    else if (checkLc.checked && checkNo.checked && checkSp.checked) {
        pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        pass += number[Math.floor(Math.random() * number.length)];
        pass += specialChar[Math.floor(Math.random() * specialChar.length)];
        while (lenght > pass.length) {
            pass += lowerNoSp[Math.floor(Math.random() * lowerNoSp.length)];

        }
    }
    //case if not selected
    else {
        alert('please check one field')
    }

    console.log(pass);
}
