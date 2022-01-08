module.exports = function toReadable (number) {
    let objectNumber = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
    }
    let arrayOfNumber = number.toString().split('');
    if (number <= 20) {
        return objectNumber[number]
    }
    else if (number <= 99) {
        if (arrayOfNumber[1] == 0) {
            return objectNumber[arrayOfNumber[0] + 0]
        }
        else {
            return objectNumber[arrayOfNumber[0] + 0] + ' ' + objectNumber[arrayOfNumber[1]]
        }
        
    }
    else if (number <= 999) {
        if ((arrayOfNumber[1] == 0) && (arrayOfNumber[2] != 0)) {
            return objectNumber[arrayOfNumber[0]] + ' hundred' + ' ' + objectNumber[arrayOfNumber[2]]
        }
        else if (arrayOfNumber[2] == 0 && arrayOfNumber[1] != 0) {
            return objectNumber[arrayOfNumber[0]] + ' hundred' + ' ' + objectNumber[arrayOfNumber[1] + arrayOfNumber[2]]
        }
        else if ((arrayOfNumber[1] == 0) && (arrayOfNumber[2] == 0)) {
            return objectNumber[arrayOfNumber[0]] + ' hundred'
        }
        else if (arrayOfNumber[1] == 1) {
            return objectNumber[arrayOfNumber[0]] + ' hundred' + ' ' + objectNumber[arrayOfNumber[1] + arrayOfNumber[2]]
        }
        else{
            return objectNumber[arrayOfNumber[0]] + ' hundred' + ' ' + objectNumber[arrayOfNumber[1] + 0] + ' ' + objectNumber[arrayOfNumber[2]]
        }
    }
    else {
        return 'enter number less or equal 999'
    }
}
