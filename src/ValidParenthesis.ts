function isValid(s: string): boolean {

    let parenthesis: Record<string, string> = { ')': '(', '}': '{', ']': '['}

    let stack: string[] = [];

    for(let i = 0; i < s.length; i++) {

        if ( s[i] === ')' || s[i] === '}' || s[i] === ']' ) {

            if ((parenthesis[s[i]] === stack[stack.length - 1 ]) && stack.length !== 0) {
                
                stack.pop()

            } else {

                return false

            }

        } else {

            stack.push(s[i])

        } 

    }

    return stack.length === 0

};

const wow: string = "([])"
console.log(isValid(wow))