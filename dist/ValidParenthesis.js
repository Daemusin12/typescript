"use strict";
function isValid(s) {
    let parenthesis = { ')': '(', '}': '{', ']': '[' };
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
            if ((parenthesis[s[i]] === stack[stack.length - 1]) && stack.length !== 0) {
                stack.pop();
                console.log(stack[stack.length]);
            }
            else {
                return false;
            }
        }
        else {
            stack.push(s[i]);
            console.log(stack);
        }
    }
    return stack.length === 0;
}
;
const wow = "([])";
console.log(isValid(wow));
//# sourceMappingURL=ValidParenthesis.js.map