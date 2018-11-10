const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const divide = (a, b) => {
    // If it's an integer return it
    let wholeNum = Math.floor(a/b);
    if (a / b === wholeNum) return a/b;
    // Otherwise, turn it into a mixed fraction and simplify
    let remainder = a % b;
    for (let i = remainder; i > 0; i--) {
        if (remainder % i === 0 && b % i === 0) {
            return [wholeNum, remainder / i, b / i];
        }
    }
};