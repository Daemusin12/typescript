"use strict";
function isPalindrome(x) {
    if (x < 0) {
        return false;
    }
    let number = x;
    let reverse = 0;
    while (number > 0) {
        reverse = reverse * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    return x === reverse;
}
;
const x = 121;
console.log(isPalindrome(x));
//# sourceMappingURL=IsPalindrome.js.map