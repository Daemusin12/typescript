function isPalindrome(x: number): boolean {
    
    if (x < 0) {

        return false;
    }

    let number: number = x;

    let reverse = 0;

    while (number > 0) {

        reverse = reverse * 10 + number % 10;
        number = Math.floor(number / 10);

    }
    return x === reverse;
};

const x: number = 121

console.log(isPalindrome(x))
