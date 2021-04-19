/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(s == ''){return 0}
    let strs = []; let max = 0;
    for(let i = 0; i < s.length;i ++){
        if(strs.indexOf(s[i]) >= 0){
            strs.splice(0, strs.indexOf(s[i]) + 1);
        }

        strs.push(s[i]);
        max = Math.max(max, strs.length);
    };

    return max;
};

console.log(lengthOfLongestSubstring("dvdf"));