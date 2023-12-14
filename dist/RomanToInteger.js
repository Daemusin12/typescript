"use strict";
function romanToInt(s) {
    let roman = { 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1 };
    let value = 0;
    let prev = 0;
    for (let i = 0; i < s.length; i++) {
        if (roman[s[i]] > prev) {
            value = value + (roman[s[i]] - prev) - prev;
            prev = roman[s[i]];
        }
        else {
            value = value + roman[s[i]];
            prev = roman[s[i]];
        }
    }
    ;
    return value;
}
;
const s = "MCMXCIV";
const t = "LVIII";
console.log(romanToInt(s));
console.log(romanToInt(t));
//# sourceMappingURL=RomanToInteger.js.map