/**
 * @param {string} s
 * @return {string}
 */

const isHui = (str) => str.split('').reverse().join('') === str;
var longestPalindrome = function (s) {
    if (!s || s.length < 2) {
        return s
    }
    let maxHui = s.substr(0, 1)
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                let huiStr = s.slice(i, j + 1)
                if (huiStr.length > maxHui.length && isHui(huiStr)) {
                    maxHui = huiStr
                }
            }
        }
    }
    return maxHui
};


console.log(longestPalindrome('a'))