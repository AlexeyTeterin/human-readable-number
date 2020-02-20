module.exports = function toReadable (number) {
    let units, tens, tensUnder20, hundreds, result = '';

    units = number%10;
    tens = (number-units)%100;
    tensUnder20 = number%100;
    hundreds = (number-tens-units)/100;

    function toWord(digit) {
        switch (digit) {
            case 1: return "one";
            case 2: return "two";
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
            case 10: return 'ten';
            case 11: return 'eleven';
            case 12: return 'twelve';
            case 13: return 'thirteen';
            case 14: return 'fourteen';
            case 15: return 'fifteen';
            case 16: return 'sixteen';
            case 17: return 'seventeen';
            case 18: return 'eighteen';
            case 19: return 'nineteen';
            case 20: return 'twenty';
            case 30: return 'thirty';
            case 40: return 'forty';
            case 50: return 'fifty';
            case 60: return 'sixty';
            case 70: return 'seventy';
            case 80: return 'eighty';
            case 90: return 'ninety';
            default: return '';
        }
    }

    if (number===0) return 'zero';
    if (number<=20) return  toWord(number);

    if (number>=100) result += toWord(hundreds) + ' hundred';
    if (tens<20) {
        result += ' ' + toWord(tensUnder20)
    } else result += ' ' + toWord(tens) + ' ' + toWord(units);

    return result.trim();

}
