var isPalindrome = function (x) {
    if (x < 0) {
        return false
    } else if (x < 10) {
        return true
    }
    let str = x.toString()
    let isPalind = true
    for (let i = 0, len = str.length; i < len; i++) {
        if(str[i]!==str[len-1-i]){
            isPalind = false;
            break
        }
    }
    return isPalind
};

console.log(isPalindrome(2101012))